import AsyncStorage from "@react-native-async-storage/async-storage";

import { InvestmentProps } from "../components/InvestmentWrapper";
import { FilterStatus } from "../enums/FilterStatus";
import { ServiceStorageProps } from "./serviceStorage";

const ITEMS_BUDGET_KEY = "@budget:items"

export type  BudgetStorageProps = {
    id: string
    title: string
    client: string
    value: number
    status: FilterStatus
    created_at: string
    updated_at: string
    services: ServiceStorageProps[],
    discount: number
}

async function get(): Promise<BudgetStorageProps[]> {
    try {
        const storage = await AsyncStorage.getItem(ITEMS_BUDGET_KEY)

        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error("ITEMS_GET: " + error)
    }
}

async function save(newBudget: BudgetStorageProps[]): Promise<void> {
    try {
        const jsonValue = JSON.stringify(newBudget)

        await AsyncStorage.setItem(ITEMS_BUDGET_KEY, jsonValue)

    } catch (error) {
        throw new Error("ITEMS_SAVE: " + error)
    }
}

export const budgetStorage = {
    get,
    save
}