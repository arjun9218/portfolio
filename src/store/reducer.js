const initialState = {
    darkMode: false
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    if (action.type === "DARK_MODE") {
        if (newState.darkMode) {
            newState.darkMode = false;
        } else {
            newState.darkMode = true;
        }
    }
    return newState;
}

export default reducer;
