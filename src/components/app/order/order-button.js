import React, { Component } from "react"

export default class OrderButton extends Component {
  handleClick = () => {
    this.props.itemHandler(this.props.id, this.props.itemTitle)
  }

  render() {
    return (
      <button className={`${this.props.className} ${this.props.selected ? "-selected" : ""}`} onClick={this.handleClick}>
        {this.props.itemTitle}
      </button>
    )
  }
}
