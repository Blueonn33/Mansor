import React, { Component } from 'react';
import './AddTaskGroup.css';
import { endpoints } from "../../endpoints";
import { Link } from "react-router-dom";

export class AddTaskGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            errorMessage: '',
            textColor: '',
        }
        this.createTaskGroup = this.createTaskGroup.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    async createTaskGroup(event){
        event.preventDefault();
        console.log(this.state.value);
        var input = this.state.value;

        const errors = {
            success: "Successfully added a new group.",
            minLength: "Name must be at least 3 characters.",
            maxLength: "Name must be less than 100 characters.",
            existingTaskGroup: "This group is already existing."
        }
        const color = {
            error: "red",
            success: "green"
        }
        if (input.length < 3) {

            this.setState({ errorMessage: errors.minLength });
            this.setState({ textColor: color.error });
        }
        else if (input.length > 100) {
            this.setState({ errorMessage: errors.maxLength });
            this.setState({ textColor: color.error });
        }
        else {
            await fetch(endpoints.createTaskGroup(), {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    "name": input,
                    "userId": 1
                })
            })
                .then((response) => {
                    if (!response.ok) {
                        this.setState({ errorMessage: errors.existingTaskGroup });
                        this.setState({ textColor: color.error });
                    }
                    else {
                        this.setState({ errorMessage: errors.success });
                        this.setState({ textColor: color.success });
                        this.props.onTaskGroupAdded(this.props.value);
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
        this.setState({ 'value': '' });
        this.setState({ errorMessage: '' });
        this.setState({ textColor: 'gray' })
    }
    render() {
        return (
            <div className="container">
                <div className="container" id="modal">
                    <button type="button" id="createTaskGroup" data-bs-toggle="modal" data-bs-target="#addTaskGroupModal">
                        Add
                    </button>
                </div>
                <div className="modal fade" id="addTaskGroupModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
                                <div className="title">
                                    <h4 className="modal-title" id="title">New Group</h4>
                                    <hr id="line"></hr>
                                </div>

                            </div>
                            <div className="modal-body">
                                <div id="myForm">
                                    <form onSubmit={this.createTaskGroup}>
                                        <label htmlFor="taskGroupNameField" id="label-text">Name:</label>
                                        <input type="text" name="taskGroupNameField" className="form-control" id="name"
                                            onChange={(e) => this.setState({ 'value': e.target.value })}
                                            style={{ borderBottomColor: this.state.textColor }}
                                        />
                                        <div className="modal-footer border-0">
                                            <div id="errorTaskGroup">
                                                <p style={{ color: this.state.textColor}}>
                                                    {this.state.errorMessage}</p>
                                            </div>
                                            <Link to='/taskGroups' id='close' onClick={() => { this.this.close() }}>Cancel</Link>
                                            <button type="submit" id="submit" method="post" className="btn" name="addTaskGroup">Add</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}