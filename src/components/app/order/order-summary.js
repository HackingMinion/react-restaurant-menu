import React, { Component } from "react"
import { getCourseName } from "../../../utils/courseName"
import OrderSummaryView from "./order-summary-view"

export default class OrderSummary extends Component {
  render() {
    const { selectedItems } = this.props
    return Object.keys(selectedItems).map(item => {
      if (selectedItems[item].length !== 0) {
        let items = []
        for (let i = 0; i < selectedItems[item].length; i++) {
          items.push(selectedItems[item][i])
        }
        return (
          <OrderSummaryView
            courseTitle={getCourseName(item)}
            courseItems={items}
          />
        )
      }
    })
  }
}
