import React, { Component } from 'react'
import { endpoints } from '../../endpoints';
import { AddTaskGroup } from '../AddTaskGroup/AddTaskGroup';
import '../TaskGroupsComponent/TaskGroupsComponent.css';
import TaskGroupsContainer from '../TaskGroupsContainer/TaskGroupsContainer';

export default class TaskGroupsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { taskGroups: [] }
        this.loadTaskGroups = this.loadTaskGroups.bind(this);
    }
    async componentDidMount() {
        this.loadTaskGroups();
    }
    //async loadTaskGroups() {
    //    let url = endpoints.loadTaskGroups();

    //    fetch(url)
    //        .then(response => response.json())
            //.then(data => {
            //    data.forEach(record => {
            //        console.log(record.name);
            //        const container = document.getElementsByClassName('taskGroupsContainers')[0];
            //        container.innerHTML += `<p class="groupElements">${record.name}</p>`;
            //        container.innerHTML += '<button class="btn-groups"></button>';

            //        //container.forEach(this.addButton)
            //    });
            //})
    //        .catch(error => console.error(error));
    //}

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
                <div className='taskGroupsContainer'>
                    <div className='taskGroupsContent'>
                        <div className='taskGroupsListHeaderWrapper d-flex'>
                            <h4 className='taskGroupsListHeader'>Groups</h4>
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
                    {/*<button className="btn-groups"></button>*/}
                </div>
            </div>
        );
    }
}