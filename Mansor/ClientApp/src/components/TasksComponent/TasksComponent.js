import React, { Component } from 'react';
import { endpoints } from '../../endpoints';
import TaskContainerComponent from './TaskContainerComponent';
import './Styles/TasksStyles.css';

export default class TasksComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { tasks: [] }
        this.loadTasks = this.loadTasks.bind(this);
        let splittedURL = window.location.pathname.split('/');
        this.taskGroupId = splittedURL[splittedURL.length - 1];
    }
    async componentDidMount() {
        this.loadTasks();
    }
    async loadTasks(taskGroupId) {
        let splittedURL = window.location.pathname.split('/')
        taskGroupId = splittedURL[splittedURL.length - 1]
        await fetch(endpoints.loadTasks(taskGroupId))
            .then((res) => res.json())
            .then((res) => this.setState({ tasks: res }))
    }
    render() {
        return (
            <div className='TasksListWrapper d-flex justify-content-center align-items-center' >
                <form className='TasksContainer'>
                    <div className='TasksListHeaderWrapper d-flex'>
                        <h4 className='TasksListHeader'>Daily</h4>
                    </div>
                    <div className="container">
                        <a className=" link_orange ps-5" data-bs-toggle="" href={`https://localhost:44494/create/${this.taskGroupId}`}>
                            CreateNewTask()
                        </a>
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
                                <div className="container">
                                    <p className='pageText ps-5'>Tasks do not exist for this group.</p>
                                </div>
                        }
                    </div>
                </form>
            </div>);
    }
}

