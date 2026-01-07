import { View, FlatList } from "react-native";

import { ServiceItem } from "../ServiceItem";
import { Button } from "../Button";

import { styles } from "./styles";

type Props = {
    data: any[]
    onPress: () => void
}

export function ServicesWrapper({ data, onPress }: Props) {
    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <ServiceItem 
                    key={item.id ?? index}
                    title={item.title}
                    description={item.description}
                    value={item.value}
                    quantity={item.quantity}
                />
            ))}
            <Button 
                icon={"add"}
                title="Adicionar serviço"
                variant="white"
                onPress={onPress}
            />
        </View>
    )
}