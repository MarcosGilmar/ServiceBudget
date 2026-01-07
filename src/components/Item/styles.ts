import { StyleSheet } from "react-native";
import { colors } from "../../theme";
import { typography } from "../../theme/fontFamily";

export const styles = StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: colors.gray[200],
        borderWidth: 0.2,
        borderColor: colors.gray[400],
        borderRadius: 15,
        marginVertical: 5
    },
    content: {
        flex: 1, 
        gap: "8"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        color: colors.gray[700],
        ...typography.titleMd
    },
    label: {
        color: colors.gray[600],
        ...typography.textSm
    },
    value: {
        color: colors.gray[700],
        ...typography.titleMd
    },
    filter: {
        position: "absolute",
        top: 8,
        right: 8
    }

})