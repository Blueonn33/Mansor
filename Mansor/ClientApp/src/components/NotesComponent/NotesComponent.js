import React, { Component } from 'react';
import './NotesComponent.css';
import '../../custom.css';

export class NotesComponent extends Component {
    static displayName = NotesComponent.name;

    render() {
        return (
            <div>
                <form id="noteForm">
                    <h2 id="note-txt">AddNote</h2>
                    <hr id="line"></hr>
                    <div className="inputs">
                        <label>Title:
                            <input type="text" id="note-title" />
                        </label>
                    </div>
                    <div className="inputs">
                        <label>Content:
                            <textarea type="text" id="note-content" />
                        </label>
                    </div>
                    <div>
                        <button id="btn-noteForm">Add</button>
                    </div>
                    <div>
                        <button id="btn-cancel">
                            <a href={`https://localhost:44494/notes`} id="cancel-text">Cancel</a>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
