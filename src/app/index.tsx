import { router } from "expo-router";
import { View, Text, Button } from "react-native";
import { fontFamily } from "../theme";

export default function Index() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent:"center"}}>
            <Text>
                Home
            </Text>
            <Button title="Ir para budget" onPress={() => router.navigate("/budget")} />
            <Button title="Ir para summary" onPress={() => router.navigate("/summary/1")}/>
            
        </View>
    )
}