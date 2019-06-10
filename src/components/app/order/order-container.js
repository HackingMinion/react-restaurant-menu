import React, { Component } from "react"
import getCourseItems from "../../../utils/courseItem"
import OrderView from "./order-view"
import OrderSummary from "./order-summary"

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
    const data = require("../../../assets/data/fe-tech-data.json")
    this.setState({
      data: getCourseItems(data, this.props.course)
    })
  }

  handleItems = (id, itemTitle) => {
    let { selectedItems } = this.state
    selectedItems.hasOwnProperty(id)
      ? delete selectedItems[id]
      : (selectedItems[id] = itemTitle)
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
          <OrderView {...this.state} itemHandler={this.handleItems} />
        </div>
      )
    }
  }
}
