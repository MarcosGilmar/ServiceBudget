import { Stack } from "expo-router";
import {
    useFonts,
    Lato_400Regular,
    Lato_700Bold
} from "@expo-google-fonts/lato"

import { colors } from "../theme/colors";

import { Loading } from "../components/Loading";

import { FilterProvider } from "../context/FilterContext";
import { BudgetProvider } from "../context/BudgetContext";
import { ServiceProvider } from "../context/ServiceContext";

export default function Layout() {
    const [loaded] = useFonts({Lato_400Regular, Lato_700Bold})

    if(!loaded) {
        return <Loading />
    }

    return (
        <BudgetProvider>
            <ServiceProvider>
                <FilterProvider>
                    <Stack screenOptions={{
                        headerShown: false,
                    }}>
                        <Stack.Screen name="index" />
                        <Stack.Screen name="budget" />
                        <Stack.Screen name="summary/[id]" />
                        
                        <Stack.Screen 
                            name="(modals)" 
                            options={{
                                presentation: "transparentModal", 
                                animation: "fade"
                            }}
                        />
                    </Stack>
                </FilterProvider>
            </ServiceProvider>
        </BudgetProvider>
    )
}
