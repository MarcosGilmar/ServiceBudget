import { createContext, useState, useCallback, ReactNode } from "react";
import { FilterStatus } from "../types/FilterStatus";

export type SortOption = "biggestValue" | "smallestValue" | "oldest" | "latest" | null

interface FilterContextData {
    selectedStatus: FilterStatus[],
    sortBy: SortOption,
    setFilters: (statusList: FilterStatus[], sort: SortOption) => void
    resetFilters: () => void
}

export const FilterContext = createContext<FilterContextData>({} as FilterContextData)

export function FilterProvider({ children }: { children: ReactNode }) {
    const [selectedStatus,setSelectedStatus] = useState<FilterStatus[]>([])
    const [sortBy, setSortBy] = useState<SortOption>(null)

    function setFilters(statusList: FilterStatus[], sort: SortOption) {
        setSelectedStatus(statusList)
        setSortBy(sort)
    }

    function resetFilters() {
        setSelectedStatus([])
        setSortBy(null)
    }

    return (
        <FilterContext.Provider value={{
            selectedStatus,
            sortBy,
            setFilters,
            resetFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}