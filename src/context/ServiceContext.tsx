import { createContext, useState, ReactNode, useEffect } from "react"
import { serviceStorage, ServiceStorageProps } from "../storage/serviceStorage"

type ServiceContextData = {
    serviceList: ServiceStorageProps[]
    addService: (newService: ServiceStorageProps) => Promise<void>
}

export const ServiceContext = createContext<ServiceContextData>({} as ServiceContextData)

export function ServiceProvider({children}: {children: ReactNode}) {
    const [serviceList, setServiceList] = useState<ServiceStorageProps[]>([])

    async function loadData() {
        const items = await serviceStorage.get()
        setServiceList(items)
    }

    useEffect(() => {
        loadData()
    }, [])

    async function addService(newService: ServiceStorageProps) {
        const newList = [newService, ...serviceList]
        setServiceList(newList)

        await serviceStorage.save(newList)
    }

    return (
        <ServiceContext.Provider
            value={{
                serviceList,
                addService
            }}
        >
            {children}
        </ServiceContext.Provider>
    )
}