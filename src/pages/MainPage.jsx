import Header from "../components/Header/Header";
import s from "../components/MainPage/MainPage.module.css";
import { useState, lazy, Suspense } from "react";
import { Link, Routes, Route, useNavigate, useMatch } from 'react-router-dom';
import moment from 'moment';

const CategoriesList = lazy(() => import('../components/CategoriesList/CategoriesList'));
const TransactionForm = lazy(() => import('../components/TransactionForm/TransactionForm'));

const timeNow = moment().format('HH:mm');
const dayNow = moment().format( "yyyy-MM-DD")

const initialStateForm = {
    date: dayNow,
    time: timeNow,
    sum: '',
    currency: 'UAH',
    comment: '',
    transType: 'costs',
}

const MainPage = () => {
    const navigate = useNavigate();
    const { params } = useMatch('/*');
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
        params['*'] === '' && navigate('category');
        params['*'] === 'category' && navigate('');
    }

    const resetForm = () => {
        setForm({ ...initialStateForm });
    }

    return (
        <div className="container">
            <Header
                title={params['*'] === 'category' ? 'Категорії' : 'Журнал витрат'}
                icon={params['*'] === 'category' ? '#icon-left' : null}
                cbOnClick={handelChangeCategoriesList}
            />
            <main className={s.main}>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Routes>
                        <Route path='category' element={<CategoriesList transType={form.transType} setCategories={setCategories} />} />
                        <Route index element={<>
                            <TransactionForm
                                category={category}
                                resetForm={resetForm}
                                handlerChange={handlerChange}
                                form={form}
                                handelOpenCategoriesList={handelChangeCategoriesList}
                            />
                            <div className={s.blockBtn}>
                                <Link to='/history/costs' className={s.link}>Всі витрати</Link>
                                <Link to='/history/incomes' className={s.link}>Всі прибутки</Link>
                            </div>
                        </>} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    )
}

export default MainPage;