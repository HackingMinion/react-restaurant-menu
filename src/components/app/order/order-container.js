import React, { Component } from "react"
import getCourseItems from "../../../utils/courseItem"
import OrderView from "./order-view"
import OrderSummary from "./order-summary"
import Grid from "@material-ui/core/Grid"

export default class OrderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
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
    const item = { id: id, title: itemTitle }
    if (selectedItems[this.props.course].length !== 0) {
      let index = selectedItems[this.props.course].findIndex(
        item => item.id === id
      )
      console.log(index)
      if (index >= 0) {
        selectedItems[this.props.course].splice(index, 1)
      } else {
        selectedItems[this.props.course].push(item)
      }
    } else {
      selectedItems[this.props.course].push(item)
    }
    this.setState({
      selectedItems
    })
  }

  render() {
    if (this.state.data.length === 0) {
      return (
        <div className="order-container">
          <OrderSummary selectedItems={this.state.selectedItems} />
        </div>
      )
    } else {
      return (
        <div className="order-container">
          <Grid container spacing={3}>
            <OrderView {...this.state} itemHandler={this.handleItems} />
          </Grid>
        </div>
      )
    }
  }
}
