import React, { Component } from 'react';
import '../Tasks/TasksStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import { FaBars } from "react-icons/fa";
import { endpoints } from '../../endpoints';

export class Tasks extends Component {
    static displayName = Tasks.name;

    constructor() {
        super()
        this.state = {
            currentTaskGroupName: '',
            taskGroupData: undefined,
            taskGroupHeaderName: '',
            task: ''
        }
        this.createTask = this.createTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    invalidInput() {
        var msg = document.getElementById("snackbar");
        msg.className = "show";
        setTimeout(function () { msg.className = msg.className.replace("show", ""); }, 3000);
    }

    getTaskGroupName = async (taskGroupId) => {
        let splittedURL = window.location.pathname.split('/')
        taskGroupId = splittedURL[splittedURL.length - 1]
        await fetch(endpoints.getTaskGroupName(taskGroupId))
            .then(async (res) => {
                let taskGroupData = await res.json()
                this.setState({ 'taskGroupData': taskGroupData })
                this.setState({ 'currentTaskGroupName': taskGroupData.name })
                this.setState({ 'taskGroupHeaderName': taskGroupData.name })
              }
            )
    }

    async createTask(event) {
        event.preventDefault();
        console.log(this.state.task);
        var input = this.state.task;

        if (input === '') {
            this.invalidInput();
        }
        else {
            await fetch(endpoints.createTask(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    //"Name": name,
                    //"Label": record,
                    //"TenantId": tenantId
                })
            })
                .then((response) => {
                    if (response.status == 400) {
                        //this.setState({ errorMessage: errors.existingTracker });
                        //this.setState({ textColor: color.error });
                    }
                    else {
                        //this.setState({ errorMessage: errors.success });
                        //this.setState({ textColor: color.success });
                    }

                });
        }

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    componentDidMount = () => {
        this.getTaskGroupName()
    } 

    useElements = () => {
        //var myNodelist = document.getElementsByTagName("LI");
        //for (var i = 0; i < myNodelist.length; i++) {
        //    var span = document.createElement("SPAN");
        //    var txt = document.createTextNode("\u00D7");
        //    span.className = "close";
        //    span.appendChild(txt);
        //    myNodelist[i].appendChild(span);
        //}

        // Click on a close button to hide the current list item
        //var close = document.getElementsByClassName("close");
        //for (var i = 0; i < close.length; i++) {
        //    close[i].onClick = function () {
        //        var div = this.parentElement;
        //        div.style.display = "none";
        //    }
        //}

        // Add a "checked" symbol when clicking on a list item
        //var list = document.querySelector('ul');
        //list.addEventListener('onClick', function (ev) {
        //    if (ev.target.tagName === 'LI') {
        //        ev.target.classList.toggle('checked');
        //    }
        //}, false);
    }
   
    newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            this.invalidInput();
        } else {
          
            document.getElementById("tasks-list").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        var closebtns = document.getElementsByClassName("close");

        for (var i = 0; i < closebtns.length; i++) {
            closebtns[i].addEventListener("click", function () {
                this.parentElement.style.display = 'none';
            });
        }
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
                        <p>Daily</p>
                        <p>Important</p>
                        <p>Tasks</p>
                        <hr id="line"></hr>
                        <p>Homework</p>
                        <p>MentorMate</p>
                        <button type="button" id="btn-add">Add</button>
                    </div>
                    
                </div>
                <h4 className='groupName'>{this.state.taskGroupHeaderName}</h4>
                <div className="container-fluid mt-3">
                    <button className="bar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
                        <FaBars id="bar"/>
                    </button>
                </div>

                <div id="myDIV" className="task-input">
                    <input type="text" id="myInput" />
                    <span onClick={() => this.newElement()} className="addBtn">Add</span>
                </div>

                <ul id="tasks-list">
                </ul>

                <ul id="remove-li">
                </ul>

                {/*<button type="button" className="removeLi">X</button>*/}
                <div id="snackbar">Еnter text in the input field</div>
            </div>
        );
    }
}
