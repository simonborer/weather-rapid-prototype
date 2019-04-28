import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LocationOn from '@material-ui/icons/LocationOn';
import WbSunny from '@material-ui/icons/WbSunny';
import UnfoldLess from '@material-ui/icons/UnfoldLess';
import Opacity from '@material-ui/icons/Opacity';
import TrendingDown from '@material-ui/icons/TrendingDown';
import TrendingUp from '@material-ui/icons/TrendingUp';
import OutlinedFlag from '@material-ui/icons/OutlinedFlag';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Flag from '@material-ui/icons/Flag';

export default class Posts extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <Paper>
              <Card>
                <CardActionArea>
                  <CardContent>
                  <Grid container spacing={24}>
                  <Grid item xs={2}>
                    <LocationOn />
                    </Grid>
                    <Grid item xs={10}>
                    <Typography gutterBottom variant="h5" component="h2">
                      &nbsp;{this.props.posts.name}
                    </Typography>
                    </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={24}>
                      <Grid item xs={2}>
                        <WbSunny />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography gutterBottom variant="h5" component="h2">Currently&nbsp;{this.props.posts.main.temp}°C
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={24}>
                      <Grid item xs={2}>
                        <UnfoldLess />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {this.props.posts.main.pressure}mBar
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <Paper>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={24}>
                      <Grid item xs={2}>
                        <Opacity />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography gutterBottom variant="h5" component="h2">Humidity&nbsp;{this.props.posts.main.humidity}</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={24}>
                      <Grid item xs={2}>
                        <TrendingDown />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography gutterBottom variant="h5" component="h2">Low&nbsp;{this.props.posts.main.temp_min}°C</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={24}>
                      <Grid item xs={2}>
                        <TrendingUp />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography gutterBottom variant="h5" component="h2">High&nbsp;{this.props.posts.main.temp_max}°C</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <Paper>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={24}>
                      <Grid item xs={2}>
                        <OutlinedFlag />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography gutterBottom variant="h5" component="h2">Wind&nbsp;{this.props.posts.wind.speed}km/h</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={24}>
                      <Grid item xs={2}>
                        <CloudUpload />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography gutterBottom variant="h5" component="h2">Wind direction&nbsp;{this.props.posts.wind.deg}</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={24}>
                      <Grid item xs={2}>
                        <Flag />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography gutterBottom variant="h5" component="h2">Gusts&nbsp;{this.props.posts.wind.gust}km/h</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.object.isRequired
}