import { useState, useContext } from 'react';
import { nanoid } from 'nanoid';
import {CategoriesContext} from '../../context/CategoriesProvider';
import s from './CategoriesList.module.css';
import sprite from '../../assets/sprite.svg';

const CategoriesList = ({  transType, setCategories }) => {
    const contextValue = useContext(CategoriesContext);
    const [input, setInput] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setInput(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        contextValue.addCategory({ title: input, id: nanoid() }, transType);
    }

    console.log(contextValue, transType);
    const categories = contextValue[transType];
    return (
        <>
            <ul className={s.list}>
                {categories.map(({ title, id }) => (
                    <li key={id} className={s.item}>
                        <p onClick={() => setCategories(title)}>{title}</p>
                        <button type='button' className={s.btnInfo}>
                            <svg className={s.svg}>
                                <use href={sprite + '#icon-dots'}></use>
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>

            <form className={s.form} onSubmit={handleSubmit}>
                <input onChange={handleChange} className={s.input} type="text" name="input" placeholder="Нова категорія" />
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