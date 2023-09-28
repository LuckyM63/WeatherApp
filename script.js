document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("locationInput");
    const getWeatherButton = document.getElementById("getWeatherButton");
    const unitSelector = document.getElementById("unitSelector");
    const errorElement = document.getElementById("error");
    const weatherDataElement = document.getElementById("weatherData");
    const locationElement = document.getElementById("location");
    const temperatureElement = document.getElementById("temperature");
    const humidityElement = document.getElementById("humidity");
    const windSpeedElement = document.getElementById("windSpeed");
    const weatherDescriptionElement = document.getElementById("weatherDescription");
/* Created by admin - Lucky Mishra */
    getWeatherButton.addEventListener("click", function () {
        const location = locationInput.value;
        const unit = unitSelector.value;
        const apiKey = "c291f9f43960dcf12bd162bcb1074df4";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apiKey}`;

        // Make an API request
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Location not found.");
                }
                return response.json();
            })
            .then((data) => {
                // Extract relevant data from the API response
                const locationName = data.name + ", " + data.sys.country;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;
                const weatherDescription = data.weather[0].description;

                // Update the weather data on the page
                locationElement.textContent = locationName;
                temperatureElement.textContent = temperature;
                humidityElement.textContent = humidity;
                windSpeedElement.textContent = windSpeed;
                weatherDescriptionElement.textContent = weatherDescription;

                // Show the weather data and hide the error message
                weatherDataElement.classList.remove("hidden");
                errorElement.classList.add("hidden");
            })
            .catch((error) => {
                // Handle API errors
                errorElement.textContent = error.message;
                errorElement.classList.remove("hidden");
                weatherDataElement.classList.add("hidden");
            });
    });
});
/* Created by admin - Lucky Mishra */