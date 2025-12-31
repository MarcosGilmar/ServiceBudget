import { router } from "expo-router";
import { View, Text, Button, StatusBar, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { use, useContext, useMemo, useState } from "react";

import { colors, fontFamily } from "../theme";

import { HomeHeader } from "../components/HomeHeader";
import { Input } from "../components/Input";
import { ButtonCircle } from "../components/ButtonCircle";
import { Filter } from "../components/Filter";
import { Item, ItemProps } from "../components/Item";
import { FilterStatus } from "../types/FilterStatus";
import { FilterContext } from "../context/FilterContext";

const DATA: ItemProps[] = [
{
    id: "1",
    title: "Desenvolvimento de aplicativo de loja online",
    label: "Soluções Tecnológicas Beta",
    value: 22300,
    status: FilterStatus.APPROVED,
    created_at: "2025-09-12",
    updated_at: "2025-12-12"

},
{
    id: "2",
    title: "Sistema de gestão financeira",
    label: "Alpha Consultoria",
    value: 15800,
    status: FilterStatus.SEND,
    created_at: "2025-09-13",
    updated_at: "2025-12-12"

},
{
    id: "3",
    title: "Criação de website institucional",
    label: "Agência Criativa Nimbus",
    value: 8500,
    status: FilterStatus.APPROVED,
    created_at: "2025-09-14",
    updated_at: "2025-12-12"
},
{
    id: "4",
    title: "Aplicativo mobile para delivery",
    label: "Restaurante Sabor & Arte",
    value: 18200,
    status: FilterStatus.DENIED,
    created_at: "2025-09-15",
    updated_at: "2025-12-12"
},
{
    id: "5",
    title: "Plataforma de e-commerce B2B",
    label: "Indústrias Monte Verde",
    value: 35000,
    status: FilterStatus.APPROVED,
    created_at: "2025-09-16",
    updated_at: "2025-12-12"
},
{
    id: "6",
    title: "Sistema interno de controle de estoque",
    label: "Distribuidora Central",
    value: 12400,
    status: FilterStatus.DRAFT,
    created_at: "2025-09-17",
    updated_at: "2025-12-12"
},
{
    id: "7",
    title: "Redesign de identidade visual",
    label: "Studio Criativo Aurora",
    value: 6900,
    status: FilterStatus.APPROVED,
    created_at: "2025-09-18",
    updated_at: "2025-12-12"
},
{
    id: "8",
    title: "Dashboard de indicadores empresariais",
    label: "Grupo Empresarial Horizonte",
    value: 19750,
    status: FilterStatus.SEND,
    created_at: "2025-09-19",
    updated_at: "2025-12-12"
},
];

export default function Index() {
    const {selectedStatus, sortBy} = useContext(FilterContext)

    const [search, useSearch] = useState("")

    const filteredData = useMemo(() => {
        let result = [...DATA];

        //input verification
        if(search.trim()) {
            const searchLower = search.toLowerCase();

            result = result.filter((item) => (
                item.title.toLowerCase().includes(searchLower) ||
                item.label.toLowerCase().includes(searchLower) 
            ))
        }
        //status verification
        if(selectedStatus.length > 0) {
            result = result.filter((item) => (
                selectedStatus.includes(item.status)
            ))
        }

        //order verification
        if(sortBy) {
            result.sort((a,b) => {
                switch(sortBy) {
                    case "biggestValue":
                        return b.value - a.value;
                    case "smallestValue":
                        return a.value - b.value
                    case "latest":
                        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                    case "oldest":
                        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
                }
            })
        }
        return result
    }, [search, selectedStatus, sortBy])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <View style={{ flex: 1, padding: 20 }}>
                <StatusBar barStyle="dark-content"/>
                <HomeHeader 
                    itemQuantity={filteredData.length} 
                    onPress={() => router.push("/budget")}/>

                <View style={{ paddingVertical: 24, flexDirection: "row", gap: 8 }}>
                    <Input 
                        icon={"search"} 
                        placeholder="Título ou cliente" 
                        containerStyle={{ flex: 1 }}
                        value={search}
                        onChangeText={useSearch}
                    />
                    <ButtonCircle 
                        icon={"tune"} 
                        color={colors.principal["purple-base"]}
                        onPress={() => router.push("/(modals)/filters")}
                    />
                </View>

                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <Item 
                            id={item.id}
                            title={item.title}
                            label={item.label}
                            value={item.value}
                            status={item.status}
                            created_at={item.created_at}
                            updated_at={item.updated_at}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                >
                </FlatList>
            </View>
        </SafeAreaView>
    )
}