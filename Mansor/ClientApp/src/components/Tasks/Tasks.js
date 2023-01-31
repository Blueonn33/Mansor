import React, { Component } from 'react';
import '../Tasks/TasksStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import { FaBars } from "react-icons/fa";
import { endpoints } from '../../endpoints';

export class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    static displayName = Tasks.name;

    invalidInput() {
        var msg = document.getElementById("snackbar");
        msg.className = "show";
        setTimeout(function () { msg.className = msg.className.replace("show", ""); }, 3000);
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
   
    createTask() {
        var li = document.createElement("li");
        var input = this.state.value;
        //var inputValue = document.getElementById("myInput").value;

        var t = document.createTextNode(input);
        li.appendChild(t);

        if (input === '') {
            this.invalidInput();
        } else {
            fetch(endpoints.createTask(), {
                method: 'POST',
                mode: 'no-cors',
                credentials: 'include' ,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Value": input,
                    "TaskGroupId": 1
                })
            })
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
                        <button type="button" id="btn-add"
                            onClick={() => this.createTask()}
                        >Add</button>
                    </div>
                    
                </div>

                <div className="container-fluid mt-3">
                    <button className="bar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
                        <FaBars id="bar"/>
                    </button>
                </div>

                <div id="myDIV" className="task-input">
                    <input type="text" id="myInput"
                        onChange={(e) => this.setState({ 'value': e.target.value })}
                    />
                    <span onClick={() => this.createTask()} className="addBtn">Add</span>
                </div>

                <ul id="tasks-list">
                </ul>

                <ul id="remove-li">
                </ul>

                <div id="snackbar">Еnter text in the input field</div>
            </div>
        );
    }
}
