import { View, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { PropsWithChildren } from "react"

import { styles } from "./styles"
import { colors } from "../../theme"

type Props = PropsWithChildren<{
    icon: keyof typeof MaterialIcons.glyphMap
    title: string
    variant?: "default"| "title" 
}>

export function Wrapper({ icon, title, children, variant = "default" }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <MaterialIcons name={icon} size={18} color={colors.principal["purple-base"]}/>
                <Text style={variant === "default" ? styles.title : styles.titleVariant}>{title}</Text>
            </View>

            <View style={styles.line}></View>
            
            <View style={styles.children}>
                {children}
            </View>

        </View>
    )
}