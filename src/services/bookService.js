
// google
const API_URL='https://www.googleapis.com/books/v1/volumes?q='
const GOOGLEAPIKEY=process.env.REACT_APP_GOOGLEAPIKEY
// google book search
export function getBooks(i){
    return fetch(API_URL+`${i}${process.env.REACT_APP_GOOGLEAPIKEY}`).then(res=>res.json())
}

// NYT
const HOME_API='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key='
const NYTAPIKEY= process.env.REACT_APP_NYTAPIKEY

// home page top books

export function getNytBooks(){
    return fetch(HOME_API+`${process.env.REACT_APP_NYTAPIKEY}`).then(res=>res.json())
}