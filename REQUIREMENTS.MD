# Requirements

## Supplied requirements

<blockquote>Description:
1. Sign up for the free weather data API service at the URL below.
https://openweathermap.org/api
2. Fetch information from the weather api in XML form based on your detected current
location, transform it into JSON and return it to a React/Redux-based single page application
that stores the data in a client-side "store" and display it using React components. The only
requirement for the UI is that there should be a button that refreshes the weather information on
the page.
Deliverables:
A link to any accessible git repo (github, bitbucket or any other open source repository) with a
readme on how to run the project.</blockquote>

## Iterations and features

The core features of this application are

1. Redux-based SPA
2. Button to refresh geo-location-based weather data displayed on page

### MVP

As such, the Minimum Viable Product (MVP) will:
- Get the user's location using the Geolocation API
- Retrieve & display data from the OpenWeatherMap (OWM) API based on user input (button click)

### Iterative features

There are a number of features not necessary for the MVP but that are either 1) listed in the requirements, or 2) best practices for a robust, usable application. These are prioritized below.

1.  <strong>Retrieve OWM API data as XML, convert to JSON</strong>. The OWM data is available as JSON, but the CBC requirements ask to retrieve it as XML and convert it to JSON for use in the application.

2. <strong>Manual fallback for Geolocation API</strong>. The Geolocation API is unreliable due to 1) users rejection of consent prompt, and 2) reports of frequent timeouts from other developers. Users should be provided with the option to manually enter location information.

3. <strong>Error handling</strong>. Ran into a problem where Geolocation API would fail silently in the app, with a network response of <pre><code>Network location provider at 'https://www.googleapis.com/' : No response received.</code></pre>. Tracked the issue to my dev machine's `Security & Privacy > Privacy > Enable Location Services` being unchecked - checking this option resolved the problem. However, unchecking the option again failed to recreate the issue. This issue needs to be replicated so that proper error handling can be implemented. 

