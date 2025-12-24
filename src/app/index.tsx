import { router } from "expo-router";
import { View, Text, Button, StatusBar, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { use, useMemo, useState } from "react";

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
    title: "Sistema de gestão financeira",
    label: "Alpha Consultoria",
    value: "15.800,00",
    status: FilterStatus.SEND,
},
{
    id: "3",
    title: "Criação de website institucional",
    label: "Agência Criativa Nimbus",
    value: "8.500,00",
    status: FilterStatus.APPROVED,
},
{
    id: "4",
    title: "Aplicativo mobile para delivery",
    label: "Restaurante Sabor & Arte",
    value: "18.200,00",
    status: FilterStatus.DENIED,
},
{
    id: "5",
    title: "Plataforma de e-commerce B2B",
    label: "Indústrias Monte Verde",
    value: "35.000,00",
    status: FilterStatus.APPROVED,
},
{
    id: "6",
    title: "Sistema interno de controle de estoque",
    label: "Distribuidora Central",
    value: "12.400,00",
    status: FilterStatus.DRAFT,
},
{
    id: "7",
    title: "Redesign de identidade visual",
    label: "Studio Criativo Aurora",
    value: "6.900,00",
    status: FilterStatus.APPROVED,
},
{
    id: "8",
    title: "Dashboard de indicadores empresariais",
    label: "Grupo Empresarial Horizonte",
    value: "19.750,00",
    status: FilterStatus.SEND,
},
];

export default function Index() {
    const [ search, useSearch ] = useState("")

    const filteredData = useMemo(() => {
        if(!search.trim()) {
            return DATA;
        }

        const searchLower = search.toLowerCase();

        return DATA.filter((item) => (
            item.title.toLowerCase().includes(searchLower) ||
            item.label.toLocaleLowerCase().includes(searchLower)
        ))


    }, [search])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 20 }}>
                <StatusBar barStyle="dark-content"/>
                <HomeHeader onPress={() => router.push("/budget")}/>

                <View style={{ paddingVertical: 24, flexDirection: "row", gap: 8 }}>
                    <Input 
                        icon={"search"} 
                        placeholder="Título ou cliente" 
                        containerStyle={{ flex: 1}}
                        value={search}
                        onChangeText={useSearch}
                    />
                    <ButtonCircle icon={"tune"} color={colors.principal["purple-base"]}/>
                </View>

                <FlatList
                    data={filteredData}
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