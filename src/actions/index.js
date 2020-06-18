//Actions creator
export const selectBook = (book) => {
    //Action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
} 
