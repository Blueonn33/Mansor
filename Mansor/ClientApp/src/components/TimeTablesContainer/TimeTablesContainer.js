import React, { Component } from 'react'
import '../TimeTablesContainer/TimeTablesContainer.css';

export default class TimeTablesContainer extends Component {

    render() {
        return (
            <div className='daysContainer d-flex' key={this.props.timeTableDayData.id}>
                <div className='dayNameWrapper'>
                    <span className='dayName pageText'> {this.props.timeTableDayData.name} </span>
                </div>
            </div>
        )
    }
}
