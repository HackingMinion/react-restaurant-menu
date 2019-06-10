import React, { Component } from "react"
import Order from "./order"

import "./app.scss"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: 4
    }
  }

  handleCourse = (course = 0) => {
    this.setState({ course: course })
    console.log("app: " + course)
  }

  render() {
    const course = this.state.course
    return (
      <main className="app">
        <Order
          course={course}
          changeCourse={this.handleCourse}
        />
      </main>
    )
  }
}
