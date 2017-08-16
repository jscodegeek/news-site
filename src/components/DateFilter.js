import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import moment from 'moment'

import 'react-day-picker/lib/style.css'

class DateFilter extends Component {
  state = {
    selectedDay: new Date()
  }

  render() {
    return (
      <div>
        <input type='text' value={this.getFormatDate()} readOnly/>
        <DayPicker onDayClick={this.handleDayClick}/> 
      </div>
    )
  }

  handleDayClick = (day) => {
    this.setState({
      selectedDay: day
    })
  }

  getFormatDate = () => {
    return moment(this.state.selectedDay).format('LL');
  }
}

export default DateFilter