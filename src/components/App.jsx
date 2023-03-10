import { Component } from "react";
import MainPage from "./MainPage/MainPage";
import lsApi from "../utils/localStorage" 
import TransactionHistoryPage from "./TransactionHistiryPage/TransactionHistoryPage";


export class App extends Component {
    state = {
        activePage: 'main',
        categories: [],
        costs: [],
        incomes: []
    }

    componentDidMount(){
        const initialCategories = [{title: 'Їжа', id: 1}];
        const newCategories = lsApi.getDataFromLS(lsApi.keys.CATEGORIS, initialCategories);
        const costs = lsApi.getDataFromLS(lsApi.keys.COSTS, []);
        const incomes = lsApi.getDataFromLS(lsApi.keys.INCOMES, []);
        this.setState({ categories: newCategories, costs, incomes });
    }

    componentDidUpdate(prevProps, prevState){
        const {categories, costs, incomes } = this.state;
        if(prevState.categories !== categories){
            lsApi.setDataToLS(lsApi.keys.CATEGORIS, categories)
        }
        if(prevState.costs !== costs){
            lsApi.setDataToLS(lsApi.keys.COSTS, costs)
        }
        if(prevState.incomes !== incomes){
            lsApi.setDataToLS(lsApi.keys.INCOMES, incomes)
        }
    }

    addCategory = (newCategory) => {
        this.setState(prev => ({
            categories: [...prev.categories, newCategory],
        }));
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

    addTransaction = transaction => {
        const {transType} = transaction;
        if(transaction.transType === 'costs'){
            this.setState(prevState => ({[transType]: [...prevState[transType], transaction]}));
        }
    }

    render(){
        const {activePage, categories} = this.state;
        switch(activePage){
            case 'main':
                return <MainPage addTransaction={this.addTransaction} categories ={ categories} addCategory = {this.addCategory} onIncomesBtnClick ={this.onIncomesBtnClick} onCostsBtnClick = {this.onCostsBtnClick}/>
            case 'costs':
                return <TransactionHistoryPage  transType = {activePage} onReturnBtnClick={this.onReturnBtnClick}/> 
                case 'incomes':
                    return <TransactionHistoryPage transType = {activePage} onReturnBtnClick={this.onReturnBtnClick}/> 
            default: 
                return 
        }

}}