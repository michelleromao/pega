import { combineReducers } from 'redux';
import { reducerUsers } from './users';
import { authReducer } from './auth';
import reducerCategories from './categories';
import { reducerBag } from './bag';

export const allReducers = combineReducers({
    users: reducerUsers,
    auth: authReducer,
    categories: reducerCategories,
    bag: reducerBag
});

