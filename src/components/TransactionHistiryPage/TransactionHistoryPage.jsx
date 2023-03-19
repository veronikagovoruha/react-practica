import s from "./TransactionHistoryPage.module.css";
import Header from "../Header/Header";

const TransactionHistoryPage = ({transType, onReturnBtnClick, transactions}) => {
    const transactionName = transType === "costs" ? "Costs" : "Incomes";

    const cbOnClick = () => {
        onReturnBtnClick('main');
    }

    return(
    <div className="container">
        <Header 
            title={`Transaction ${transactionName}`} 
            icon = "#icon-left" 
            cbOnClick = {cbOnClick}/> 

        <ul>
            {transactions.map(el => 
                <li key={el.id}>
                    <div>
                        <p>{el.date} {el.time}</p>
                        <p>{el.comment}</p>
                    </div>

                    <div>
                        <p>{el.summ}</p>
                        <p>{el.current}</p>
                    </div>

                    <button type="button">Edit</button>
                </li>
            )}
        </ul>
    </div>
    )
}

export default TransactionHistoryPage;