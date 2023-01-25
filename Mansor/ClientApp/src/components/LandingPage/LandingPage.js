import React, { Component } from 'react';
import '../LandingPage/LandingPageStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

export class LandingPage extends Component {
    static displayName = LandingPage.name;

    showImg(modal, img, modal1, modal2) {
        document.getElementById(modal).style.display = 'block';
        document.getElementById(img).style.display = 'block';
        document.getElementById(modal1).style.display = 'none';
        document.getElementById(modal2).style.display = 'none';
    }

    closeImg(modal, img) {
        document.getElementById(modal).style.display = 'none';
        document.getElementById(img).style.display = 'none';
    }

    render() {
        return (
                <div>
                    <div className="body-container">
                    <div className="body-content">
                            <article className="main-content">
                                <header>
                                    <p>
                                        MANSOR is used to add and allocate tasks,
                                        creating a school timetable, and there are many other functionalities,
                                        which would help in better time planning.
                                    </p>
                                    <p>
                                        The site is the best helper for a student.
                                        Task allocation will help our users to be more organized
                                        and have time for the things they love to do.
                                    </p>
                                    <p>
                                        A variety of functionalities that are easy and pleasant to use.
                                        Simplicity and clean design are the basis of MANSOR.
                                </p>
                               
                                </header>
                            </article>
                        </div>
                    </div>
                    <ul className="d-flex mb-3">
                        <li className="option p-2 flex-fill" id="task"
                            onClick={() => this.showImg("modal-tasks", "tasksImg", "modal-table", "modal-notes")}>
                        Tasks</li>
                        <li className="option p-2 flex-fill" id="shedule"
                        onClick={() => this.showImg("modal-table", "tableImg", "modal-tasks", "modal-notes")}>
                            School timetable</li>
                        <li className="option p-2 flex-fill" id="notes"
                        onClick={() => this.showImg("modal-notes", "notesImg", "modal-table", "modal-tasks")}>
                            Notes</li>
                    </ul>
                     <div id="modal-tasks">
                        <div className="tasksImg">
                            <a target="_blank" href='/Images/Tasks.png'>
                                <img id="tasksImg" src='/Images/Tasks.png' alt="Time table" href='/Images/Timetable.png' />
                        </a>
                        </div>
                        <div className="body-content">
                            <div className="tasks-content">
                                <h2 id="h2-tasks">Tasks</h2>
                                <p>Write tasks that you can divide into three categories: </p>
                                <ul id="list">
                                    <li>- Daily - tasks that must be completed within one day.</li>
                                    <li>- Important - tasks with a high priority of execution.</li>
                                    <li>- Planned - tasks with a set deadline.</li>
                                </ul>
                                <p>
                                    Need more categories?
                                    Through the 'Add' button you can add a category of your choice.
                                </p>
                        </div>
                        <button id="btn-close" onClick={() => this.closeImg("modal-tasks","tasksImg")}>Close</button>
                        </div>
                    </div>
                    <div id="modal-table">
                        <div>
                            <a target="_blank" href='/Images/Timetable.png'>
                                <img id="tableImg" src='/Images/Timetable.png' alt="Time table" href='/Images/Timetable.png'/>
                            </a>
                        </div>
                        <div class="body-content">
                            <div class="table-content">
                                <h2 id="h2-table">School timetable</h2>
                                <p>Add school subjects to the timetable.</p>
                                <p>The program is divided into five columns - one for each day of the week.</p>
                                <p>
                                    Through the 'Add' button you can add a subject to the program.
                                </p>
                            </div>
                        </div>
                        <button id="btn-close" onClick={() => this.closeImg("modal-table", "tableImg")}>Close</button>
                    </div>
                    <div id="modal-notes">
                    <div>
                        <a target="_blank" href='/Images/Notes.png'>
                            <img id="notesImg" src='/Images/Notes.png' alt="Time table" href='/Images/Timetable.png' />
                        </a>
                        </div>
                        <div className="body-content">
                            <div className="notes-content">
                                <h2 id="h2-notes">Notes</h2>
                                <p>Add a note about a subject.</p>
                                <p>You can enter a subject as a title.</p>
                                <p>
                                    In a few sentences, write something important about the relevant subject.
                                </p>
                                <p>Setting a deadline is also imperative</p>
                            </div>
                        </div>
                        <button id="btn-close" onClick={() => this.closeImg("modal-notes", "notesImg")}>Close</button>
                </div>
                <button id="btn-register">
                    <a href={`https://localhost:44494/register`} id="reg-text">Register</a>
                </button>
                </div>
        );
    }
}
