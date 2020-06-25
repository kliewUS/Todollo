import React from 'react';

const BoardCreateMenu = () => {
    return (
        <div className="board-create-content">
            <form className="board-create-form">
                <input className="board-title-input" type="text" placeholder="Add board title"/>
                <select id="visibility">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <button id="new-board-btn">Create Board</button>
            </form>
        </div>
    );
}

export default BoardCreateMenu;