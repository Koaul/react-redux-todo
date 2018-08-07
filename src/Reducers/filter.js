const filter = (state='visible_all', action) => {
    switch(action.type) {
        case 'set_filter':
        return action.filter
        default:
        return state;
    }
}
export default filter;