import { router } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { BudgetHeader } from "../components/BudgetHeader";
import { FilterStatus } from "../types/FilterStatus";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/Input";
import { Filter } from "../components/Filter";
import { Checkbox } from "../components/Checkbox";
import { StatusWrapper } from "../components/StatusWrapper";
import { ServicesWrapper } from "../components/ServicesWrapper";
import { Button } from "../components/Button";
import { InvestmentWrapper } from "../components/InvestmentWrapper";
import { colors } from "../theme";

const DATA = [
{
    id: "1",
    title: "Design de interfaces",
    description: "Criação de wireframes e protótipos de alta fidelidade",
    value: 3847.50,
    quantity: 1
},
{
    id: "2",
    title: "Implantação e suporte",
    description: "Publicação nas lojas de aplicativos e suporte técnico",
    value: 3847.50,
    quantity: 1
},
{
    id: "3",
    title: "Implantação e suporte",
    description: "Publicação nas lojas de aplicativos e suporte técnico",
    value: 3847.50,
    quantity: 1
},
]

export default function Budget() {
    const [title, setTitle] = useState("")
    const [client, setClient] = useState("")
    const [status, setStatus] = useState<FilterStatus | null>(null)
    const [services, setServices] = useState(DATA)
    const [discount, setDiscount] = useState("")

    const subtotal = services.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)

    const discountValue = subtotal * Number(discount)/100

    const total = subtotal - discountValue
    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
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
                        data={services}
                    />
                </Wrapper>

                <Wrapper icon="credit-card" title="Investimento">
                    <InvestmentWrapper 
                        subtotal={subtotal}
                        serviceItemQuantity={services.length}
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
                    />
                    <Button 
                        icon={"check"}
                        title="Salvar"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}