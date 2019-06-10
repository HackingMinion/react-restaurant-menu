import React, { Component } from "react"
import StepsButton from "./steps-button"

export default class ButtonPanel extends Component {
  handleClick = course => {
    this.props.clickHandler(course)
  }

  render() {
    return this.props.courses.map((courseName, key) => {
      return (
        <StepsButton
          key={key}
          course={key}
          courseName={courseName}
          clickHandler={this.handleClick}
        />
      )
    })
  }
}
