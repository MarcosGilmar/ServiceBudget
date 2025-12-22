import { router } from "expo-router";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BudgetHeader } from "../components/BudgetHeader";


export default function Budget() {
    return (
        <SafeAreaView>
            <View>
                <Button title="Voltar para home" onPress={() => router.back()} />
            </View>
            <BudgetHeader 
                icon={"arrow-back"}
                title="Orçamentos"    
            />
        </SafeAreaView>
    )
}