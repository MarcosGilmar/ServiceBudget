import { View, Text, Button, StatusBar } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";

import { BudgetHeader } from "../../components/BudgetHeader";
import { DismissKeyboardView } from "../../components/DismissKeyboardView";
import { Wrapper } from "../../components/Wrapper";

import { FilterStatus } from "../../types/FilterStatus";

export default function Summary() {
    const params = useLocalSearchParams<{id: string}>()
    return(
        <DismissKeyboardView>
            <StatusBar barStyle="dark-content"/>
            <BudgetHeader 
                icon="arrow-back-ios"
                title={`Orçamento #${params.id}`}
                onPress={() => router.back()}
                status={FilterStatus.SEND}
            />

            {/* <Wrapper
                icon="storefront"
                title={title}
            ></Wrapper>
 */}
        </DismissKeyboardView>

    )
}