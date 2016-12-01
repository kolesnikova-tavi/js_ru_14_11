import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {setFilters} from '../AC/filters'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (e, day) => {
        const { filters, setFilters } = this.props;
        const { from=null, to=null } = filters;
        const {from:newFrom, to:newTo} = DateUtils.addDayToRange(day, {from, to})
        setFilters(newFrom, newTo)
    }

    render() {
        const { filters } = this.props;
        const { from=null, to=null } = filters;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, {from, to}) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    filters: state.filters
}), {
    setFilters
})(DateRange)