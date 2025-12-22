import { Text, View, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { Filter, FilterProps } from "../Filter"
import { styles } from "./styles"
import { FilterStatus } from "../../types/FilterStatus"

type Props = FilterProps & {
    title: string
    label: string
    value: string
}

export function Item({ status, title, label, value}: Props) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.title, {width: 240}]}>{title}</Text>

                <View style={styles.row}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.value}>R${value}</Text>
                </View>
            </View>
                <View style={styles.filter}>
                    <Filter status={status}/>
                </View>            
        </TouchableOpacity>
    )
}