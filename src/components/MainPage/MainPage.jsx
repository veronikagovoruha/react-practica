import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesList from "../CategoriesList/CategoriesList";

const MainPage = () => {
    const isCategoryList = false;

    return (
        <>
            <header>
                <button type="button">
                    {isCategoryList ? 'Go back' : 'burger'}
                </button>
                <h1 className="title-page">
                    {isCategoryList ? 'Категорії' : 'Журнал витрат'}
                </h1>
            </header>
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