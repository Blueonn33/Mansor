import React, { Component } from 'react'
import './Styles/TaskContainerStyles.css'

export default class taskContainerComponent extends Component {

    render() {
        return (
            <div className='MyTaskContainer d-flex' key={this.props.taskData?.id}>
                <div className='TaskNameWrapper'>
                    <span className='TaskName pageText'> {this.props.taskData?.name} </span>
                </div>
                <div className='ManageTaskButtonWrapper ml-auto'>
                    <button className='btn btn-link pe-4 pt-0 pb-2'>
                        <a href={`https://localhost:44494/Todo`} className='link_blue'>Use</a>
                    </button>

                    <button className='ManageButton'>
                        <a href={`https://localhost:44494/Todo`} className='ManageButtonText'>Manage</a>
                    </button>
                </div>
            </div>
        )
    }
}