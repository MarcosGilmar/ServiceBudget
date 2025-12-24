import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { colors } from "../../../theme";
import { styles } from "./styles";

import { CheckboxFilter } from "../../../components/CheckboxFilter";
import { FilterStatus } from "../../../types/FilterStatus";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap
}

export default function Filters({ icon }: Props) {
    return (
        <View style={{ flex: 1, backgroundColor: colors.gray[300]}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Filtrar e ordenar</Text>
                    <TouchableOpacity 
                        onPress={() => router.back()}
                    >
                        <MaterialIcons name="close" size={25}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <Text>Status</Text>
                    

                    <Text>Ordenação</Text>
                    



                </View>
            </View>

        </View>
    )
}