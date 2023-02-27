import React, { Component } from 'react'
import '../TaskGroupsContainer/TaskGroupsContainer.css';

export default class TaskGroupsContainer extends Component {

    render() {
        return (
            <div className='taskGroupsContainer d-flex' key={this.props.taskGroupData.id}>
                <div className='taskGroupNameWrapper'>
                    <span className='taskGroupName pageText'> {this.props.taskGroupData.name} </span>
                </div>
                <div className='useTaskGroupButtonWrapper ml-auto'>
                    <button className='useButton'>
                        <a href={`https://localhost:44494/taskGroups/${this.props.taskGroupData.id}`} className='useButtonText'>Use</a>
                    </button>
                </div>
            </div>
        )
    }
}
