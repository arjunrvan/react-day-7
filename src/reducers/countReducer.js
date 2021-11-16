import * as type from '../types';

const countReducer = (state = 0, action) => {
    switch(action.type) {
        case type.ADD_COUNT:
            return state += action.payload;
        case type.REDUCE_COUNT:
            return state -= 1;
        default:
            return state;
    }
}

export default countReducer;