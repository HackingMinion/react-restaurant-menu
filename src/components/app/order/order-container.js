import React, { Component } from "react"

export default class OrderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCourse: 0,
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: require("../../../assets/data/fe-tech-data.json")
    }, () => this.handleGetCourseItems())
  }

  getItems = () => {
    const data = this.state.data
    let items = data.filter(res => {
      return res.courseType.includes(2) 
    })
    console.log(items)
    this.setState({
      data: items
    })
  }

  handleGetCourseItems = (courseNumber = 0) => {
    this.setState({
        currentCourse: courseNumber
      }, () => this.getItems()
    )
  }

  render() {
    const data = this.state.data
    return (
      <div className="container">
        <h1 className="title">Restaurant Menu</h1>
        <div>
          {data.map(res => (
            <p>
              {res.id} {res.title}
            </p>
          ))}
        </div>
      </div>
    )
  }
}
