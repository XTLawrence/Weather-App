
# Weather App

A simple weather app that allows users to check the current weather conditions of any city using the OpenWeatherMap API. The app displays essential weather information including temperature, humidity, wind speed, and an appropriate weather icon.

## Features

- **Search functionality**: Users can search for weather by entering a city name.
- **Weather details**: Displays current temperature, wind speed, humidity, and weather conditions with corresponding icons.
- **Error handling**: Displays an error message for invalid city names.

## Technologies Used

- **HTML5**: For the app's structure.
- **CSS3**: For styling the app interface.
- **JavaScript**: For fetching weather data from the OpenWeatherMap API and dynamically updating the UI.
- **OpenWeatherMap API**: To retrieve real-time weather data.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weather-app
    ```

3. Open the `index.html` file in your browser.

## Usage

- Enter the name of the city in the search input field.
- Press the search button to retrieve and display the current weather conditions for the specified city.

## API Key

To use this app, you'll need an API key from OpenWeatherMap. Replace the placeholder API key in `script.js` with your own API key.

```javascript
const API_KEY = "your_api_key_here";
