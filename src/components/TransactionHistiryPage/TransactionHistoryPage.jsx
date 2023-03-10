import s from "./TransactionHistoryPage.module.css";
import Header from "../Header/Header";

const TransactionHistoryPage = ({transType, onReturnBtnClick}) => {
    const transactionName = transType === "costs" ? "Costs" : "Incomes"
    return(
    <div className="container">
        <Header title={`Transaction ${transactionName}`} icon = "#icon-left" cbOnClick = {onReturnBtnClick}/> 
    </div>
    )
}

export default TransactionHistoryPage;