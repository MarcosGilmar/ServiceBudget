import { router } from "expo-router";
import { View, Text, Button, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BudgetHeader } from "../components/BudgetHeader";
import { FilterStatus } from "../types/FilterStatus";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/Input";
import { Filter } from "../components/Filter";
import { Checkbox } from "../components/Checkbox";
import { StatusWrapper } from "../components/StatusWrapper";
import { ServicesWrapper } from "../components/ServicesWrapper";

export default function Budget() {
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
                    <Input placeholder="Título"/>
                    <Input placeholder="Cliente"/>
                </Wrapper>

                <Wrapper icon="sell" title="Status">
                    <StatusWrapper />
                </Wrapper>

                <Wrapper icon="notes" title="Serviços inclusos">
                    <ServicesWrapper />
                </Wrapper>

                <Wrapper icon="credit-card" title="Investimento">

                </Wrapper>
            </ScrollView>
        </SafeAreaView>
    )
}