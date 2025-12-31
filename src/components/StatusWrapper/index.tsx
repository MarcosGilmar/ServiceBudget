import { View } from "react-native";

import { Checkbox, CheckboxProps } from "../../components/Checkbox";
import { Filter } from "../../components/Filter";

import { FilterStatus } from "../../types/FilterStatus";
import { styles } from "./styles";

import { CheckboxFilter } from "../CheckboxFilter";

type Props = {
    selected: FilterStatus | null;
    onSelect: (status: FilterStatus) => void;
}

export function StatusWrapper({selected, onSelect}: Props) {
    return (
        <View style={styles.container}>
                <View style={styles.content}>
                    <CheckboxFilter 
                        status={FilterStatus.DRAFT}
                        isSelected={selected === FilterStatus.DRAFT} 
                        onPress={()=> onSelect(FilterStatus.DRAFT)}
                    />
                    <CheckboxFilter 
                        status={FilterStatus.APPROVED}
                        isSelected={selected === FilterStatus.APPROVED} 
                        onPress={()=> onSelect(FilterStatus.APPROVED)}
                    />
                </View>
                <View style={styles.content}>
                    <CheckboxFilter 
                        status={FilterStatus.SEND}
                        isSelected={selected === FilterStatus.SEND} 
                        onPress={()=> onSelect(FilterStatus.SEND)}
                    />
                    <CheckboxFilter 
                        status={FilterStatus.DENIED}
                        isSelected={selected === FilterStatus.DENIED} 
                        onPress={()=> onSelect(FilterStatus.DENIED)}
                    />
                </View>            
        </View>
    )
}