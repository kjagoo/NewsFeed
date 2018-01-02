import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsActions from '../../actions/newsActions';
import NewsList from './NewsList';

class NewsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            news1: { title: "" }
        };
    }

    newsRow(news1, index) {
        return <div key={index}> {news1.publishedAt}</div>;
    }

    render() {
        const { news } = this.props;
        return (
            <div>
                <h1>News</h1>
                <NewsList news={news} />
            </div>
        );
    }
}

NewsPage.propTypes = {
    news: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        news: state.news
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(newsActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);