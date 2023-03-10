import s from './CategoriesList.module.css';
import sprite from '../../assets/sprite.svg'
import { Component } from 'react';
import {nanoid} from 'nanoid';
 
class CategoriesList extends Component {
    state = {
        input: '',
        // categories: [{title: 'Їжа', id: 1} , {title: 'House', id: 2}, {title: 'Різне', id: 3}]
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        const {addCategory } = this.props;
        const {input} = this.state;
        e.preventDefault();
        addCategory({title: input, id: nanoid()})
    }

    render(){
        const {setCategories, categories} = this.props;
        return(
            <>
                <ul className={s.list}>
                    {categories.map(({title, id}) => (
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
    
                <form className={s.form} onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} className={s.input} type="text" name="input" placeholder="Нова категорія"/>
                    <button className={s.btnAdd} type="submit">
                        <svg className={s.svg}>
                            <use href={sprite + '#icon-plus'}></use>
                        </svg>
                    </button>
                </form>
            </>
        )
    }
}

export default CategoriesList;