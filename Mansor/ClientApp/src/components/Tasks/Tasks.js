import React, { Component } from 'react';
import '../Tasks/TasksStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import { FaBars } from "react-icons/fa";
import { endpoints } from '../../endpoints';
import TaskContainerComponent from '../TasksComponent/TaskContainerComponent';
import { AddTaskGroup } from '../AddTaskGroup/AddTaskGroup';

export class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            tasks: []
        }
        this.loadTasks = this.loadTasks.bind(this);
        let splittedURL = window.location.pathname.split('/');
        this.taskGroupId = splittedURL[splittedURL.length - 1];
        //this.createTask = this.createTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    static displayName = Tasks.name;

    invalidInput() {
        var msg = document.getElementById("snackbar");
        msg.className = "show";
        setTimeout(function () { msg.className = msg.className.replace("show", ""); }, 3000);
    }

    async componentDidMount() {
        this.loadTasks();
    }
    async loadTasks(taskGroupId) {
        let splittedURL = window.location.pathname.split('/')
        taskGroupId = splittedURL[splittedURL.length - 1]
        await fetch(`https://localhost:7286/api/taskItems/${Number(taskGroupId)}`)
            .then((res) => res.json())
            .then((res) => this.setState({ tasks: res }))
    }

    //async createTask() {
    //    //var li = document.createElement("li");
    //    //var taskGroupId = this.props.location.pathname.split('/')[2]
    //    //var t = document.createTextNode(inputValue);
    //    //li.appendChild(t);

    //    var inputValue = document.getElementById("tasksInput").value;

    //    if (inputValue === '') {
    //        this.invalidInput();
    //    }
    //    else {
    //        console.log(inputValue);
    //        await fetch(endpoints.createTask(), {
    //            method: 'POST',
    //            headers: {
    //                'Content-Type': 'application/json'
    //            },
    //            body: JSON.stringify({
    //                "Value": inputValue,
    //                "IsCompleted": false,
    //                "TaskGroupId": 1
    //            })
    //        })
    //            .then(res => res.json())
    //            .then(response => console.log('Success: ', JSON.stringify(response)))
    //            .catch(error => console.error('Error: ', error));

    //        //document.getElementById("tasks-list").appendChild(li);
    //    }
    //    /*document.getElementById("tasksInput").value = "";*/

    //    //var span = document.createElement("SPAN");
    //    //var txt = document.createTextNode("\u00D7");
    //    //span.className = "close";
    //    //span.appendChild(txt);
    //    //li.appendChild(span);

    //    //var closebtns = document.getElementsByClassName("close");

    //    //for (var i = 0; i < closebtns.length; i++) {
    //    //    closebtns[i].addEventListener("click", function () {
    //    //        this.parentElement.style.display = 'none';
    //    //    });
    //    //}
    //}

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    componentDidMount() {
        this.render();
    }

    render() {
        return (
            <div>
                <div className="offcanvas offcanvas-start" id="offcanvas">
                    <div className="offcanvas-header">
                        <h3 className="offcanvas-title text-white">Martin Marinov</h3>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <hr id="line"></hr>
                    <div className="offcanvas-body text-white">
                        <input type="text" className="group-input" />
                        <button type="button" id="btn-addGroup">Add</button>
                    </div>
                    
                </div>

                <div className='tasksListWrapper d-flex justify-content-center align-items-center' >
                   
                    <form className='tasksContainer'>
                        
                        <div className='tasksGroupNameWrapper d-flex'>
                            <h4 className='tasksGroupName'>Daily</h4>
                            <div>
                                <AddTaskGroup />
                            </div>

                        </div>
                        <div className="container">
                        </div>
                        <div className='TasksContainer'>
                            {
                                this.state.tasks.length >= 1 ?
                                    this.state.tasks.map((task) => {
                                        return (
                                            <TaskContainerComponent taskData={task} />
                                        )
                                    })
                                    :
                                    <div id="noTasks" className="container">
                                        <p className='pageText ps-5'>Tasks do not exist for this group.</p>
                                    </div>
                            }
                        </div>
                        <div className="task-input">
                            <input type="text" id="tasksInput"
                                onChange={(e) => this.setState({ 'value': e.target.value })}
                            />
                            <span onClick={() => this.createTask()} className="addBtn">Add</span>
                        </div>
                        
                    </form>
                </div>

                <div className="container-fluid mt-3">
                    <button className="bar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
                        <FaBars id="bar"/>
                    </button>
                </div>

               

                {/*<ul id="tasks-list">*/}
                {/*</ul>*/}

                {/*<ul id="remove-li">*/}
                {/*</ul>*/}

                <div id="snackbar">Еnter text in the input field</div>
            </div>
        );
    }
}
