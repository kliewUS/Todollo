import React from 'react';
import { Link } from 'react-router-dom';

const BoardNavItem = ({board}) => {
    return (
        <li>
            <Link className="board-links" to={`/boards/${board.id}`}>{board.title}</Link>
        </li>
    )
}

export default BoardNavItem;