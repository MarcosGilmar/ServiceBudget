import { createContext, ReactNode, useEffect, useState } from "react";
import { budgetStorage, BudgetStorageProps } from "../storage/budgetStorage";

type BudgetContextData = {
    budgetList: BudgetStorageProps[]
    selectedBudget: BudgetStorageProps | null
    addBudget: (newBudget: BudgetStorageProps) => void
    updateBudget: (updatedBudget: BudgetStorageProps) => Promise<void>
    deleteBudget: (deletedBudget: BudgetStorageProps) => Promise<void>
    setSelectedBudget: (selectedBudget: BudgetStorageProps | null) => void
}

export const BudgetContext = createContext<BudgetContextData>({} as BudgetContextData)

export function BudgetProvider({ children }: { children: ReactNode}) {
    const [budgetList, setBudgetList] = useState<BudgetStorageProps[]>([])
    const [selectedBudget, setSelectedBudget] = useState<BudgetStorageProps | null>(null)
    async function loadData() {
        const items = await budgetStorage.get()
        setBudgetList(items)
    }

    useEffect(() => {
        loadData()
    }, [])

    async function addBudget(newBudget: BudgetStorageProps) {
        const newList = [newBudget, ...budgetList]
        setBudgetList(newList)

        await budgetStorage.save(newList)
    }

    async function updateBudget(updatedBudget: BudgetStorageProps) {
        const newList = budgetList.map((budget) => (
            budget.id === updatedBudget.id ? updatedBudget : budget 
        ))

        setBudgetList(newList)

        await budgetStorage.save(newList)
    }

    async function deleteBudget(deletedBudget: BudgetStorageProps) {
            const newList = budgetList.filter((budget) => (
                budget.id !== deletedBudget.id
            ))
    
            setBudgetList(newList)
    
            await budgetStorage.save(newList)
        }
    return (
        <BudgetContext.Provider value={{
            budgetList,
            addBudget,
            selectedBudget,
            setSelectedBudget,
            updateBudget,
            deleteBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}