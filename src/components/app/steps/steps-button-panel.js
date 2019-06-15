import React, { Component } from "react"
import StepsButton from "./steps-button"

export default class ButtonPanel extends Component {
  handleClick = course => {
    this.props.clickHandler(course)
  }

  render() {
    return this.props.courses.map((courseName, course) => (
      <StepsButton
        key={course}
        course={course}
        courseName={courseName}
        clickHandler={this.handleClick}
        className="steps"
        active={this.props.activeCourse === course}
        disabled={(this.props.activeCourse < course)}
      />
    ))
  }
}
