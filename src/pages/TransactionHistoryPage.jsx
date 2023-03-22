import Header from "../components/Header/Header";
import { useContext } from "react";
import { useParams } from 'react-router-dom';
import {TransactionContext} from '../context/TransactionsProvider';
import moment from 'moment';

const TransactionHistoryPage = () => {
    const transactionsContextValue = useContext(TransactionContext);
    const {transType} = useParams();
    const transactions = transactionsContextValue[transType];
    const transactionName = transType === "costs" ? "Costs" : "Incomes";

    return(
    <div className="container">
        <Header 
            title={`Transaction ${transactionName}`} 
            icon = "#icon-left" />
        <ul>
            {transactions.map(el => 
                {
                    const day = moment(el.date).format('dd, DD.MMM.YYYY');

                    return (<li key={el.id}>
                    <div>
                        <p>{day}, {el.time}</p>
                        <p>{el.comment}</p>
                    </div>

                    <div>
                        <p>{el.summ}</p>
                        <p>{el.current}</p>
                    </div>

                    <button type="button">Edit</button>
                </li>)}
            )}
        </ul>
    </div>
    )
}

export default TransactionHistoryPage;