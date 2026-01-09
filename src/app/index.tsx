import { router } from "expo-router";
import { View, Text, Button, StatusBar, FlatList } from "react-native";
import { use, useContext, useMemo, useState } from "react";

import { colors, fontFamily } from "../theme";

import { HomeHeader } from "../components/HomeHeader";
import { Input } from "../components/Input";
import { ButtonCircle } from "../components/ButtonCircle";
import { Filter } from "../components/Filter";
import { Item, ItemProps } from "../components/Item";
import { DismissKeyboardView } from "../components/DismissKeyboardView";

import { FilterStatus } from "../enums/FilterStatus";

import { FilterContext } from "../context/FilterContext";
import { BudgetContext } from "../context/BudgetContext";

export default function Index() {
    const { budgetList, setSelectedBudget } = useContext(BudgetContext)
    const {selectedStatus, sortBy} = useContext(FilterContext)

    const [search, useSearch] = useState("")

    const filteredData = useMemo(() => {
        let result = [...budgetList];

        //input verification
        if(search.trim()) {
            const searchLower = search.toLowerCase();

            result = result.filter((item) => (
                item.title.toLowerCase().includes(searchLower) ||
                item.client.toLowerCase().includes(searchLower) 
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
    }, [budgetList, search, selectedStatus, sortBy])

    return (
        <DismissKeyboardView>
            <View style={{ flex: 1 }}>
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
                            client={item.client}
                            value={item.value}
                            status={item.status}
                            created_at={item.created_at}
                            updated_at={item.updated_at}
                            onPress={() => {
                                setSelectedBudget(item)
                                router.push(`/summary/${item.id}`)
                            }}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                >
                </FlatList>
            </View>
        </DismissKeyboardView>
    )
}