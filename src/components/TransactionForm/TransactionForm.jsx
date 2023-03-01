import s from "./TransactionForm.module.css";

const TransactionForm = () => {
    return(
        <>
        <form className={s.form}>
                <label className={s.label}>День
                    <input className={s.inputDate} type="date" name="date"/>
                </label>
                <label className={s.label}>Час 
                    <input className={s.inputTime} type="time" name="time"/>
                </label>
                <label className={s.label}>Категорія 
                    <input className={s.inputCategory}  type="button" name="category" value={'Продукти'}/>
                </label>
                <label className={s.label}>Сума 
                    <input className={s.inputSum} type="text" name="sum" placeholder="Введіть суму"/>
                </label>
                <label className={s.label}l>Валюта 
                    <input className={s.inputCurrency} type="button" name="currency" value={'UAH'}/>
                </label>
                <label className={s.label}>
                    <input className={s.inputcomment} type="text" name="comment" placeholder="Коментар"/>
                </label>
            </form>
        </>
    )
}

export default TransactionForm;