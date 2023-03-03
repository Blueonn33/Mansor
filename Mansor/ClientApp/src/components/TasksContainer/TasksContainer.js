import React, { Component } from 'react'
import '../TasksContainer/TaskContainer.css';

export default class TasksContainer extends Component {

    render() {
        return (
            <div className='taskItemsContainer d-flex' key={this.props.taskItemData.id}>
                <div className='taskItemNameWrapper'>
                    <span className='taskItemName pageText'> {this.props.taskItemData.name} </span>
                </div>
                <div className='useTaskItemButtonWrapper ml-auto'>
                    <button className='useButton'>
                        {/* <a href={`https://localhost:44494/taskItems/${this.props.taskItemData.id}`} className='useButtonText'>Use</a>*/}
                        <a href={`https://localhost:44494/taskItems`} className='useButtonText'>Use</a>
                    </button>
                </div>
            </div>
        )
    }
}
