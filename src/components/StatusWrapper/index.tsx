import { View } from "react-native";

import { Checkbox } from "../../components/Checkbox";
import { Filter } from "../../components/Filter";

import { FilterStatus } from "../../types/FilterStatus";
import { styles } from "./styles";

import { CheckboxFilter } from "../CheckboxFilter";

export function StatusWrapper() {
    return (
        <View style={styles.container}>
                <View style={styles.content}>
                    <CheckboxFilter status={FilterStatus.DRAFT}/>
                    <CheckboxFilter status={FilterStatus.APPROVED}/>
                </View>
                <View style={styles.content}>
                    <CheckboxFilter status={FilterStatus.SEND}/>
                    <CheckboxFilter status={FilterStatus.DENIED}/>
                </View>            
        </View>
    )
}