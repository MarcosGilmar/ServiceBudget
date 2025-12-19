import { Stack } from "expo-router";
import {
    useFonts,
    Lato_400Regular,
    Lato_700Bold
} from "@expo-google-fonts/lato"

import { colors } from "../theme/colors";

import { Loading } from "../components/Loading";

export default function Layout() {
    const [loaded] = useFonts({Lato_400Regular, Lato_700Bold})

    if(!loaded) {
        return <Loading />
    }

    return (
        <Stack screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.gray[100] }
        }}>

        </Stack>
    )
}