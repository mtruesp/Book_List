import React from 'react'
import { combineReducers, createStore } from 'redux'

const Redux = () => {

    //Action creator
    const createPolicy = (name, amount) => {
        //Action (poliza)
        return {
            type: 'CREATE_POLICY',
            payload: {
                name: name,
                amount: amount
            }
        }
    }

    const deletePolicy = (name) => {
        return {
            type: 'DELETE_POLICY',
            payload: name
        }
    }

    const claimPolicy = (name, amount) => {
        return {
            type: 'CREATE_CLAIM',
            payload: {
                name: name,
                amount: amount
            }
        }
    }

    //Reducers
    const policies = (listPolicies = [], action) => {
        switch(action.type){
            case "CREATE_POLICY":
                return [...listPolicies, action.payload.name]
            case "DELETE_POLICY":
                return listPolicies.filter((name) => { return name !== action.payload } )
            default:
                return listPolicies
        }
    }

    const bank = (totalAmount = 0, action) => {
        switch(action.type){
            case "CREATE_POLICY":
                let newAmount = totalAmount + action.payload.amount
                return newAmount
            case "CREATE_CLAIM":
                return totalAmount - action.payload.amount
            default: 
                return totalAmount
        }
    }

    const claimHistory = (listOfClaims = [], action) => {
        switch(action.type){
            case "CREATE_CLAIM":
                return [...listOfClaims, action.payload]
            default:
                return listOfClaims
        }
    }

    const departments = combineReducers({
        totalAmount: bank,
        claimHistory: claimHistory,
        policies: policies
    })

    const store = createStore(departments)

    console.log(store.getState())

    store.dispatch(createPolicy('Manuel', 100))
    store.dispatch(createPolicy('Andres', 200))
    store.dispatch(createPolicy('Luis', 500))
    
    console.log(store.getState())

    store.dispatch(claimPolicy('Luis', 10))

    console.log(store.getState())
    
    store.dispatch(deletePolicy('Manuel'))
    
    console.log(store.getState().policies)

    return ( <div/> )
}

export default Redux