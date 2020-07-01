import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = ({board}) => {
    return (
        <li className="board-item">
            <Link className="board-links" to={`/boards/${board.id}`}>{board.title}</Link>
        </li>
    )
}

export default BoardIndexItem;