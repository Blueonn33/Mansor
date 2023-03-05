import React, { Component } from 'react'
import '../NotesContainer/NotesContainer.css';

export default class NotesContainer extends Component {

    render() {
        return (
            <div className='notesContainer d-flex' key={this.props.noteData.id}>
                <div className='noteNameWrapper'>
                    <span className='noteName pageText'> {this.props.noteData.title} </span>
                </div>
                <div className='useNoteButtonWrapper ml-auto'>
                    <button className='noteButton'>
                        <a href={`https://localhost:44494/taskItems/${this.props.noteData.id}`} className='noteButtonText'>Use</a>
                    </button>
                </div>
            </div>
        )
    }
}
