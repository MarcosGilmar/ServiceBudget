import { View, FlatList } from "react-native";

import { ServiceItem } from "../ServiceItem";
import { Button } from "../Button";

import { styles } from "./styles";

type Props = {
    data: any[]
    onPress?: () => void
    onEdit?: (item: any) => void
}

export function ServicesWrapper({ data, onPress, onEdit}: Props) {
    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <ServiceItem 
                    key={item.id ?? index}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    value={item.value}
                    quantity={item.quantity}
                    onEdit={onEdit ? () =>  onEdit(item) : undefined}
                />
            ))}
            { onPress && (
                <Button 
                    icon={"add"}
                    title="Adicionar serviço"
                    variant="white"
                    onPress={onPress}
                />
            )}
        </View>
    )
}