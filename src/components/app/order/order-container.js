import React, { Component } from "react"
import getCourseItems from "../../../utils/courseItem"

export default class OrderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(props) {
    if (this.props !== props) {
      this.fetchData()
    }
  }

  fetchData = () => {
    const data = require("../../../assets/data/fe-tech-data.json")
    this.setState({
      data: getCourseItems(data, this.props.course)
    })
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
