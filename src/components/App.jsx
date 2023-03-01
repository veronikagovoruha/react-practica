import { Component } from "react";
import MainPage from "./MainPage/MainPage";
import TransactionHistoryPage from "./TransactionHistiryPage/TransactionHistoryPage";

export class App extends Component {
    state = {
        activePage: 'main'
    }

    onIncomesBtnClick = () => {
        this.setState({activePage: 'incomes'})
    }

    onCostsBtnClick = () => {
        this.setState({activePage: 'costs'})
    }

    onReturnBtnClick = () => {
        this.setState({activePage: 'main'})
    }

    render(){
        const {activePage} = this.state;
        switch(activePage){
            case 'main':
                return <MainPage onIncomesBtnClick ={this.onIncomesBtnClick} onCostsBtnClick = {this.onCostsBtnClick}/>
            case 'costs':
                return <TransactionHistoryPage  transType = {activePage} onReturnBtnClick={this.onReturnBtnClick}/> 
                case 'incomes':
                    return <TransactionHistoryPage transType = {activePage} onReturnBtnClick={this.onReturnBtnClick}/> 
            default: 
                return 
        }

}}