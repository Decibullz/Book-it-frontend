import { Link } from "react-router-dom";
import TopBook from "../components/TopBook/TopBook";

export default function HomePage(props){
    return(
        <main className="Page HomePage">
            <div className="transbox">
                <h1>Welcome to BOOK-IT!</h1>
                <h2>Here's the Current New York Times Top Books</h2>
                {!props.user && <h5>Please <Link to='/signup'>Signup</Link> or <Link to='/login'>Login</Link>to search books!</h5>}
            </div>
            <div className="collection">
             {props.nytBookData.results.books && props.nytBookData.results.books.map((book,idx)=>
                <TopBook key={idx} book={book}/>)}
            </div>
            </main> 
    )
}
