import s from './CategoriesList.module.css';
import sprite from '../../assets/sprite.svg'

const CategoriesList = () => {
    return(
        <>
            <ul className={s.list}>
                <li className={s.item}>
                    <p>Їжа</p>
                    <button type='button' className={s.btnInfo}>
                        <svg className={s.svg}>
                            <use href={sprite + '#icon-dots'}></use>
                        </svg>
                    </button>
                </li>
                <li className={s.item}>
                    <p>Різне</p>
                    <button type='button' className={s.btnInfo}>
                        <svg className={s.svg}>
                            <use href={sprite + '#icon-dots'}></use>
                        </svg>
                    </button>
                </li>
            </ul>

            <form className={s.form}>
                <input className={s.input} type="text" name="category" placeholder="Нова категорія"/>
                <button className={s.btnAdd} type="submit">
                    <svg className={s.svg}>
                        <use href={sprite + '#icon-plus'}></use>
                    </svg>
                </button>
            </form>
        </>
    )
}

export default CategoriesList;