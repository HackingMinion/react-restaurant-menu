import React, { Component } from "react"
import { getAllCourseNames } from "../../../utils/courseName"
import ButtonPanel from "./steps-button-panel"

export default class StepsContainer extends Component {
  handleClick = course => {
    if (this.props.course > course) {
      this.props.changeCourse(course)
    }
  }

  render() {
    return (
      <div className={`steps-container ${this.props.summary ? "-hide" : ""}`}>
        <ButtonPanel
          courses={getAllCourseNames()}
          clickHandler={this.handleClick}
          activeCourse={this.props.course}
        />
      </div>
    )
  }
}
