import { createContext, useState, ReactNode, useEffect } from "react"
import { serviceStorage, ServiceStorageProps } from "../storage/serviceStorage"

type ServiceContextData = {
    serviceList: ServiceStorageProps[]
    selectedService: ServiceStorageProps | null
    addService: (newService: ServiceStorageProps) => Promise<void>
    updateService: (updatedService: ServiceStorageProps) => Promise<void>
    deleteService: (deletedService: ServiceStorageProps) => Promise<void>
    clearService: () => void
    loadServices: (services: ServiceStorageProps[]) => void
    setSelectedService: (selectedService: ServiceStorageProps | null) => void
}

export const ServiceContext = createContext<ServiceContextData>({} as ServiceContextData)

export function ServiceProvider({children}: {children: ReactNode}) {
    const [serviceList, setServiceList] = useState<ServiceStorageProps[]>([])
    const [selectedService, setSelectedService] = useState<ServiceStorageProps | null>(null)

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

    async function updateService(updatedService: ServiceStorageProps) {
        const newList = serviceList.map((service) => (
            service.id === updatedService.id ? updatedService : service 
        ))

        setServiceList(newList)

        await serviceStorage.save(newList)
    }

    async function deleteService(deletedService: ServiceStorageProps) {
        const newList = serviceList.filter((service) => (
            service.id !== deletedService.id
        ))

        setServiceList(newList)

        await serviceStorage.save(newList)
    }

    async function clearService() {
        const newList = []
        setServiceList([])

        await serviceStorage.save(newList)
    }

    function loadServices(services: ServiceStorageProps[]) {
        setServiceList(services)
    }

    return (
        <ServiceContext.Provider
            value={{
                serviceList,
                selectedService,
                addService,
                updateService,
                setSelectedService,
                deleteService,
                clearService,
                loadServices
            }}
        >
            {children}
        </ServiceContext.Provider>
    )
}