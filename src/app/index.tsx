import { router } from "expo-router";
import { View, Text, Button, StatusBar, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors, fontFamily } from "../theme";

import { HomeHeader } from "../components/HomeHeader";
import { Input } from "../components/Input";
import { ButtonCircle } from "../components/ButtonCircle";
import { Filter } from "../components/Filter";
import { FilterStatus } from "../types/FilterStatus";
import { Item } from "../components/Item";

const DATA = [
{
    id: "1",
    title: "Desenvolvimento de aplicativo de loja online",
    label: "Soluções Tecnológicas Beta",
    value: "22.300,00",
    status: FilterStatus.APPROVED,
},
{
    id: "2",
    title: "Desenvolvimento de aplicativo de loja online",
    label: "Soluções Tecnológicas Beta",
    value: "22.300,00",
    status: FilterStatus.APPROVED,
},
{
    id: "3",
    title: "Desenvolvimento de aplicativo de loja online",
    label: "Soluções Tecnológicas Beta",
    value: "22.300,00",
    status: FilterStatus.APPROVED,
},
{
    id: "4",
    title: "Desenvolvimento de aplicativo de loja online",
    label: "Soluções Tecnológicas Beta",
    value: "22.300,00",
    status: FilterStatus.APPROVED,
},
{
    id: "5",
    title: "Desenvolvimento de aplicativo de loja online",
    label: "Soluções Tecnológicas Beta",
    value: "22.300,00",
    status: FilterStatus.APPROVED,
},
{
    id: "6",
    title: "Desenvolvimento de aplicativo de loja online",
    label: "Soluções Tecnológicas Beta",
    value: "22.300,00",
    status: FilterStatus.APPROVED,
},
{
    id: "7",
    title: "Desenvolvimento de aplicativo de loja online",
    label: "Soluções Tecnológicas Beta",
    value: "22.300,00",
    status: FilterStatus.APPROVED,
},
{
    id: "8",
    title: "Desenvolvimento de aplicativo de loja online",
    label: "Soluções Tecnológicas Beta",
    value: "22.300,00",
    status: FilterStatus.APPROVED,
},
];


export default function Index() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 20 }}>
                <StatusBar barStyle="dark-content"/>
                <HomeHeader onPress={() => router.push("/budget")}/>

                <View style={{ paddingTop: 24, flexDirection: "row", gap: 8 }}>
                    <Input />
                    <ButtonCircle icon={"tune"} color={colors.principal["purple-base"]}/>
                </View>

                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <Item 
                            title={item.title}
                            label={item.label}
                            value={item.value}
                            status={item.status}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                >
                </FlatList>
            </View>
        </SafeAreaView>
    )
}