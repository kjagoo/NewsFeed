import * as types from '../actions/actionTypes';

export default function authorReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_NEWS_SUCCESS:
            return action.news;

        default:
            return state;
    }
}