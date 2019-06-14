import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

export default class OrderItem extends Component {
  handleClick = () => {
    this.props.itemHandler(this.props.id, this.props.itemTitle)
  }

  render() {
    return (
      <Card className={`${this.props.className} ${this.props.selected ? "-selected" : ""}`}>
        <CardActionArea onClick={this.handleClick}>
          <CardMedia
            component="img"
            alt={this.props.itemTitle}
            height="140"
            image={this.props.itemImage}
            title={this.props.itemTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2" className="item-title">
              {this.props.itemTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className="item-desc">
              {this.props.itemDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}
