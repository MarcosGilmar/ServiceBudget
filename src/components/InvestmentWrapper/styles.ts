import { StyleSheet } from "react-native";

import { colors } from "../../theme";
import { typography } from "../../theme/fontFamily";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        gap: 12
    },
    subtotal: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    subtotalValue: {
        color: colors.gray[700],
        ...typography.textSm
    },
    items: {
        color: colors.gray[600],
        ...typography.textXs
    },
    itemsvalue: {
        flexDirection: "row",
        gap: 12
    },
    discount: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    discountInput: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 16
    },
    percentage: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    percentageWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.2,
        borderRadius: 15,
        paddingHorizontal: 10,
        gap: 4
    },
    discountValue: {
        color: colors.feedback["danger-base"],
        ...typography.textSm
    },
    totalValueWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.gray[300],
        padding: 20
    },
    totalValueText: {
        color: colors.gray[700],
        ...typography.titleSm
    },
    strikethroughText: {
        color: colors.gray[600],
        ...typography.textXs,
        textDecorationLine: "line-through"
    },
    totalValue: {
        color: colors.gray[700],
        ...typography.titleLg
    },
    finalInvestment: {
        flexDirection: "column",
        alignItems: "flex-end"
    }
})