import React from 'react';
import { Link } from 'react-router-dom';

const ListIndexItem = ({list}) => {
    return (
        <li className="list-item">
            <p>{list.title}</p>
        </li>
    )
}

export default ListIndexItem;