export default function SearchedBook(props){
    return( 
        <div className="searchedbook">
       <a href={`${props.book.volumeInfo.previewLink}`} target='_blank' rel="noreferrer" >
       <img src={`${props.book.volumeInfo.imageLinks?.thumbnail}`} alt=""/>   
       </a>
        </div>    
    )
}