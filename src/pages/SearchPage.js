import { useState } from 'react'
import SearchedBook from '../components/SearchedBook/SearchedBook'
import { getBooks } from '../services/bookService'
import './Pages.css'

export default function SearchPage(props){
    const [ formState, setFormState ] = useState({
        search:''
    })
    const [ bookData, setBookData ] = useState({
        items:[] 
      })

    function handleChange(evt){
        setFormState(prevState => ({
            ...prevState,
            [evt.target.name]:evt.target.value
        }))
    }
    async function search(evt){
        evt.preventDefault();
        const data = await getBooks(formState.search);
        setBookData(data)
        setFormState({
            search:''
        })
        
    }
    return(
        <main className="Page">
            <form onSubmit={search}>
                <div className="transbox">  
                <input name="search" type="text" className="form-control" value={formState.search} placeholder="Book Name"  onChange={handleChange}/>
                <input type="submit" value="Search"/>
                </div>
            </form>
                <div className="collection">
                    {bookData.items && bookData.items.map((book,idx)=>
                    <SearchedBook book={book} key={idx}/>
                    )}
                </div>
        </main>
    )
}