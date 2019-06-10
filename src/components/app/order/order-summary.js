import React, { Component } from "react"

export default class OrderSummary extends Component {
  render() {
    const { selectedItems } = this.props
    return Object.keys(selectedItems).map(item => <p>{selectedItems[item]}</p>)
  }
}
