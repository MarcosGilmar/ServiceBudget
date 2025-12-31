import { View, FlatList } from "react-native";

import { ServiceItem } from "../ServiceItem";
import { Button } from "../Button";

import { styles } from "./styles";

type Props = {
    data: any[]
}

export function ServicesWrapper({ data }: Props) {
    return (
        <View style={styles.container}>
            {data.map((item) => (
                <ServiceItem 
                    key={item.id}
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
            />
        </View>
    )
}