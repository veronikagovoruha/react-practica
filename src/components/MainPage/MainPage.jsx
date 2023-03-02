import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesList from "../CategoriesList/CategoriesList";
import Header from "../Header/Header";
import s from "./MainPage.module.css"
import { Component } from "react";


class MainPage  extends Component{

    state = {
        isCategoryList: false
    };

    handelOpenCategoriesList = () => {
        this.setState({isCategoryList: true})
    }

    handelCloseCategoriesList = () => {
        this.setState({isCategoryList: false})
    }

    render(){
        const {onIncomesBtnClick, onCostsBtnClick} = this.props;
        const {isCategoryList} = this.state;
        return (
            <div className="container">
               <Header 
                title={isCategoryList ? 'Категорії' : 'Журнал витрат'}
                icon = {isCategoryList ? '#icon-left' : null}
                cbOnClick={this.handelCloseCategoriesList}
               />
               <main className={s.main}>
               {isCategoryList ? <CategoriesList /> : 
                <>
                <TransactionForm handelOpenCategoriesList={this.handelOpenCategoriesList}/>
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