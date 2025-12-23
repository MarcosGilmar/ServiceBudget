import { StyleSheet } from "react-native";
import { colors } from "../../theme";
import { typography } from "../../theme/fontFamily";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 16,
        paddingBottom: 20
    },
    label: {
        width: 180,
        gap: 2
    },
    title: {
        color: colors.gray[700],
        ...typography.titleSm
    },
    description: {
        color: colors.gray[500],
        ...typography.textXs
    },
    info: {
        alignItems: "flex-end"
    },
    value: {
        color: colors.gray[700],
        ...typography.titleMd
    },
    quantity: {
        color: colors.gray[600],
        ...typography.textXs,
    },
    button: {
        justifyContent:"center",
        alignItems: "center"
    }
})