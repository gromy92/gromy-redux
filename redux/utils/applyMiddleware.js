 const  applyMiddleware = (...middlewares) =>{

    return createStore => {
        return (reducer,initialState)=>{
            let store = createStore(reducer ,initialState)
            let dispatch = store.dispatch
            console.log('store',store)
            middlewares.forEach(cb=>{
                console.log('cb',dispatch)
                dispatch = cb(store)(dispatch)
            })
            store.dispatch = dispatch
            return store
        }
    } 
  
    // return (createStore) => (reducer, initialState) => {
    //   // 内部先创建一个store (相当于直接调用 Redux.createStore(reducer, initialState))
    //   var store = createStore(reducer, initialState);
    //   // 保存最初始的store.dispatch
    //   var dispatch = store.dispatch;
    //   var chain = [];
  
    //   var middlewareAPI = {
    //     getState: store.getState,
    //     dispatch: (action) => dispatch(action)
    //   };
  
    //   chain = middlewares.map(middleware => middleware(middlewareAPI));
    //   dispatch = compose(...chain)(store.dispatch);  
     
    //   return {
    //     ...store,
    //     dispatch
    //   };
    // };
  }

  export function compose(...funcs) {
    return funcs.reduceRight((a,b)=>(...args)=> a(b(...args)))
  }

  export default applyMiddleware