import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesList from "../CategoriesList/CategoriesList";
import Header from "../Header/Header";
import s from "./MainPage.module.css"

const MainPage = () => {
    const isCategoryList = false;

    return (
        <>
           <Header 
            title={isCategoryList ? 'Категорії' : 'Журнал витрат'}
            icon = {isCategoryList ? '#icon-left' : null}
           />
            {isCategoryList ? <CategoriesList /> : 
            <>
            <TransactionForm />
            <button className="costs">Всі витрати</button>
            <button className="incomes">Всі прибутки</button>
            </>}
        </>
    )
}
export default MainPage;