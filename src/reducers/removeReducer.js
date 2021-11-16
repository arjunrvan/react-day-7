import * as type from '../types';

const defaultState = {
    isLoading: false,
    data: [],
    error: null,
};

const removeReducer = (state, action) => {

    switch (action.type) {

        case type.REMOVE_TODO:
            return {
                isLoading: true,
                data: [...state.data],
                error: null,
            }

        case type.REMOVE_TODO_SUCCESS:
            return {
                isLoading: false,
                data: state.data.filter((list) => list.key!== action.payload),
                error: null,
            }

        case type.REMOVE_TODO_FAIL:
            return {
                isLoading: false,
                data: [...state.data],
                error: action.error,
            }
        default:
            return defaultState;

    }

}


export default removeReducer;