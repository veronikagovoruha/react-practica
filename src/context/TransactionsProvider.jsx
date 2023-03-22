import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { nanoid } from "nanoid";

export const TransactionContext = createContext();

const TransactionsProvider = ({children}) => {
    const [incomes, setIncomes] = useLocalStorage('incomes', []);
    const [costs, setCost] = useLocalStorage('costs', []);

    const addTransaction = (transaction) => {
        const {transType} = transaction;

        transaction.id = nanoid();

        transType === 'costs' && setCost(prev => [...prev, transaction])
        transType === 'incomes' && setIncomes(prev => [...prev, transaction])
    }

    return(<TransactionContext.Provider value = {{incomes, costs, addTransaction}}>
        {children}
    </TransactionContext.Provider>)
}

export default TransactionsProvider;