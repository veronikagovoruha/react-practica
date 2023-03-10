import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesList from "../CategoriesList/CategoriesList";
import Header from "../Header/Header";
import s from "./MainPage.module.css"
import { Component } from "react";

const inintialStateForm = {
    date: '2023-03-02',
    time: '13:00',
    category: 'Продукти',
    sum: '',
    currency: 'UAH',
    comment: '',
    transType: 'costs',
}
class MainPage  extends Component{

    state = {
        isCategoryList: false,
        ...inintialStateForm,
    };

    handlerChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    setCategories = (category) => {
        this.setState({ category });
    }

    handelOpenCategoriesList = () => {
        this.setState({isCategoryList: true})
    }

    handelCloseCategoriesList = () => {
        this.setState({isCategoryList: false})
    }

    resetForm = () => {
        this.setState({inintialStateForm});
    }

    render(){
        const {onIncomesBtnClick, onCostsBtnClick, addCategory, categories, addTransaction} = this.props;
        const {isCategoryList, ...form} = this.state;
        return (
            <div className="container">
               <Header 
                title={isCategoryList ? 'Категорії' : 'Журнал витрат'}
                icon = {isCategoryList ? '#icon-left' : null}
                cbOnClick={this.handelCloseCategoriesList}
               />
               <main className={s.main}>
               {isCategoryList ? <CategoriesList categories={categories} addCategory= {addCategory} setCategories={this.setCategories}/> : 
                <>
                <TransactionForm resetForm = {this.resetForm} handlerChange={this.handlerChange} addTransaction={addTransaction} form={form} handelOpenCategoriesList={this.handelOpenCategoriesList}/>
                <div className={s.blockBtn}>
                    <button className={s.costs} onClick = {onIncomesBtnClick}>Всі витрати</button>
                    <button className={s.incomes} onClick = {onCostsBtnClick}>Всі прибутки</button>
                </div>
                </>}
               </main>
            </div>
        )
    }


}
export default MainPage;