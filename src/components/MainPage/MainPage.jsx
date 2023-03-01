import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesList from "../CategoriesList/CategoriesList";
import Header from "../Header/Header";
import s from "./MainPage.module.css"

const MainPage = ({onIncomesBtnClick, onCostsBtnClick}) => {
    const isCategoryList = false;

    return (
        <div className="container">
           <Header 
            title={isCategoryList ? 'Категорії' : 'Журнал витрат'}
            icon = {isCategoryList ? '#icon-left' : null}
           />
            {isCategoryList ? <CategoriesList /> : 
            <>
            <TransactionForm/>
            <div className={s.blockBtn}>
                <button className={s.costs} onClick = {onIncomesBtnClick}>Всі витрати</button>
                <button className={s.incomes} onClick = {onCostsBtnClick}>Всі прибутки</button>
            </div>
            </>}
        </div>
    )
}
export default MainPage;