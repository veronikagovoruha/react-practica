import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesList from "../CategoriesList/CategoriesList";
import Header from "../Header/Header";
import s from "./MainPage.module.css"
import { Component } from "react";

const initialStateForm = {
    date: '2023-03-02',
    time: '13:00',
    sum: '',
    currency: 'UAH',
    comment: '',
    transType: 'costs',
}

// const MainPage 

class MainPage  extends Component{
    state = {
        isCategoryList: false,
        category: 'Food',
        ...initialStateForm,
    };

    handlerChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    setCategories = (category) => {
        this.setState({ category });
        this.handelCloseCategoriesList();
    }

    handelOpenCategoriesList = () => {
        this.setState({isCategoryList: true})
    }

    handelCloseCategoriesList = () => {
        this.setState({isCategoryList: false})
    }

    resetForm = () => {
        this.setState({...initialStateForm});
    }

    render(){
        const {onOpenPage, addTransaction} = this.props;
        const {isCategoryList, ...form} = this.state;
        const {transType} = form;
        return (
            <div className="container">
               <Header 
                title={isCategoryList ? 'Категорії' : 'Журнал витрат'}
                icon = {isCategoryList ? '#icon-left' : null}
                cbOnClick={this.handelCloseCategoriesList}
               />
               <main className={s.main}>
               {isCategoryList ? <CategoriesList transType={transType} setCategories={this.setCategories}/> : 
                <>
                <TransactionForm resetForm = {this.resetForm} handlerChange={this.handlerChange} addTransaction={addTransaction} form={form} handelOpenCategoriesList={this.handelOpenCategoriesList}/>
                <div className={s.blockBtn}>
                    <button className={s.costs} onClick = {() => onOpenPage('costs')}>Всі витрати</button>
                    <button className={s.incomes} onClick = {() => onOpenPage('incomes')}>Всі прибутки</button>
                </div>
                </>}
               </main>
            </div>
        )
    }


}
export default MainPage;