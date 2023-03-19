import React, { Component } from 'react';
import { endpoints } from '../../endpoints';
import './AddTaskItem.css';

export class AddTaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            taskGroupId: '',
            isCompleted: ''
        }
        this.createTaskItem = this.createTaskItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    invalidInput() {
        var msg = document.getElementById("snackbar");
        msg.className = "show";
        setTimeout(function () { msg.className = msg.className.replace("show", ""); }, 3000);
    }

    componentDidMount() {
        this.render();
    }

    async createTaskItem(taskGroupId) {
        console.log(this.state.value);
        var input = this.state.value;

        if (input === '') {
            this.invalidInput();
        }
        else {
            let splittedURL = window.location.pathname.split('/')
            taskGroupId = splittedURL[splittedURL.length - 1]
            await fetch(endpoints.createTaskItem(taskGroupId), {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    value: input,
                    taskGroupId: taskGroupId,
                    isCompleted: false
                })
            })
                .then((response) => {
                    if (!response.ok) {
                        console.log("invalid input")
               
                    }
                    else {
                        this.props.onTaskItemAdded(this.props.value);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="container">
                        <input type="text" id="input-item"
                            onChange={(e) => this.setState({ 'value': e.target.value })}
                        />
                        <span className="addBtn" onClick={this.createTaskItem}>Add</span>
                    </div>
                </div>
                <div id="snackbar">Еnter text in the input field</div>
            </div>
        );
    }
}
