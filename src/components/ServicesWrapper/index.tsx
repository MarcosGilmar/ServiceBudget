import { View, FlatList } from "react-native";
import { ServiceItem } from "../ServiceItem";
import { Button } from "../Button";

const DATA = [
{
    id: "1",
    title: "Design de interfaces",
    description: "Criação de wireframes e protótipos de alta fidelidade",
    value: "R$ 3.847,50",
    quantity: "Qt: 1"
},
{
    id: "2",
    title: "Implantação e suporte",
    description: "Publicação nas lojas de aplicativos e suporte técnico",
    value: "R$ 3.847,50",
    quantity: "Qt: 1"
},
{
    id: "3",
    title: "Implantação e suporte",
    description: "Publicação nas lojas de aplicativos e suporte técnico",
    value: "R$ 3.847,50",
    quantity: "Qt: 1"
},
]

export function ServicesWrapper() {
    return (
        <View>
            {DATA.map((item) => (
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
            />
        </View>
    )
}