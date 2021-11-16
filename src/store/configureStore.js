import {configureStore} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

// import countReducer from '../reducers/countReducer';
// import taskReducer from '../reducers/taskReducer';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['count'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});
  
let persistor = persistStore(store);


// export default configureStore ({
//     reducer: {
//         count: countReducer,
//         task: taskReducer,
//     },
// });


export {store, persistor};