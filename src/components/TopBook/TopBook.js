export default function TopBook(props){
    return( 
        <div className="TopBook">
            <a href={`${props.book.amazon_product_url}`}target='_blank'>
                <img src={`${props.book.book_image}`} alt={`${props.book.title}`}/>
            </a>
        </div>
    )
}
