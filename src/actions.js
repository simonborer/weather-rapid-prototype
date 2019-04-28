import fetch from 'cross-fetch'

export const REQUEST_WEATHERDATA = 'REQUEST_WEATHERDATA'
export const RECEIVE_WEATHERDATA = 'RECEIVE_WEATHERDATA'
export const SELECT_COORDINATES = 'SELECT_COORDINATES'
export const INVALIDATE_COORDINATES = 'INVALIDATE_COORDINATES'

export function selectCoordinates(coords) {
  return {
    type: SELECT_COORDINATES,
    coords
  }
}

export function invalidateCoords(coords) {
  return {
    type: INVALIDATE_COORDINATES,
    coords
  }
}

function requestPosts(coords) {
  return {
    type: REQUEST_WEATHERDATA,
    coords
  }
}

function receivePosts(coords, json) {

  const weatherData = {"name": json.name, "main": json.main, "wind": json.wind};
  return {
    type: RECEIVE_WEATHERDATA,
    coords,
    posts: weatherData,
    receivedAt: Date.now()
  }
}

function fetchPosts(coords, latLng) {
  console.log(2, latLng)
  if (latLng === null || latLng === `undefined`) {
    latLng = {lat: '0', lng: '0'}
  }
  return dispatch => {
    dispatch(requestPosts(coords))
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=` + latLng.lat + `&lon=` + latLng.lng + `&units=metric&appid=538c3970565f42d569d17f27c6ed5a5e`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(coords, json)))
  }
}

function shouldFetchPosts(state, coords, latLng) {
  const posts = state.postsByCoords[coords]
  console.log(3, latLng)
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(coords, latLng) {
  console.log(1, latLng)
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), coords, latLng)) {
      return dispatch(fetchPosts(coords, latLng))
    }
  }
}