import React, { Component } from "react"
import getCourseName from "../../../utils/courseName"

export default class StepsContainer extends Component {
  handleCLick = course => {
    console.log("steps: " + course)
    if (this.props.course > course) {
      this.props.changeCourse(course)
    }
  }

  render() {
    return (
      <div className="steps-container">
        <button className="steps-button-0" onClick={() => this.handleCLick(0)}>
          {getCourseName(0)}
        </button>
        <button className="steps-button-1" onClick={() => this.handleCLick(1)}>
          {getCourseName(1)}
        </button>
        <button className="steps-button-2" onClick={() => this.handleCLick(2)}>
          {getCourseName(2)}
        </button>
        <button className="steps-button-3" onClick={() => this.handleCLick(3)}>
          {getCourseName(3)}
        </button>
        <button className="steps-button-4" onClick={() => this.handleCLick(4)}>
          {getCourseName(4)}
        </button>
        <button className="steps-button-5" onClick={() => this.handleCLick(5)}>
          {getCourseName(5)}
        </button>
      </div>
    )
  }
}
