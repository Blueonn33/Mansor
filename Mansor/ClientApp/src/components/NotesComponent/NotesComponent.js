import React, { Component } from 'react';
import './NotesComponent.css';
import '../../custom.css';
import { endpoints } from '../../endpoints';

export class NotesComponent extends Component {
    static displayName = NotesComponent.name;

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            errorMessageTitle: '',
            errorMessageContent: '',
            textColor: '',
        }
        this.createNote = this.createNote.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    async createNote(event) {
        event.preventDefault();
        console.log(this.state.title);
        var titleInput = this.state.title;
        var contentInput = this.state.content;

        const errors = {
            success: "Successfully added a new note.",
            minLength: "Title must be at least 3 characters.",
            minLengthContent: "Content must be at least 3 characters.",
            maxLength: "Title must be less than 100 characters.",
            existingNote: "This note is already existing."
        }
        const color = {
            error: "red",
            success: "green"
        }
        if (titleInput.length < 3) {

            this.setState({ errorMessageTitle: errors.minLength });
            this.setState({ textColor: color.error });
        }
        if (contentInput.length < 3) {

            this.setState({ errorMessageContent: errors.minLengthContent });
            this.setState({ textColor: color.error });
        }
        else if (titleInput.length > 100) {
            this.setState({ errorMessageTitle: errors.maxLength });
            this.setState({ textColor: color.error });
        }
        else {
            await fetch(endpoints.createNote(), {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    "title": titleInput,
                    "content": contentInput,
                    "userId": "5b8a9940-faa6-4afa-9328-7cfc792d5c78"
                })
            })
                .then((response) => {
                    if (!response.ok) {
                        this.setState({ errorMessageTitle: errors.existingNote });
                        this.setState({ textColor: color.error });
                    }
                    else {
                        this.setState({ errorMessageTitle: errors.success });
                        this.setState({ errorMessageContent: errors.success });
                        this.setState({ textColor: color.success });
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    componentDidMount() {
        this.render();
    }
    close() {
        this.setState({ 'titleInput': '' });
        this.setState({ 'noteInput': '' });
        this.setState({ errorMessageTitle: '' });
        this.setState({ errorMessageContent: '' });
        this.setState({ textColor: 'gray' })
    }

    render() {
        return (
            <div>
                <form id="noteForm" onSubmit={this.createNote}>
                    <h2 id="note-txt">AddNote</h2>
                    <hr id="line"></hr>
                    <div className="inputs">
                        <label>Title:
                            <input type="text" id="note-title" className="form-control"
                                onChange={(e) => this.setState({ 'title': e.target.value })}
                                style={{ borderBottomColor: this.state.textColor }}
                            />
                        </label>
                    </div>
                    <div className="inputs">
                        <label>Content:
                            <textarea type="text" id="note-content" className="form-control"
                                onChange={(e) => this.setState({ 'content': e.target.value })}
                                style={{ borderBottomColor: this.state.textColor }}
                            />
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
