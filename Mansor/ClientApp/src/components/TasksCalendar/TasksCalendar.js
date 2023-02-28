import React from 'react';
import CheckBox from 'devextreme-react/check-box';
import SelectBox from 'devextreme-react/select-box';
import DateBox from 'devextreme-react/date-box';
import Calendar from 'devextreme-react/calendar';
import CustomCell, { isWeekend } from './CustomCell.js';
import './TasksCalendar.css';

const zoomLevels = ['month', 'year', 'decade', 'century'];
const weekNumberRules = ['auto', 'firstDay', 'firstFourDays', 'fullWeek'];
const weekDays = [
    { id: 0, text: 'Sunday' },
    { id: 1, text: 'Monday' },
    { id: 2, text: 'Tuesday' },
    { id: 3, text: 'Wednesday' },
    { id: 4, text: 'Thursday' },
    { id: 5, text: 'Friday' },
    { id: 6, text: 'Saturday' },
];

export function TasksCalendar() {
    const [minDateValue, setMinDateValue] = React.useState(null);
    const [maxDateValue, setMaxDateValue] = React.useState(null);
    const [weekendDisabled, setWeekendDisabled] = React.useState(null);
    const [firstDay, setFirstDay] = React.useState(0);
    const [weekNumberRule, setWeekNumberRule] = React.useState('auto');
    const [showWeekNumbers, setShowWeekNumbers] = React.useState(false);
    const [currentValue, setCurrentValue] = React.useState(new Date());
    const [useCellTemplate, setUseCellTemplate] = React.useState(null);
    const [disabled, setDisabled] = React.useState(false);
    const [zoomLevel, setZoomLevel] = React.useState('month');

    const onCurrentValueChange = React.useCallback(({ value }) => {
        setCurrentValue(value);
    }, [setCurrentValue]);

    const onDisabledChange = React.useCallback(({ value }) => {
        setDisabled(value);
    }, [setDisabled]);

    const onZoomLevelChange = React.useCallback(({ value }) => {
        setZoomLevel(value);
    }, [setZoomLevel]);

    const onMinDateChange = React.useCallback(({ value }) => {
        setMinDateValue(
            value ? new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3) : null,
        );
    }, [setMinDateValue]);

    const onMaxDateChange = React.useCallback(({ value }) => {
        setMaxDateValue(
            value ? new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3) : null,
        );
    }, [setMaxDateValue]);

    const onDisableWeekendChange = React.useCallback(({ value }) => {
        setWeekendDisabled(value);
    }, [setWeekendDisabled]);

    const onFirstDayChange = React.useCallback(({ value }) => {
        setFirstDay(value);
    }, [setFirstDay]);

    const onWeekNumberRuleChange = React.useCallback(({ value }) => {
        setWeekNumberRule(value);
    }, [setWeekNumberRule]);

    const onShowWeekNumbersChange = React.useCallback(({ value }) => {
        setShowWeekNumbers(value);
    }, [setShowWeekNumbers]);

    const onUseCellTemplateChange = React.useCallback(({ value }) => {
        setUseCellTemplate(!!value);
    }, [setUseCellTemplate]);

    const isDateDisabled = React.useCallback(({ view, date }) => view === 'month' && isWeekend(date), []);

    const onOptionChange = React.useCallback((e) => {
        if (e.name === 'zoomLevel') {
            onZoomLevelChange(e);
        }
    }, [onZoomLevelChange]);

    return (
        <div id="container">
            <button className='backBtn'>
                <a href={`https://localhost:44494/taskGroups`} className='backBtnText'>Back</a>
            </button> 
            <div className="calendar-container">
                <Calendar
                    value={currentValue}
                    onValueChanged={onCurrentValueChange}
                    onOptionChanged={onOptionChange}
                    min={minDateValue}
                    max={maxDateValue}
                    disabledDates={weekendDisabled ? isDateDisabled : null}
                    firstDayOfWeek={firstDay}
                    weekNumberRule={weekNumberRule}
                    showWeekNumbers={showWeekNumbers}
                    disabled={disabled}
                    zoomLevel={zoomLevel}
                    cellRender={useCellTemplate ? CustomCell : null}
                />
            </div>
            <div className="optionsList">
                <div className="caption">Options</div>
                <div className="options">
                    <CheckBox
                        defaultValue={false}
                        text="Set minimum date"
                        onValueChanged={onMinDateChange}
                    />
                </div>
                <div className="options">
                    <CheckBox
                        defaultValue={false}
                        text="Set maximum date"
                        onValueChanged={onMaxDateChange}
                    />
                </div>
                <div className="options">
                    <CheckBox
                        defaultValue={false}
                        text="Disable weekends"
                        onValueChanged={onDisableWeekendChange}
                    />
                </div>
                <div className="options">
                    <CheckBox
                        defaultValue={false}
                        text="Show week numbers"
                        onValueChanged={onShowWeekNumbersChange}
                    />
                </div>
                <div className="options">
                    <CheckBox
                        defaultValue={false}
                        text="Use custom cell template"
                        onValueChanged={onUseCellTemplateChange}
                    />
                </div>
                <div className="options">
                    <CheckBox
                        value={disabled}
                        text="Disable the calendar"
                        onValueChanged={onDisabledChange}
                    />
                </div>
                <div className="options">
                    <span>First day of week</span>
                    <SelectBox
                        dataSource={weekDays}
                        displayExpr="text"
                        valueExpr="id"
                        value={firstDay}
                        onValueChanged={onFirstDayChange}
                    />
                </div>
                <div className="options">
                    <span>Week number rule</span>
                    <SelectBox
                        dataSource={weekNumberRules}
                        value={weekNumberRule}
                        onValueChanged={onWeekNumberRuleChange}
                    />
                </div>
                <div className="options">
                    <span>Zoom level</span>
                    <SelectBox
                        dataSource={zoomLevels}
                        value={zoomLevel}
                        onValueChanged={onZoomLevelChange}
                    />
                </div>
                <div className="options">
                    <span>Selected date</span>
                    <DateBox
                        id="selected-date"
                        value={currentValue}
                        onValueChanged={onCurrentValueChange}
                        min={minDateValue}
                        max={maxDateValue}
                    />
                </div>
            </div>
        </div>
    );
}
