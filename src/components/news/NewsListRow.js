import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'react-moment';
import 'moment-timezone';

const NewsListRow = ({ news1 }) => {
    return (
        <tr>
            <td><a href={news1.watchHref} target="_blank"></a></td>
            <td><a href={news1.url}><img src={news1.urlToImage} width="100px" /></a>
                <br/> <Moment fromNow date={news1.publishedAt} />
            </td>
            <td><b>{news1.title}</b>
                <br/>{news1.description}
                <br/> <a href={news1.url}>Read more</a>
            </td>
            <td><Link to={"news/" + news1.source.id}>{news1.author}</Link></td>
            <td></td> 
            <td><i className="glyphicon glyphicon-star"></i></td>
        </tr>
    );
};

NewsListRow.propTypes = {
    news1: PropTypes.object.isRequired
};

export default NewsListRow;