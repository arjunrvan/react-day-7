import * as type from '../types';

const defaultState = {
    isLoading: false,
    data: [],
    error: null,
    identify: 0,
};

const taskReducer = (state, action) => {

    switch (action.type) {
        case type.ADD_TODO:
            return {
                isLoading: true,
                data: [...state.data],
                error: null,
            };
        case type.ADD_TODO_SUCCESS:
            return {
                isLoading: false,
                data: [...state.data,action.payload],
                error: null,
            }
        case type.ADD_TODO_FAIL:
            return {
                isLoading: false,
                data: [...state.data],
                error: action.error,
            }

        case type.REMOVE_TODO:
            return {
                isLoading: false,
                data: [...state.data],
                error: null,
                identify: action.payload,
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

        case type.EDIT_TODO:

            let arr = [];
            state.data.map ((list) => {
                let varTemp = {task:'',key:0};
                if (list.key === action.payload.key) {
                    varTemp.task = list.task.toUpperCase();
                    varTemp.key = list.key;
                    arr.push(varTemp);
                } else {
                    arr.push(list);
                }
            });

            return {
                isLoading: false,
                data: arr,
                error: null,
            }

        default:
            return defaultState;
    }
}

export default taskReducer;