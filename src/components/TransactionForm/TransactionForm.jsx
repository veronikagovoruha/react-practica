import s from "./TransactionForm.module.css";

const TransactionForm = ({handelOpenCategoriesList, resetForm, addTransaction, handlerChange, form, category}) => {
        const { date, time, sum, currency, comment, transType} = form;
        return(
            <>
            <form className={s.form} 
                onSubmit={(e) => 
                {e.preventDefault(); 
                addTransaction(form);
                resetForm()
            }} 
            >
                <button type="submit">Відпрвити</button>
                <select name="transType" id="" value={transType} onChange={handlerChange}>
                    <option value="costs">Витрати</option>
                    <option value="incomes">Прибуток</option>
                </select>
                    <label className={s.label}>День
                        <input className={s.inputDate} type="date" name="date" onChange={handlerChange} value={date}/>
                    </label>
                    <label className={s.label}>Час 
                        <input 
                        className={s.inputTime} 
                        type="time" name="time" 
                        onChange={handlerChange} 
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
                        <input className={s.inputSum} type="text" name="sum" value={sum} onChange={handlerChange} placeholder="Введіть суму"/>
                    </label>
                    <label className={s.label}>Валюта 
                        <input className={s.inputCurrency} type="button" name="currency" onChange={handlerChange} value={currency}/>
                    </label>
                    <label className={s.label}>
                        <input className={s.inputcomment} type="text" name="comment" onChange={handlerChange} value={comment} placeholder="Коментар"/>
                    </label>
                </form>
            </>
        )
        }

export default TransactionForm;