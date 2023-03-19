import { useState, createContext, useEffect } from "react";
import lsApi from "../utils/localStorage";

export const CategoriesContext = createContext();

const initialCategories = [{ title: 'Їжа', id: 1 }];

const CategoriesProvider = ({ children }) => {
    const [costsCategories, setCostsCategories] = useState(() => lsApi.getDataFromLS(lsApi.keys.COST_CAT, initialCategories));
    const [incomesCategories, setIncomesCategories] = useState(()=> lsApi.getDataFromLS(lsApi.keys.INCOMES_CAT, initialCategories));

    const addCategory = (newCategory, transType) => {
        if (transType === 'costs') {
            setCostsCategories(prev => [...prev, newCategory]);
            return;
        }
        if(transType === 'incomes'){
            setIncomesCategories(prev => [...prev, newCategory]);
            return;
        }
    }

    useEffect(() => {
        lsApi.setDataToLS(lsApi.keys.COST_CAT, costsCategories)
    }, [costsCategories]);

    useEffect(() => {
        lsApi.setDataToLS(lsApi.keys.INCOMES_CAT, incomesCategories)
    }, [incomesCategories]);

    const contextValue = {costs: costsCategories, incomes: incomesCategories, addCategory};

    return (
        <CategoriesContext.Provider value={contextValue}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;