export default(state = [], action) => {
    switch (action.type) {
        case "ADD_LOG":
            return [
                ...state,
                Object.assign({}, action.log)
            ];
        case "SHOW_LOADER":
            return [
                ...state,
                Object.assign({}, action.loader)
            ]
        default:
            return state;
    }
}