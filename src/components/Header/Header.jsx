import s from './Header.module.css';
import sprite from '../../assets/sprite.svg';

const Header = ({title, icon, cbOnClick}) => {
    return (
        <>
         <header className={s.header}>
            {icon && (
            <button onClick={cbOnClick} className={s.button} type="button">
                <svg width="15" height="15">
                    <use href={sprite + icon}></use>
                </svg>
            </button>
            )}
                <h1 className={s.title}>
                    {title}
                </h1>
            </header>
        </>
    )
}

export default Header;