import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';

export default configureStore({
    reducer: {
        nav: navReducer,
    },
});

// const reducer = combineReducers({
//     nav: navSlice,
// })
// const store = configureStore({
//     reducer,
// })
// export default store;