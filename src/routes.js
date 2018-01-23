import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AuthorsPage from './components/Authors/AuthorsPage';
import NewsPage from './components/news/NewsPage';
import ManageNewsPage from './components/news/ManageNewsPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="authors" component={AuthorsPage} />
        <Route path="news" component={NewsPage} />
        <Route path="news" component={ManageNewsPage} />
        <Route path="news/:id" component={ManageNewsPage} />
    </Route>
);
