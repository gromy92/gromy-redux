export const logger = store => next => action=>{
    console.log('im - logger')
    let result = next(action)
    console.log('next logger')
    return result
}

export const asyncfunc = store => next => action=>{
    console.log('im - asyncfunc')
    let res =  next(action)
    console.log('next asyncfunc')
    return res
}
