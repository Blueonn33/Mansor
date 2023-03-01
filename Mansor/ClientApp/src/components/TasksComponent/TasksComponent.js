import React, { Component } from 'react'
import { endpoints } from '../../endpoints';
import '../TasksComponent/TasksComponent.css';
import TaskGroupsContainer from '../TaskGroupsContainer/TaskGroupsContainer';
import { AddTaskItem } from '../AddTaskItem/AddTaskItem';

export default class TasksComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            currentTaskGroupName: '',
            taskGroupData: undefined,
            taskGroupHeaderName: '',
            taskItemData: undefined,
            currentTaskItemName: '',
            taskItemHeaderName: '',
        }
        this.loadTaskItems = this.loadTaskItems.bind(this);
    }
    async componentDidMount() {
        this.loadTaskItems();
        this.getTaskGroupName();
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

    async loadTaskItems(taskGroupId){
        let splittedURL = window.location.pathname.split('/')
        taskGroupId = splittedURL[splittedURL.length - 1]
        await fetch(endpoints.loadTaskItems(taskGroupId))
            .then(async (res) => {
                let taskItemData = await res.json()
                this.setState({ 'taskItemData': taskItemData })
                this.setState({ 'currentTaskItemName': taskItemData.name })
                this.setState({ 'taskItemHeaderName': taskItemData.name })
            }
            )
            .then((res) => res.json())
            .then((res) => this.setState({ tasks: res }))
            .catch(error => console.error(error));

        //let taskGroupId = 1; // replace with your desired ID
        //let url = endpoints.loadTaskItems(taskGroupId);
        
        //fetch(url)
        //    .then((res) => res.json())
        //    .then((res) => this.setState({ tasks: res }))
        //    .catch(error => console.error(error));


    }

    render() {
        return (
            <div className='taskItemsListWrapper d-flex justify-content-center align-items-center'>
                <div className='taskItemsContainer'>
                    <div className='taskItemsContent'>
                        <div className='taskItemsListHeaderWrapper d-flex'>
                            <h4 className='taskItemsListHeader'>{this.state.taskGroupHeaderName}</h4>
                        </div>
                        <div className='createNewTaskItemButtonWrapper'>
                            <AddTaskItem onTaskItemAdded={this.loadTaskItems} />
                        </div>
                        <div className='taskItemsContainers'>
                            {this.state.tasks.map((taskItem) => {
                                return (
                                    <TaskGroupsContainer taskItemData={taskItem} key={taskItem.id} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div id="snackbar">Еnter text in the input field</div>
            </div>
        );
    }
}