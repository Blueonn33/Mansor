﻿import React, { Component } from 'react'
import '../TaskGroupsContainer/TaskGroupsContainer.css';

export default class TaskGroupsContainer extends Component {

    render() {
        return (
            <div className='taskGroupsContainer d-flex' key={this.props.taskGroupData.id}>
                <div className='taskGroupsContainer'>
                    <span className='taskGroupName'> {this.props.taskGroupData.name} </span>
                </div>
                <div className='manageTaskGroupButtonWrapper ml-auto'>
                    <button className='manageButton'>
                        <a href="ToDo" className='manageButtonText'>Manage</a>
                    </button>
                </div>
            </div>
        )
    }
}
