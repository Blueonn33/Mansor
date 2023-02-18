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
    async loadTaskGroups() {
        let url = endpoints.loadTaskGroups();

        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(record => {
                    console.log(record.name);
                    document.getElementsByClassName('taskGroupsContainers')[0].innerHTML += `<p class="groupElements">${record.name}</p>`;
                });
            })
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
                            {/*onTaskGroupAdded={this.loadTaskGroups}*/}
                            <AddTaskGroup />
                        </div>
                        <div className='taskGroupsContainers'>
                            {/*{this.state.taskGroups.map((taskGroup) => {*/}
                            {/*    return (*/}
                            {/*        <TaskGroupsContainer taskGroupData={taskGroup} key={taskGroup.id} />*/}
                            {/*    )*/}
                            {/*})}*/}
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}