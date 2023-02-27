import React, { Component } from 'react';
import { endpoints } from '../../endpoints';
import './AddTaskItem.css';

export class AddTaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        this.createItem = this.createItem.bind(this);
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

    async createItem(taskGroupId) {
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
                //headers: {
                //    'Content-Type': 'application/json',
                //},
                //body: JSON.stringify({
                //})
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="container">
                        <input type="text" id="input-item"/>
                        <span className="addBtn" onClick={() => this.createItem()}>Add</span>
                    </div>
                </div>
                <div id="snackbar">Еnter text in the input field</div>
            </div>
        );
    }
}
