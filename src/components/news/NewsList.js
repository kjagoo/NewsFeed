import React, { PropTypes } from 'react';
import NewsListRow from './NewsListRow';

const NewsList = ({ news }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th> &nbsp;</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {news.map(news1 =>
                    <NewsListRow key={news1.publishedAt} news1={news1} />
                )}
            </tbody>
        </table>
    );
};

NewsList.propTypes = {
    news: PropTypes.array.isRequired
};

export default NewsList;