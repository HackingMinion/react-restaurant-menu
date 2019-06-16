import React, { Component } from "react"
import OrderItem from "./order-item"
import Grid from "@material-ui/core/Grid"
import getItemIndex from "../../../utils/itemIndex"

export default class OrderView extends Component {
  handleClick = (id, itemTitle) => {
    this.props.itemHandler(id, itemTitle)
  }

  render() {
    return this.props.courseItems.map(res => (
      <Grid item xs={4} key={res.id}>
        <OrderItem
          id={res.id}
          itemTitle={res.title}
          itemSpiceLevel={res.spiceLevel}
          itemAllergy={res.allery}
          itemDescription={res.description}
          itemImage={res.image}
          itemHandler={this.handleClick}
          className="order-item"
          selected={
            getItemIndex(this.props.selectedItems[this.props.course], res.id) >= 0
          }
        />
      </Grid>
    ))
  }
}
