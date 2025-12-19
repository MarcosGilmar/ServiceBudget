import { TouchableOpacity, TouchableOpacityProps, Text, View, ActivityIndicator } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "../../theme"

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    title: string
    isLoading?: boolean
}

export function Button({ icon, title, isLoading = false, ...rest }: Props) {
    return (
        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={0.8}
            disabled={isLoading}
            {...rest}
        >
                <View style={{ flexDirection: "row", gap: 10, opacity: isLoading ? 0 : 1}}>
                    <MaterialIcons name={icon} size={24} color={colors.gray[100]} />
                    <Text style={styles.title}>{title}</Text>
                </View>
            { isLoading && (
                <ActivityIndicator size="small" color={colors.gray[100]} style={{ position: "absolute"}}/>
            )}
        </TouchableOpacity>
    )
}