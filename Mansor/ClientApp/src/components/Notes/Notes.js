import React, { Component } from 'react'
import { endpoints } from '../../endpoints';
import { AddNote } from '../AddNote/AddNote';
import '../Notes/Notes.css';
import NotesContainer from '../NotesContainer/NotesContainer';

export default class Notes extends Component {

    constructor(props) {
        super(props)
        this.state = { notes: [] }
        this.loadNotes = this.loadNotes.bind(this);
    }
    async componentDidMount() {
        this.loadNotes();
    }

    async loadNotes() {
        let url = endpoints.loadNotes();     
        fetch(url)
            .then((res) => res.json())
            .then((res) => this.setState({ notes: res }))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div className='notesListWrapper d-flex justify-content-center align-items-center'>
                <div className='notesContainer'>
                    <div className='notesContent'>
                        <div className='notesListHeaderWrapper d-flex'>
                            <h4 className='notesListHeader'>Notes</h4>
                        </div>
                        <div className='createNewNoteButtonWrapper'>
                            <AddNote />
                        </div>
                        <div className='notesContainers'>
                            {this.state.notes.map((note) => {
                                return (
                                    <NotesContainer noteData={note} key={note.id} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
