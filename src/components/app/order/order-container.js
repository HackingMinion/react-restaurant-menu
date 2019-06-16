import React, { Component } from "react"
import getCourseItems from "../../../utils/courseItem"
import getItemIndex from "../../../utils/itemIndex"
import OrderView from "./order-view"
import OrderSummary from "./order-summary"
import Grid from "@material-ui/core/Grid"

export default class OrderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courseItems: [],
      selectedItems: {}
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(props) {
    if (this.props !== props) {
      this.fetchData()
    }
  }

  fetchData = () => {
    let { selectedItems } = this.state
    const jsonData = require("../../../assets/data/fe-tech-data.json")
    const courseItems = getCourseItems(jsonData, this.props.course)

    if (Object.entries(selectedItems).length === 0) {
      jsonData.map(res => {
        /* Add empty arrays for each course to add items later */
        return (selectedItems[res.courseType[0]] = [])
      })
    }
    this.setState({
      courseItems,
      selectedItems
    })
  }

  handleItems = (id, itemTitle) => {
    let { selectedItems } = this.state
    const { course } = this.props
    const item = { id: id, title: itemTitle }

    if (selectedItems[course].length !== 0) {
      let index = selectedItems[course].findIndex(item => item.id === id)
      let index2 = getItemIndex(selectedItems[course], id)
      console.log(index+" "+index2)
      /* If index is not negative delete the item */
      if (index >= 0) {
        selectedItems[course].splice(index, 1)
        this.setState({
          selectedItems
        })
        return
      }
    }

    selectedItems[course].push(item)

    this.setState({
      selectedItems
    })
  }

  handleNextCourse = () => {
    const { selectedItems } = this.state
    const { course } = this.props
    if (Object.keys(selectedItems).length - 1 !== course) {
      /* Check if at least one item is selected in main couse */
      if (course === 4) {
        if (selectedItems[course].length === 0) {
          alert("Select at least one item from this course.")
          return
        }
      }
      this.props.changeCourse(course + 1)
    } else {
      this.props.summaryHandler()
    }
  }

  handleChangeOrder = () => {
    this.props.changeCourse()
    this.props.summaryHandler()
  }

  render() {
    if (this.props.summary) {
      return (
        <div className="summary-container">
          <OrderSummary selectedItems={this.state.selectedItems} />
          <button className="button default" onClick={this.handleChangeOrder}>
            Change order
          </button>
        </div>
      )
    } else {
      return (
        <div className="order-container">
          <Grid container spacing={3}>
            <OrderView
              {...this.state}
              course={this.props.course}
              itemHandler={this.handleItems}
            />
          </Grid>
          <button className="button default" onClick={this.handleNextCourse}>
            {Object.keys(this.state.selectedItems).length - 1 !==
            this.props.course
              ? "Next course"
              : "Show complete order"}
          </button>
        </div>
      )
    }
  }
}
