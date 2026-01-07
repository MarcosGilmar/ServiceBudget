import { createContext, ReactNode, useEffect, useState } from "react";
import { budgetStorage, BudgetStorageProps } from "../storage/budgetStorage";

type BudgetContextData = {
    budgetList: BudgetStorageProps[]
    addBudget: (newBudget: BudgetStorageProps) => void
}

export const BudgetContext = createContext<BudgetContextData>({} as BudgetContextData)

export function BudgetProvider({ children }: { children: ReactNode}) {
    const [budgetList, setBudgetList] = useState<BudgetStorageProps[]>([])

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

    return (
        <BudgetContext.Provider value={{
            budgetList,
            addBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}