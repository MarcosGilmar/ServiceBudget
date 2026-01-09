import { View, Text, StatusBar, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useContext } from "react";

import { BudgetHeader } from "../../components/BudgetHeader";
import { DismissKeyboardView } from "../../components/DismissKeyboardView";
import { Wrapper } from "../../components/Wrapper";
import { ButtonCircle } from "../../components/ButtonCircle";
import { Button } from "../../components/Button";
import { ServicesWrapper } from "../../components/ServicesWrapper";
import { InvestmentWrapper } from "../../components/InvestmentWrapper";

import { BudgetContext } from "../../context/BudgetContext";
import { ServiceContext } from "../../context/ServiceContext";

import { FilterStatus } from "../../enums/FilterStatus";

import { colors } from "../../theme";
import { typography } from "../../theme/fontFamily";

import { useInvestmentCalculations } from "../../hooks/useInvesmentCalculations";
import { BudgetStorageProps } from "../../storage/budgetStorage";

export default function Summary() {
    const {serviceList} = useContext(ServiceContext)

    const {
        budgetList, 
        selectedBudget, 
        setSelectedBudget,
        updateBudget,
        deleteBudget,
        addBudget
    } = useContext(BudgetContext)

    const params = useLocalSearchParams<{id: string}>()

    if(!selectedBudget) {
        return null
    }

    const {
        subtotal, 
        total, 
        discountPercentage, 
        discountValue, 
        serviceLength
    } = useInvestmentCalculations(selectedBudget.services, selectedBudget.discount)

    async function handleDuplicate(selectedBudget: BudgetStorageProps) {
        
        const newBudgetCopy  = {
            ...selectedBudget,
            id: Date.now().toString(),
            title: selectedBudget.title + " - Cópia",
            created_at: new Date().toISOString().split('T')[0],
            updated_at: new Date().toISOString().split('T')[0] 
        }

        await addBudget(newBudgetCopy)
        setSelectedBudget(null)
        router.back()
    }


    return(
        <DismissKeyboardView>
            <StatusBar barStyle="dark-content"/>
            <BudgetHeader 
                icon="arrow-back-ios"
                title={`Orçamento #${params.id}`}
                onPress={() => router.back()}
                status={selectedBudget.status}
            />
            <View style={{ marginVertical: 20, gap: 20}}>
                <Wrapper
                    icon="storefront"
                    title={selectedBudget.title}
                    variant="title"
                >
                    <View style={styles.containerTitle}>
                        <View>
                            <Text style={styles.label}>Cliente</Text>
                            <Text style={styles.title}>{selectedBudget.client}</Text>
                        </View>
                        
                        <View style={styles.dates}>
                            <View>
                                <Text style={styles.label}>Criado em</Text>
                                <Text style={styles.title}>{selectedBudget.created_at}</Text>
                            </View>

                            <View>
                                <Text style={styles.label}>Atualizado em</Text>
                                <Text style={styles.title}>{selectedBudget.updated_at}</Text>

                            </View>
                        </View>
                    </View>
                </Wrapper>

                <Wrapper
                    icon="sticky-note-2"
                    title="Serviços inclusos"
                >
                    <ServicesWrapper 
                        data={selectedBudget.services}
                    />
                </Wrapper>

                <View style={styles.investmentWrapper}>
                    <InvestmentWrapper 
                        variant="summary"
                        subtotal={subtotal}
                        serviceItemQuantity={serviceLength}
                        discount={discountValue}
                        total={total}
                        percentage={String(discountPercentage)}
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.buttonCircle}>
                    <ButtonCircle 
                        icon="delete"
                        color={colors.feedback["danger-base"]}
                        onPress={() => {
                            deleteBudget(selectedBudget),
                            router.back()
                        }}
                    />
                    <ButtonCircle 
                        icon="content-copy"
                        color={colors.principal["purple-base"]}
                        onPress={() => handleDuplicate(selectedBudget)}
                    />
                    <ButtonCircle 
                        icon="edit"
                        color={colors.principal["purple-base"]}
                        onPress={() => router.push("/budget")}
                    />
                </View>
                <Button 
                    icon="share"
                    title="Compartilhar"
                />
            </View>
        </DismissKeyboardView>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        flexDirection: "column",
        padding: 16,
        paddingHorizontal: 40,
        justifyContent: "center",
        gap: 16
    },
    label: {
        color: colors.gray[600],
        ...typography.textXs
    },
    title: {
        color: colors.gray[700],
        ...typography.textSm
    },
    dates: {
        flexDirection: "row",
        gap: 50    
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderTopWidth: 0.2,
        borderColor: colors.gray[400]
    },
    buttonCircle: {
        flexDirection: "row"
    },
    investmentWrapper: {
        borderWidth: 0.2,
        borderRadius: 15,
        borderColor: colors.gray[400]
    }
})