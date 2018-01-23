import React, {PropTypes} from 'react';
import {Link} from 'react-router';

let number = 1;
const AuthorListRow = ({author}) => {
    return (
        <tr>
            <td>{number ++} </td>
            <td><a href={author.url}>{author.name}</a></td>
            <td>{author.category}</td>
            <td>{author.country}</td>
            <td>{author.language}</td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author : PropTypes.object.isRequired
};

export default AuthorListRow;