import React,{ Component } from 'React'

import CalendarMonth from './CalendarMonth.js'

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: 2016
    }
  }
  render() {
    return (
      <div style={{width: 300}}>
        <CalendarMonth {...{years: 2018, months: 9}}/>
      </div>
    )
  }
}