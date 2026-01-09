import { router } from "expo-router";
import { View, Text, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect, useState } from "react";

import { BudgetHeader } from "../components/BudgetHeader";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/Input";
import { Filter } from "../components/Filter";
import { Checkbox } from "../components/Checkbox";
import { StatusWrapper } from "../components/StatusWrapper";
import { ServicesWrapper } from "../components/ServicesWrapper";
import { Button } from "../components/Button";
import { InvestmentWrapper } from "../components/InvestmentWrapper";
import { DismissKeyboardView } from "../components/DismissKeyboardView";

import { FilterStatus } from "../enums/FilterStatus";

import { colors } from "../theme";

import { BudgetContext } from "../context/BudgetContext";
import { ServiceContext } from "../context/ServiceContext";
import { ServiceStorageProps } from "../storage/serviceStorage";
import { useInvestmentCalculations } from "../hooks/useInvesmentCalculations";

export default function Budget() {
    const { serviceList, setSelectedService, clearService} = useContext(ServiceContext)
    const { addBudget, setSelectedBudget } = useContext(BudgetContext)

    const [title, setTitle] = useState("")
    const [client, setClient] = useState("")
    const [status, setStatus] = useState<FilterStatus | null>(null)
    const [discount, setDiscount] = useState("")

    useEffect(() => {
        clearService()
    }
    , [])

    const {subtotal, total, discountValue, serviceLength} = useInvestmentCalculations(serviceList, Number(discount)) 

    async function handleSave() {
        if(!title.trim()) {
            return Alert.alert("Erro", "Campo de título não preenchido!")
        }
        if(!client.trim()) {
            return Alert.alert("Erro", "Campo de cliente não preenchido!")
        }
        if(status === null) {
            return Alert.alert("Erro", "Selecione um status para o orçamento!")
        }

        const formattedServices = (serviceList || []).map((item) => ({
            ...item,
            quantity: Number(item.quantity),
            value: Number(String(item.value).replace('.', ','))
        }))

        const newBudget = {
            id: Date.now().toString(),
            title: title,
            client: client,
            value: total,
            status: status,
            created_at: new Date().toISOString().split('T')[0],
            updated_at: new Date().toISOString().split('T')[0],
            services: formattedServices,
            discount: Number(discount)
        }
        
        try {
            await addBudget(newBudget)
            clearService()
            router.back()
        } catch (error) {
            console.log("Erro: ", error)
            Alert.alert("Erro","Não foi possível salvar o orçamento!")
        }
    }

    function handleEdit(service: ServiceStorageProps) {
        setSelectedService(service)

        router.push("/(modals)/service")
    }

    return (
        <DismissKeyboardView>
            <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <BudgetHeader 
                        icon="arrow-back-ios"
                        title="Orçamentos"   
                        onPress={() => router.back()}
                    />
                    <Wrapper icon={"store"} title="Informações Gerais">
                        <View style={{ padding: 20, gap: 12 }}>
                            <Input 
                                placeholder="Título"
                                value={title}
                                onChangeText={setTitle}
                            />
                            <Input 
                                placeholder="Cliente"
                                value={client}
                                onChangeText={setClient}
                            />
                        </View>
                    </Wrapper>

                    <Wrapper icon="sell" title="Status">
                        <StatusWrapper
                            selected={status}
                            onSelect={(newStatus) => setStatus(newStatus)}
                        />
                    </Wrapper>

                    <Wrapper icon="notes" title="Serviços inclusos">
                        <ServicesWrapper 
                            data={serviceList}
                            onPress={() => (
                                setSelectedService(null),
                                router.push("/(modals)/service")
                            )}
                            onEdit={handleEdit}
                        />
                    </Wrapper>

                    <Wrapper icon="credit-card" title="Investimento">
                        <InvestmentWrapper 
                            subtotal={subtotal}
                            serviceItemQuantity={serviceLength}
                            discount={discountValue}
                            total={total}
                            onChangePercentage={setDiscount}
                        />
                    </Wrapper>

                    <View style={{ 
                        flexDirection: "row", 
                        justifyContent: "center", 
                        alignItems: "center",
                        gap: 16,
                        padding: 20,
                        marginTop: 20,
                        borderTopWidth: 0.2,
                        borderTopColor: colors.gray[400]
                    }}>
                        <Button 
                            title="Cancelar"
                            variant="white"
                            onPress={() => router.back()}
                        />
                        <Button 
                            icon={"check"}
                            title="Salvar"
                            onPress={handleSave}
                        />
                    </View>
            </ScrollView>
        </DismissKeyboardView>
    )
}