import * as type from "../types";


export const addSubmit = (num) => {
    return {
        type: type.ADD_COUNT,
        payload: num,
    }
}

export const reduceSubmit = () => {
    return {
        type: type.REDUCE_COUNT,
    }
}

export const addToDo = (data) => (dispatch) => {
    try {
        dispatch({
            type: type.ADD_TODO,
        });
        setTimeout(() => {
            dispatch({
                type: type.ADD_TODO_SUCCESS,
                payload: data,
            });
        },3000);
    } catch (error) {
        dispatch ({
            type: type.ADD_TODO_FAIL,
            error:error,
        });
    }

    // return {
    //     type: type.ADD_TODO,
    //     payload: data,
    // }
}

export const registerUser = (data) => {
    return {
        type: type.REGISTER_USER,
        payload: data,
    }
}



export const removeToDo = (key) => (dispatch) => {
    try {
        dispatch({
            type: type.REMOVE_TODO,
            payload: key,
        });
        setTimeout(() => {
            dispatch({
                type: type.REMOVE_TODO_SUCCESS,
                payload: key,
            });
        },3000);
    } catch (error) {
        dispatch ({
            type: type.REMOVE_TODO_FAIL,
            error:error,
        });
    }
    // return {
    //     type: type.REMOVE_TODO,
    //     payload: key,
    // }
}

export const editToDo = (data) => {
    return {
        type: type.EDIT_TODO,
        payload: data,
    }
}