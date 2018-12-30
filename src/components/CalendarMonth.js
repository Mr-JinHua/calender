import React, { Component } from 'React'
import './CalendarMonth.less'
let monthOlypic=[31,29,31,30,31,30,31,31,30,31,30,31] //闰年每个月份的天数
let monthNormal=[31,28,31,30,31,30,31,31,30,31,30,31] //普通年每个月份的天数
//月份的数组
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

//获取当天的 年 月 日
var myDate = new Date()
var myYear = myDate.getFullYear() //获取年份
var myMonth = myDate.getMonth() //获取月份，一月份的下标为0
var myDay = myDate.getDate() //获取当前日期
//根据年月获取当月第一天是周几
function dayStart(month,year) {
  var tmpDate = new Date(year, month-1, 1)
  return tmpDate.getDay()
}
//根据 年月天 获取当天是周几
function dayJud(day, month, year) {
  var tmpDate = new Date(year, month-1, day)
  return tmpDate.getDay()
}
//根据年份判断某月有多少天(11,2018),表示2018年12月
function daysMonth(month, year) {
  var tmp1 = year % 4
  var tmp2 = year % 100
  var tmp3 = year % 400
  if((tmp1 == 0 && tmp2 != 0) || (tmp3 == 0)) {
    return (monthOlypic[month-1]) //闰年
  } else {
    return (monthNormal[month-1]) //非闰年
  }
}
export default class CalendarMonth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectCellNum: 0
    }
    this.refreshDate = this.refreshDate.bind(this)
    this.cellClick = this.cellClick.bind(this)
  }
  cellClick(num) {
    this.state.selectCellNum = num
    this.setState(this.state)
  }
  refreshDate(years = 2018, months = 9) {
    let cellLi = []
    let totalDay = daysMonth(months, years)
    let firstDay = dayStart(months, years)
    for(let i = 0; i < firstDay; i++) {
      cellLi.push(<li/>)
    }
    for(let i = 1; i <= totalDay; i++) {
      let weekCell = dayJud(i, months, years)
      cellLi.push(<li onClick={() => {
        this.cellClick(i)
      }} className={( weekCell == 0 ) || ( weekCell == 6 ) ? 'weekStyle' : (this.state.selectCellNum == i ? 'selectCellstyle' : 'selectCellCommon')}>{i}</li>)
    }
    return cellLi
  }
  render() {
    return (
      <div className="calendar-cell">
        <div className="body-header">
          <span>{months[this.props.months-1]}</span>
          <span>{this.props.years}年{this.props.months}月</span>
        </div>
        <div className="body">
            <div className="body-list">
                <ul className="calendarHeader">
                  <li>SUN</li>
                  <li>MON</li>
                  <li>TUR</li>
                  <li>WED</li>
                  <li>THU</li>
                  <li>FRI</li>
                  <li>SAT</li>
                </ul>
            </div>
            <div className="body-list">
              <ul id="days">
                {this.refreshDate(this.props.years, this.props.months)}
              </ul>
            </div>
        </div>
      </div>
    )
  }
}
