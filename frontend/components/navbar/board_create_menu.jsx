import React from 'react';

const BoardCreateMenu = (props) => {
    return (
        <div className="board-create-content">
            <form className="board-create-form">

                <div className="board-create-main-form">
                    <input className="board-title-input" type="text" placeholder="Add board title"/>
                    <span onClick={() => props.closeModal()} className="board-create-close-btn">close</span>                 
                    <select id="visibility">
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>

                <div className="board-create-btn">
                    <button id="new-board-btn">Create Board</button>
                </div>

            </form>
        </div>
    );
}

export default BoardCreateMenu;