import { router } from "expo-router";
import { View, Text, Button } from "react-native";


export default function Budget() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent:"center"}}>
            <Text>
                Budget
            </Text>
            <Button title="Voltar para home" onPress={() => router.back()} />

        </View>
    )
}