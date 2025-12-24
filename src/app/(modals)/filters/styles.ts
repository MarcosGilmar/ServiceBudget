import { StyleSheet } from "react-native";

import { colors } from "../../../theme";
import { typography } from "../../../theme/fontFamily";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[100],
        marginTop: "auto",
        height: 562,
        borderRadius: 15
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 0.2,
        borderBottomColor: colors.gray[400]
    },
    title: {
        color: colors.gray[700],
        ...typography.titleSm
    },
    content: {
        flexDirection: "column",
        padding: 20
    }
})