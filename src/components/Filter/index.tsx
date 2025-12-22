import { View, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { FilterStatusConfig, FilterStatusProps } from "../../shared/FilterStatusConfig"
import { FilterStatus } from "../../types/FilterStatus"

export type FilterProps = {
    status: FilterStatus
}

export function Filter({ status }:FilterProps) {
    const {label, backgroundColor, color, iconColor} = FilterStatusConfig[status]
    
    return (
        <View style={[styles.container ,{ backgroundColor }]}>
            <MaterialIcons name="fiber-manual-record" color={iconColor}/>
            <Text style={[styles.title , { color }]}>{label}</Text>
        </View>
    )
}