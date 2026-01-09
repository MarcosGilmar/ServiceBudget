import { View, Text, TextInput, TouchableOpacityProps } from "react-native"

import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "../../theme"

export type InvestmentProps = TouchableOpacityProps & {
    subtotal: number
    serviceItemQuantity: number
    discount: number
    total: number
    percentage?: string
    onChangePercentage?: (value: string) => void 
    variant?: "default" | "summary" 
}

export function InvestmentWrapper({ 
    subtotal, 
    serviceItemQuantity, 
    discount, 
    total, 
    percentage,
    onChangePercentage,
    variant = "default"
}: InvestmentProps) {

    return (
        <View style={styles.container}>
            <View style={styles.subtotal}>
                <Text style={styles.subtotalValue}>Subtotal</Text>
                <View style={styles.itemsvalue}>
                    <Text style={styles.items}>{serviceItemQuantity} items</Text>
                    <Text style={styles.subtotalValue}>R$ {subtotal}</Text>
                </View>
            </View>
            <View style={styles.discount}>
                <View style={styles.percentage}>
                    <View style={styles.discountInput}>
                        <Text style={styles.subtotalValue}>Desconto</Text>
                        {variant === "default" ? (
                            <View style={styles.percentageWrapper}>
                                <TextInput 
                                    placeholder="0"
                                    keyboardType="numeric"
                                    maxLength={2}
                                    value={percentage}
                                    onChangeText={onChangePercentage}
                                />
                                <Text>%</Text>
                            </View>
                        ) : (
                            <View style={styles.discountOff}> 
                                <Text>{percentage}% off</Text>
                            </View>
                        )
                    
                    }
                    </View>
                    <Text style={styles.discountValue}>- R$ {discount.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.totalValueWrapper}>
                <Text style={styles.totalValueText}>Valor total</Text>
                <View style={styles.finalInvestment}>
                    <Text style={styles.strikethroughText}>R$ {subtotal.toFixed(2)}</Text>
                    <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
                </View>
            </View>
        </View>
    )
}