import React, { Component } from 'react'
import { endpoints } from '../../endpoints';
import '../TasksContainer/TaskContainer.css';

export default class TasksContainer extends Component {

    //async completeTaskItem(taskItemId) {
    //    console.log(this.state.value);
    //    var input = this.state.value;

    //    if (input === '') {
    //        this.invalidInput();
    //    }
    //    else {
    //        await fetch(endpoints.completeTaskItem(), {
    //            method: 'POST',
    //            headers: {
    //                'Content-type': 'application/json',
    //            },
    //            body: JSON.stringify({
    //                value: input,
    //                taskGroupId: taskGroupId,
    //            })
    //        })
    //            .then((response) => {
    //                if (!response.ok) {
    //                    console.log("invalid input")

    //                }
    //                else {
    //                    this.props.onTaskItemAdded(this.props.value);
    //                }
    //            })
    //            .catch(error => {
    //                console.error(error);
    //            });
    //    }
    //}

    completeTaskItem = async (taskItemId) => {
        await fetch(endpoints.completeTaskItem(taskItemId), {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                isCompleted: true
            })
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        //window.location.reload()
    }

    render() {
        return (
            <div className='taskItemsContainer d-flex' key={this.props.taskItemData.id}>
                <div className='taskItemNameWrapper'>
                    <span className='taskItemName pageText'> {this.props.taskItemData.value} </span>
                </div>
                <div className='useTaskItemButtonWrapper ml-auto'>
                    <button className='useButton' onClick={() => this.completeTaskItem(this.props.taskItemData.id)}>
                    </button>
                </div>
            </div>
        )
    }
}
