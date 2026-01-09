import { StyleSheet } from "react-native";
import { colors } from "../../theme";
import { typography } from "../../theme/fontFamily";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        borderWidth: 0.2,
        borderRadius: 15, 
        borderColor: colors.gray[400],
        marginTop: 20,
        overflow: "hidden"
    },
    line: {
        height: 1,
        borderTopWidth: 0.2,
        borderTopColor: colors.gray[400]
    },
    content: {
        flexDirection:"row",
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
        alignItems: "center",
    },
    title: {
        color: colors.gray[500],
        ...typography.textXs
    },
    titleVariant: {
        color: colors.gray[800],
        ...typography.titleLg
    },
    children: {
        gap: 12
    }
})