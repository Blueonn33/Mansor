import React, { Component } from 'react'
import '../NotesContainer/NotesContainer.css';

export default class NotesContainer extends Component {

    render() {
        return (
            <div className='notesContainer d-flex' key={this.props.noteData.id}>
                <div className="noteElement">
                    <div className='noteTitleWrapper'>
                        <h5 className='noteTitle pageText'> {this.props.noteData.title} </h5>
                    </div>
                    <div className='noteContentWrapper'>
                        <span className='noteContent pageText'> {this.props.noteData.content} </span>
                    </div>
                </div>
            </div>
        )
    }
}
