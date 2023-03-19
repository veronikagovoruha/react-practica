import { useEffect, useState } from "react";
import MainPage from "./MainPage/MainPage";
import lsApi from "../utils/localStorage";
import TransactionHistoryPage from "./TransactionHistiryPage/TransactionHistoryPage";
import { nanoid } from "nanoid";

export const App = () => {
    const [activePage, setActivePage] = useState('main');
    const [costs, setCost] = useState(() => lsApi.getDataFromLS(lsApi.keys.COSTS, []));
    const [incomes, setIncomes] = useState(() => lsApi.getDataFromLS(lsApi.keys.INCOMES, []));
    
    useEffect(() => {
        lsApi.setDataToLS(lsApi.keys.COSTS, costs)
    }, [costs]);

    useEffect(() => {
        lsApi.setDataToLS(lsApi.keys.INCOMES, incomes)
    }, [incomes]);

    const onOpenPage = (activePage) => {
        setActivePage(activePage);
    }

    const addTransaction = (transaction) => {
        const {transType} = transaction;
        transaction.id = nanoid();
        transType === 'costs' && setCost(prev => [...prev, transaction])
        transType === 'incomes' && setIncomes(prev => [...prev, transaction])
    }

    switch (activePage) {
        case 'main':
            return <MainPage
                addTransaction={addTransaction}
                onOpenPage={onOpenPage} />
        case 'costs':
            return <TransactionHistoryPage
                transactions = {costs}
                transType={activePage}
                onReturnBtnClick={onOpenPage} />
        case 'incomes':
            return <TransactionHistoryPage
                transactions = {incomes}
                transType={activePage}
                onReturnBtnClick={onOpenPage} />
        default:
            return;
    }
}
