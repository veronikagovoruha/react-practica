const CategoriesList = () => {
    return(
        <>
            {/* <header>
                <button type="button">Go back</button>
                <h1>Категорії</h1>
            </header> */}

            <ul>
                <li>Їжа</li>
                <li>Різне</li>
            </ul>

            <form>
                <input type="text" name="category" placeholder="Нова категорія"/>
                <button type="submit">+</button>
            </form>
        </>
    )
}

export default CategoriesList;