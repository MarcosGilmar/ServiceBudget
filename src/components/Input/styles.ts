import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems: "center",
        backgroundColor: colors.gray[100],
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors.gray[200],
        gap: 8,
        paddingHorizontal: 16,
        height: 48
    },
})