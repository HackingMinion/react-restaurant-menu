import React, { Component } from "react"
import OrderButton from "./order-button"

export default class OrderView extends Component {
  handleClick = (id, itemTitle) => {
    this.props.itemHandler(id, itemTitle)
  }

  render() {
    return this.props.data.map(res => (
      <OrderButton
        key={res.id}
        id={res.id}
        itemTitle={res.title}
        itemHandler={this.handleClick}
        className="order"
        selected={this.props.selectedItems.hasOwnProperty(res.id)}
      />
    ))
  }
}
