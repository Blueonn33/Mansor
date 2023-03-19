import React, { Component } from 'react'
import { endpoints } from '../../endpoints';
import '../TimeTablesComponent/TimeTablesComponent.css';
import TimeTablesContainer from '../TimeTablesContainer/TimeTablesContainer';

export default class TimeTablesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { timeTabledays: [] }
        this.loadDays = this.loadDays.bind(this);
    }
    async componentDidMount() {
        this.loadDays();
    }

    async loadDays() {
        let url = endpoints.loadDays();
        fetch(url)
            .then((res) => res.json())
            .then((res) => this.setState({ timeTableDays: res }))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div className='timeTablesListWrapper d-flex justify-content-center align-items-center'>
                <div className='timeTablesContainer'>
                    <div className='timeTablesContent'>
                        <div className='timeTablesListHeaderWrapper d-flex'>
                            <h4 className='timeTablesListHeader'>Groups</h4>
                        </div>
                        {/*<div className='createNewTimeTableButtonWrapper'>*/}
                        {/*    <AddtimeTable ontimeTableAdded={this.loadtimeTables} />*/}
                        {/*</div>*/}
                        <div className='timeTablesContainers'>
                            {this.state.timeTableDays.map((timeTableDay) => {
                                return (
                                    <TimeTablesContainer timeTableDayData={timeTableDay} key={timeTableDay.id} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}