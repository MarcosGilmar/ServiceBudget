import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../theme";

import { styles } from "./styles";

export type ServiceItemProps = {
    title: string
    description: string
    value: number
    quantity: number
}

export function ServiceItem({ title, description, value, quantity }: ServiceItemProps) {
    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <Text style={styles.title}>{title}</Text>
                <Text 
                    style={styles.description}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {description}
                </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.value}>R$ {value}</Text>
                <Text style={styles.quantity}>Qt: {quantity}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <MaterialIcons name="edit" size={15} color={colors.principal["purple-base"]}/>
            </TouchableOpacity>
        </View>
    )
}