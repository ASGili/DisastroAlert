import {Link} from "react-router-dom"

const CategoryList = ({events, handleCategorySelected}) => {
    const listOfCategories = events.map((event, index) => {
        return (
            event.categories[0].title
        )
    })
    const setOfUniqueCategories = new Set(listOfCategories)
    const arrayOfUniqueCategories = [... setOfUniqueCategories].map((title, index) => {
        return <li key={index} value={title}><Link to={"/DisastroAlert/disaster/" + title} onClick={handleCategorySelected}>{title}</Link></li>
    })

    return (
        <ul className="list">
        <h3>Choose a disaster category: </h3>
            {arrayOfUniqueCategories}
        </ul>
        )
}



export default CategoryList