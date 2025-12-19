import { View, Text, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";

export default function Summary() {
    const params = useLocalSearchParams<{id: string}>()
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent:"center"}}>
            <Text>ID: {params.id}</Text>
            <Button title="Voltar para home" onPress={() => router.back()} />
        </View>

    )
}