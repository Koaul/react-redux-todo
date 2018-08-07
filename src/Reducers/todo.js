let initialState = [
    {
        id: Date.now()*Math.random()/10,
        text: 'not completed',
        completed: false
    },
    {
        id: Date.now()*Math.random()/10,
        text: 'completed',
        completed: true
    }
]

const todo = (state=initialState, action) => {
    switch(action.type){
        case 'add_todo':
        return [
            ...state,
            {
                id: Date.now()*Math.random()/10,
                text: action.payload,
                completed: false
            }
        ]
        case 'remove_todo':
        return state.filter((item) => item.id!==action.payload)
        case 'complete_todo':
        return state.map((item)=> item.id===action.payload ? {...item, completed: !item.completed } : item)
        default:
        return state
    }
}
export default todo;