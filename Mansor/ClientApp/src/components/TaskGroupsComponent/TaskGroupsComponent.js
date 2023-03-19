import React, { Component } from 'react'
import { endpoints } from '../../endpoints';
import { AddTaskGroup } from '../AddTaskGroup/AddTaskGroup';
import '../TaskGroupsComponent/TaskGroupsComponent.css';
import TaskGroupsContainer from '../TaskGroupsContainer/TaskGroupsContainer';
import { FaBars } from "react-icons/fa";

export default class TaskGroupsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { taskGroups: [] }
        this.loadTaskGroups = this.loadTaskGroups.bind(this);
    }
    async componentDidMount() {
        this.loadTaskGroups();
    }
    async loadTaskGroups() {
        let url = endpoints.loadTaskGroups();
        fetch(url)
            .then((res) => res.json())
            .then((res) => this.setState({ taskGroups: res }))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div className='taskGroupsListWrapper d-flex justify-content-center align-items-center'>
                <div className="offcanvas offcanvas-start" id="offcanvas">
                    <div className="offcanvas-header">
                        <h3 className="offcanvas-title text-white">Martin Marinov</h3>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <hr id="line"></hr>
                    <div className="offcanvas-body text-white">
                        <button className='calendarBtn'>
                            <a href={`https://localhost:44494/calendar`} className='calendarBtnText'>Calendar</a>
                        </button> 
                        <button className='calendarBtn'>
                            <a href={`https://localhost:44494/notes`} className='calendarBtnText'>Notes</a>
                        </button> 
                        <button className='timeTableBtn'>
                            <a href={`https://localhost:44494/timeTable`} className='timeTableBtnText'>Time Table</a>
                        </button> 
                        <hr id="line"></hr>
                    </div>
                   
                </div>
                <div className='taskGroupsContainer'>
                    <div className='taskGroupsContent'>
                        <div className='taskGroupsListHeaderWrapper d-flex'>
                            <h4 className='taskGroupsListHeader'>Groups</h4>
                        </div>
                        <div className="menu-bar">
                            <button className="bar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
                                <FaBars id="bar" />
                            </button>
                        </div>
                        <div className='createNewTaskGroupButtonWrapper'>
                            <AddTaskGroup onTaskGroupAdded={this.loadTaskGroups} />
                        </div>
                        <div className='taskGroupsContainers'>
                            {this.state.taskGroups.map((taskGroup) => {
                                return (
                                    <TaskGroupsContainer taskGroupData={taskGroup} key={taskGroup.id} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}