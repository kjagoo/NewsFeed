import * as types from './actionTypes';
import newsApi from '../api/mockNewsApi';

export function loadNewsSuccess(news) {
    return { type: types.LOAD_NEWS_SUCCESS, news };
}

export function loadNews() {
    return function (dispatch) {
        return newsApi.getAllNews().then(news => {
            dispatch(loadNewsSuccess(news));
        }).catch(error => {
            throw (error);
        });
    };
}