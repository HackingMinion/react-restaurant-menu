import React, { Component } from "react"

export default class StepsButton extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.course)
  }

  render() {
    return (
      <button className={`button ${this.props.className} ${this.props.active ? '-active' : ""} ${this.props.disabled ? '-disabled' : ""}`} onClick={this.handleClick}>
        {this.props.courseName}
      </button>
    )
  }
}
