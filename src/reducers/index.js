import { combineReducers } from "redux";

import countReducer from "./countReducer";
import taskReducer from "./taskReducer";
import removeReducer from "./removeReducer";
import userReducer from "./userReducer";

export default combineReducers ({
    count: countReducer,
    task: taskReducer,
    remove: removeReducer,
    user:userReducer,
});

