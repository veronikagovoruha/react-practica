import { Component } from "react";
import s from "./TransactionForm.module.css";

class TransactionForm extends Component {
    state = {
        date: '2023-03-02',
        time: '13:00',
        category: 'Продукти',
        sum: '',
        currency: 'UAH',
        comment: ''
    }

    handlerChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render(){
        const {handelOpenCategoriesList} = this.props;
        const {date, time, category, sum, currency, comment} = this.state;
        return(
            <>
            <form className={s.form}>
                    <label className={s.label}>День
                        <input className={s.inputDate} type="date" name="date" onChange={this.handlerChange} value={date}/>
                    </label>
                    <label className={s.label}>Час 
                        <input 
                        className={s.inputTime} 
                        type="time" name="time" 
                        onChange={this.handlerChange} 
                        value={time}/>
                    </label>
                    <label className={s.label}>Категорія 
                        <input 
                        className={s.inputCategory} 
                        onClick={handelOpenCategoriesList}  
                        type="button" 
                        name="category" 
                        value={category}/>
                    </label>
                    <label className={s.label}>Сума 
                        <input className={s.inputSum} type="text" name="sum" value={sum} onChange={this.handlerChange} placeholder="Введіть суму"/>
                    </label>
                    <label className={s.label}l>Валюта 
                        <input className={s.inputCurrency} type="button" name="currency" onChange={this.handlerChange} value={currency}/>
                    </label>
                    <label className={s.label}>
                        <input className={s.inputcomment} type="text" name="comment" onChange={this.handlerChange} value={comment} placeholder="Коментар"/>
                    </label>
                </form>
            </>
        )
        }
}

export default TransactionForm;