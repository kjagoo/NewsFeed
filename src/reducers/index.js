import {combineReducers} from 'redux';
import authors from './authorReducer';
import news from './newsReducer';

const rootReducer = combineReducers({
    authors, 
    news
});

export default rootReducer;