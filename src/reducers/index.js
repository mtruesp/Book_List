import { combineReducers } from 'redux'

const booksReducer = () => {
    return [
        {
            name: "Rayuela",
            author: "Julio Cortazar"
        },
        {
            name: "Nada",
            author: "Jane Taller"
        },
        {
            name: "Harry Potter",
            author: "J.K. Rowling"
        }
    ]
}

const selectedBookReducer = (selectedBook = null, action) => {
    if(action.type == 'BOOK_SELECTED'){
        return action.payload
    }
    else{
        return selectedBook
    }
}

export default combineReducers({
    list: booksReducer,
    bookSelected: selectedBookReducer
})