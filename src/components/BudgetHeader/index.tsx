import { View, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { FilterStatus } from "../../types/FilterStatus"

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap
    title: string
    //falta filtrar por status
}

export function BudgetHeader({ icon, title, status }: Props) {
    return (
        <View style={styles.container}>
            <MaterialIcons icon={icon} size={24}/>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}