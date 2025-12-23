import { View } from "react-native";

import { Checkbox } from "../../components/Checkbox";
import { Filter } from "../../components/Filter";

import { FilterStatus } from "../../types/FilterStatus";

type Props = {
    status: FilterStatus
}

export function CheckboxFilter({ status}: Props) {
    return (
        <View style={{ flexDirection: "row", gap: 12 }}>
            <Checkbox isRounded isSelected/>
            <Filter status={status}/>
        </View>
    )
}