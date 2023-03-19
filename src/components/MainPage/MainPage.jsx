import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesList from "../CategoriesList/CategoriesList";
import Header from "../Header/Header";
import s from "./MainPage.module.css"
import { useState } from "react";

const initialStateForm = {
    date: '2023-03-02',
    time: '13:00',
    sum: '',
    currency: 'UAH',
    comment: '',
    transType: 'costs',
}

const MainPage = ({ onOpenPage, addTransaction }) => {
    const [isCategoryList, setIsCategoryList] = useState(false);
    const [category, setCategory] = useState('Food');
    const [form, setForm] = useState({ ...initialStateForm });

    const handlerChange = e => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value }));
    }

    const setCategories = (category) => {
        setCategory(category);
        handelChangeCategoriesList();
    }

    const handelChangeCategoriesList = () => {
        setIsCategoryList(!isCategoryList)
    }

    const resetForm = () => {
        setForm({ ...initialStateForm });
    }

    return (
        <div className="container">
            <Header
                title={isCategoryList ? 'Категорії' : 'Журнал витрат'}
                icon={isCategoryList ? '#icon-left' : null}
                cbOnClick={handelChangeCategoriesList}
            />
            <main className={s.main}>
                {isCategoryList ? <CategoriesList transType={form.transType} setCategories={setCategories} /> :
                    <>
                        <TransactionForm
                            category={category}
                            resetForm={resetForm}
                            handlerChange={handlerChange}
                            addTransaction={addTransaction}
                            form={form}
                            handelOpenCategoriesList={handelChangeCategoriesList}
                        />
                        <div className={s.blockBtn}>
                            <button className={s.costs} onClick={() => onOpenPage('costs')}>Всі витрати</button>
                            <button className={s.incomes} onClick={() => onOpenPage('incomes')}>Всі прибутки</button>
                        </div>
                    </>}
            </main>
        </div>
    )
}

export default MainPage;