async function fetchData(city) {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(city)}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'c0b0447d11msh828dd86c819c8b7p149803jsn50ac4d2b4430',
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  // CODE GOES HERE
  return fetchData(city);
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  const data = await getWeatherData(city);
  if (data) {
    showWeatherData(data);
  }
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  // CODE GOES HERE
  console.log(weatherData, '🍪');
  document.getElementById('temp').innerText = weatherData.current.temp_c;
  document.getElementById('city-name').innerText = weatherData.location.name;
  document.getElementById('weather-type').innerText = weatherData.current.condition.text;
  document.getElementById('feels-like').innerText = weatherData.current.feelslike_c;
  document.getElementById('humidity').innerText = weatherData.current.humidity;
  document.getElementById('wind-speed').innerText = weatherData.current.wind_kph;
  document.getElementById('wind-dir').innerText = weatherData.current.wind_dir;
  document.getElementById('cloud-cover').innerText = weatherData.current.cloud;
  document.getElementById('pressure').innerText = weatherData.current.pressure_mb;
  document.getElementById('uv-index').innerText = weatherData.current.uv;
}

// Uncomment to test the function
// searchCity();
