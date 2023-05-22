const CategoryList = ({events}) => {
    const listOfCategories = events.map((event, index) => {
        return (
            // <option value={event.categories[0].id} key={index}>{event.categories[0].title}</option>
            event.categories[0].title
        )
    })

    const setOfUniqueCategories = new Set(listOfCategories)

    const arrayOfUniqueCategories = [... setOfUniqueCategories].map((title) => {
        return <option>{title}</option>
    })

    return (
        <div>
            <select>
                {arrayOfUniqueCategories}
            </select>
        </div>
    )
}



export default CategoryList