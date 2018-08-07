export const remove_todo = (id) => {
    return{
        type:'remove_todo',
        payload: id
    }
}
export const add_todo = (text) => {
    return{
        type:'add_todo',
        payload:text
    }
}
export const set_filter = (filter) => {
    return{
        type: 'set_filter',
        filter: filter
    }
}
export const complete_todo = (id) => {
    return{
        type: 'complete_todo',
        payload: id,
    }
}