import Store from './Store.js'
class Redux {

}
export const createStore = (reducer,initialState,enhancer) =>{
    if(typeof enhancer =='function'){
        return enhancer(createStore)(reducer,initialState)
    }
    return new Store(reducer,initialState)
}

export const combineReducer = (reducers) =>{
    return (state={},action)=>{
        let finalState = {}
        for (const key in reducers) {
            finalState[key] = reducers[key](state[key],action)
        }
        return finalState
    }
}



export default Redux