import * as type from '../types';

const defaultState = {
    data: [],
};

const userReducer = (state, action) => {

    switch (action.type) {
        case type.REGISTER_USER:
            return {
                data: [...state.data,action.payload],
            }

        case type.LOGIN_USER:

        default:
            return defaultState;
    }
}


export default userReducer;