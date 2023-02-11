import React, { Component } from 'react'
import { endpoints } from '../../endpoints';
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
        await fetch(endpoints.loadTaskGroups())
            .then((res) => res.json())
            .then((res) => this.setState({ taskGroups: res }))
    }
    render() {
        return (
            <div className='taskGroupsListWrapper d-flex justify-content-center align-items-center'>
                <h1>Groups </h1>
                <div className='taskGroupsContainer'>
                    <div className='taskGroupsContent'>
                        <div className='taskGroupsListHeaderWrapper d-flex'>
                            <h4 className='taskGroupsListHeader'>Groups</h4>
                        </div>
                        {/*<div className='CreateNewTenantButtonWrapper'>*/}
                        {/*    <AddTenant onTenantAdded={this.loadTenants} />*/}
                        {/*</div>*/}
                        <div className='taskGroupsContainer'>
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