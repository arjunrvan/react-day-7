import {configureStore} from '@reduxjs/toolkit';
import countReducer from '../reducers/countReducer';
import taskReducer from '../reducers/taskReducer';

export default configureStore ({
    reducer: {
        count: countReducer,
        task: taskReducer,
    },
});