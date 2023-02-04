import React, { Component } from 'react';
import './AddTaskGroupStyles.css';
import { endpoints } from "../../endpoints";

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
    createTaskGroup = (event) => {
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
            fetch(endpoints.createTaskGroup(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Name": input,
                    "UserId": 1
                })
            })
                .then((response) => {
                    if (response.status == 400) {
                        this.setState({ errorMessage: errors.existingTaskGroup });
                        this.setState({ textColor: color.error });
                    }
                    else {
                        this.setState({ errorMessage: errors.success });
                        this.setState({ textColor: color.success });
                        //this.props.onTaskGroupAdded(this.props.value);
                    }
                })
        }
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    componentDidMount() {
        this.render();
    }
    clear() {
        this.setState({ 'value': '' });
        this.setState({ errorMessage: '' });
        this.setState({ textColor: 'gray' })
    }
    render() {
        return (
            <div className="container">
                <div className="container" id="modal">
                    <button type="button" id="createTaskGroup" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#addTaskModal">
                        Groups
                    </button>
                </div>
                <div className="modal fade" id="addTaskModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
                                <div className="title">
                                    <h4 className="modal-title" id="title">Add TaskGroup</h4>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div id="myForm">
                                    <form onSubmit={this.createTaskGroup}>
                                        <label htmlFor="TaskGroupName" id="label-text">Name:</label>
                                        <input type="text" name="TaskGroupName" className="form-control" id="name"
                                            onChange={(e) => this.setState({ 'value': e.target.value })}
                                            style={{ borderBottomColor: this.state.textColor }}
                                            className={this.state.valid == false ? "form-control name name-error" : "form-control name"}
                                        />
                                        <div className="modal-footer border-0">
                                            <div id="errorTaskGroup">
                                                <p style={{ color: this.state.textColor }}>{this.state.errorMessage}</p>
                                            </div>
                                            <button type="reset" id="close" className="btn btn-link" data-bs-dismiss="modal"
                                                onClick={() => this.clear()} >Clear
                                            </button>
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
