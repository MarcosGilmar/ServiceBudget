import AsyncStorage from "@react-native-async-storage/async-storage";

const ITEMS_SERVICE_KEY = "@service:items"

export type ServiceStorageProps = {
    title: string
    description: string,
    value: string
    quantity: number
}

async function get(): Promise<ServiceStorageProps[]> {
    try {
        const storage = await AsyncStorage.getItem(ITEMS_SERVICE_KEY)

        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error("ITEMS_GET: " + error)
    }
}

async function save(newService: ServiceStorageProps[]): Promise<void>{
    try {
        const jsonValue = JSON.stringify(newService)

        await AsyncStorage.setItem(ITEMS_SERVICE_KEY, jsonValue)
    } catch (error) {
        throw new Error("ITEMS_SAVE: " + error)
    }
}

export const serviceStorage = {
    get,
    save
}