import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    selectCoordinates,
    fetchPostsIfNeeded,
    invalidateCoords
} from '../actions'
import Posts from '../components/Posts'
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../App.css';

class AsyncApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: null,
            lng: null,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
                navigator.geolocation.getCurrentPosition(position => {
            this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
            const { dispatch, selectedCoords } = this.props
            const latLng = this.state
            dispatch(invalidateCoords(selectedCoords))
            dispatch(fetchPostsIfNeeded(selectedCoords, latLng))
        }, err => { console.log(err) });
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedCoords !== prevProps.selectedCoords) {
            const { dispatch, selectedCoords } = this.props
            dispatch(fetchPostsIfNeeded(selectedCoords))
        }
    }

    handleChange(nextCoords) {
        this.props.dispatch(selectCoordinates(nextCoords))
        this.props.dispatch(fetchPostsIfNeeded(nextCoords))
    }

    handleRefreshClick(e) {
        e.preventDefault()

        navigator.geolocation.getCurrentPosition(position => {
            this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
            const { dispatch, selectedCoords } = this.props
            const latLng = this.state
            dispatch(invalidateCoords(selectedCoords))
            dispatch(fetchPostsIfNeeded(selectedCoords, latLng))
        }, err => { console.log(err) });
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
            const { dispatch, selectedCoords } = this.props
            const latLng = this.state
            dispatch(invalidateCoords(selectedCoords))
            dispatch(fetchPostsIfNeeded(selectedCoords, latLng))
        }, err => { console.log(err) });
    }

    render() {
        const { posts, isFetching, lastUpdated } = this.props
        return (
            <main className="main">
                <h1>CBC weather checker prototype</h1>
                <Paper className="info-table">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Latitude:</TableCell>
                                <TableCell>{isFetching && Object.keys(posts).length === 0 && <span>Loading...</span>}
                                    {!isFetching && Object.keys(posts).length === 0 && <span>N/A</span>}
                                    {Object.keys(posts).length > 0 && (
                                      <span style={{ opacity: isFetching ? 0.5 : 1 }}>
                                        {this.state.lat}
                                      </span>
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Longitude:</TableCell>
                                <TableCell>{isFetching && Object.keys(posts).length === 0 && <span>Loading...</span>}
                                    {!isFetching && Object.keys(posts).length === 0 && <span>N/A</span>}
                                    {Object.keys(posts).length > 0 && (
                                      <span style={{ opacity: isFetching ? 0.5 : 1 }}>
                                        {this.state.lng}
                                      </span>
                                    )}
                                </TableCell>
                            </TableRow>
                            {lastUpdated && (
                              <TableRow>
                                <TableCell>Last updated at</TableCell>
                                <TableCell>{isFetching && Object.keys(posts).length === 0 && <span>Loading...</span>}
                                    {!isFetching && Object.keys(posts).length === 0 && <span>N/A</span>}
                                    {Object.keys(posts).length > 0 && (
                                    <span style={{ opacity: isFetching ? 0.5 : 1 }}>{new Date(lastUpdated).toLocaleTimeString()}.{' '}</span>
                                    )}
                                </TableCell>
                              </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Paper>
                {isFetching && Object.keys(posts).length === 0 && <h2>Loading...</h2>}
                {!isFetching && Object.keys(posts).length === 0 && <h2>Empty.</h2>}
                {Object.keys(posts).length > 0 && (
                  <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Posts posts={posts} />
                  </div>
                )}
                <p className="btn-refresh">
                  {!isFetching && (
                    <Button variant="contained" color="primary" onClick={this.handleRefreshClick}>Refresh</Button>
                  )}
                </p>
            </main>
        )
    }
}

AsyncApp.propTypes = {
    selectedCoords: PropTypes.string.isRequired,
    posts: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { selectedCoords, postsByCoords } = state
    const { isFetching, lastUpdated, items: posts } = postsByCoords[
        selectedCoords
    ] || {
        isFetching: true,
        items: []
    }

    return {
        selectedCoords,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(AsyncApp)