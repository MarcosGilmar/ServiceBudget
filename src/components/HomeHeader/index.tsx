import { View, Text } from "react-native";
import { Button } from "../Button";

import { styles } from "./styles";

export function HomeHeader() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Orçamentos</Text>
                <Text style={styles.text}>Você tem 1 item em rascunho</Text>
            </View>
            <Button icon="add" title="Novo" />
        </View>
    )
}