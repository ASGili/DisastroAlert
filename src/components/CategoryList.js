import {Link} from "react-router-dom"

const CategoryList = ({events, handleCategorySelected}) => {
    const listOfCategories = events.map((event, index) => {
        return (
            event.categories[0].title
        )
    })

    const setOfUniqueCategories = new Set(listOfCategories)

    const arrayOfUniqueCategories = [... setOfUniqueCategories].map((title) => {
        // original code:
        // return <option>{title}</option>
        return <li><Link to={"/disaster/" + title}>{title}</Link></li>
    })

    return (
        // original code:
        // <div>
        //     <select onChange={handleCategorySelected}>
        //     <option disabled selected placeholder>Select a category</option>
        //         {arrayOfUniqueCategories}
        //     </select>
        // </div>

        <div>
            <ul>
            {arrayOfUniqueCategories}
            </ul>
        </div>
    )
}



export default CategoryList