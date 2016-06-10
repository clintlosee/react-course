import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import authorsReducer from './authorsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses: courseReducer,
    authors: authorsReducer,
    ajaxCallsInProgress
});

export default rootReducer;
