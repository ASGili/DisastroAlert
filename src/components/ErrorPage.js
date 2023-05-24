import {Link} from "react-router-dom"

const ErrorPage = ()=> {
    return (
    <div>
    <h1>404 - PAGE NOT FOUND</h1>
    <Link to="/home">Return to home page</Link>
    </div>
    )
}

export default ErrorPage