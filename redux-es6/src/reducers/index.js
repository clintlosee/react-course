import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import authorsReducer from './authorsReducer';

const rootReducer = combineReducers({
    courses: courseReducer,
    authors: authorsReducer
});

export default rootReducer;
