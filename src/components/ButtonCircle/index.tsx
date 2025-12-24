import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "../../theme"

export type ThemeColors = 
    | typeof colors.principal[keyof typeof colors.principal]
    | typeof colors.feedback[keyof typeof colors.feedback]
    | typeof colors.gray[keyof typeof colors.gray]

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap,
    color: ThemeColors,
    onPress: () => void
}

export function ButtonCircle({ icon, color, onPress, ...rest }: Props) {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={onPress}
        >
            <MaterialIcons name={icon} size={24} color={color}/>
        </TouchableOpacity>
    )
}