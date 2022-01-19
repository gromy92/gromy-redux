class Store{
    constructor(reducer,initialState={}){
        this.state=initialState;
        this.listeners = []

        this.currentReducer = reducer
        this.dispatch = (action)=>{
            console.log('dispatch-is-exec')
            //change state
            this.state = this.currentReducer(this.state,action)
            
            //每次更新 state 都会去执行 监听器中的 回调函数
            this.listeners.forEach(cb=>cb())
        }
    }

    getState(){
        return this.state
    }
    //添加订阅
    subscribe(listener){
        this.listeners.push(listener)

        //取消订阅
        const unsubscribe = (listener)=>{
            this.listeners.filter(l=>l!==listener)
        }
        return unsubscribe                                                                                  
    }
}
export default Store