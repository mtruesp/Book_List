import userApi from '../api/userApi'

//Actions creator
export const selectBook = (book) => {
    //Action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
} 

export const getUsers = () => {
    return async (dispatch, getState) => {
        const users = await userApi.get('/users')
        dispatch({
            type: 'GET_USER',
            payload: users.data
        })
    }
}