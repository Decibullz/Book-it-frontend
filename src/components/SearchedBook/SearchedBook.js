export default function SearchedBook(props){
    return( 
        <div className="searchedbook">
         {/* <h1 className='transbox'>
        {props.book.volumeInfo.title}
        </h1>         */}
       <a href={`${props.book.volumeInfo.previewLink}`} target='_blank'>
       <img src={`${props.book.volumeInfo.imageLinks?.thumbnail}`} alt=""/>   
       </a>
        </div>    
    )
}