import React, { Component } from "react"
import OrderButton from "./order-button"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

export default class OrderView extends Component {
  handleClick = (id, itemTitle) => {
    this.props.itemHandler(id, itemTitle)
  }

  render() {
    return this.props.data.map(res => (
      <Grid item xs={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={res.title}
              height="140"
              image={res.image}
              title={res.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {res.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {res.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))
  }
}
