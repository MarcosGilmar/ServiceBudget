import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../theme";

import { styles } from "./styles";

type Props = {
    title: string
    description: string
    value: string
    quantity: string
}

export function ServiceItem({ title, description, value, quantity }: Props) {
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
                <Text style={styles.value}>{value}</Text>
                <Text style={styles.quantity}>{quantity}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <MaterialIcons name="edit" size={15} color={colors.principal["purple-base"]}/>
            </TouchableOpacity>
        </View>
    )
}