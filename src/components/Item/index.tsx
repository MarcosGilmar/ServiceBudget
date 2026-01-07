import { Text, View, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { Filter, FilterProps } from "../Filter"
import { styles } from "./styles"
import { FilterStatus } from "../../types/FilterStatus"
import { router } from "expo-router"

export type ItemProps = FilterProps & TouchableOpacityProps & {
    id: string
    title: string
    client: string
    value: number
    created_at: string
    updated_at: string
}

export function Item({ id, status, title, client, value, created_at, onPress, ...rest}: ItemProps) {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={styles.container} 
            {...rest}
        >
            <View style={styles.content}>
                <Text style={[styles.title, {width: 240}]}>{title}</Text>

                <View style={styles.row}>
                    <Text style={styles.label}>{client}</Text>
                    <Text style={styles.value}>R$ {value}</Text>
                </View>
            </View>
                <View style={styles.filter}>
                    <Filter status={status}/>
                </View>            
        </TouchableOpacity>
    )
}