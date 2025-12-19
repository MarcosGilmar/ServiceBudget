import { router } from "expo-router";
import { View, Text, Button, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { fontFamily } from "../theme";

import { HomeHeader } from "../components/HomeHeader";

export default function Index() {
    return (
        <SafeAreaView>
            <View>
                <StatusBar barStyle="dark-content"/>
                <HomeHeader />
                
            </View>
        </SafeAreaView>
    )
}