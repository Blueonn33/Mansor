import React, { Component } from 'react'
import './TaskContainerStyles.css'

export default class TaskContainerComponent extends Component {

    render() {
        return (
            <div className='TaskContainerIndividual d-flex' key={this.props.taskData.id}>
                <div className='TaskNameWrapper'>
                    <span className='TaskName pageText'> {this.props.taskData.name} </span>
                </div>
                <div className='TaskButtonsWrapper'>
                    <div className='UseTaskButtonWrapper ml-auto'>
                        <button className='UseButton btn'>
                            <a href='' className='UseButtonText btn-text'>Use</a>
                        </button>
                    </div>
                    <div className='ManageTaskButtonWrapper btn-wrapper ml-auto'>
                        <button className='ManageButton btn'>
                            <a href='' className='ManageButtonText btn-text'>
                                Manage
                            </a>
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}