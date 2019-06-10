import React, { Component } from "react"
import Order from "./order"
import Steps from "./steps"

import "./app.scss"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: 0
    }
  }

  handleCourse = (course = 0) => {
    this.setState({ course: course })
    console.log("app: " + course)
  }

  render() {
    return (
      <main className="app">
        <h1 className="title">Restaurant Menu</h1>
        <Steps {...this.state} changeCourse={this.handleCourse} />
        <Order {...this.state} changeCourse={this.handleCourse} />
        <button className="next" onClick={() => this.handleCourse(this.state.course + 1)}>
          Next
        </button>
      </main>
    )
  }
}
