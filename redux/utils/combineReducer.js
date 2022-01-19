
 const combineReducer = (reducers) =>{
    return (state={},action)=>{
        let finalState = {}
        for (const key in reducers) {
            finalState[key] = reducers[key](state[key],action)
        }
        return finalState
    }
}

export default combineReducer