// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=41ca95b1d28868e60634fbf9e61d7d41';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
// convert from Kelvin to Celsius
const toCelsius = '&units=metric';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */

/* Function to GET Web API Data*/
const getData = async (baseUrl, newZip, toCelsius, apiKey) => {
  const response = await fetch(baseUrl+newZip+toCelsius+apiKey);
  try {
    const data = await response.json();
    return data;
  } catch(error) {
      console.log('error', error);
  }
}

/* Function to POST data */
const postData = async (url='', data={}) => {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  });
  try {
    console.log(response);
  } catch(error) {
      console.log('error', error);
    }
}


/* Function to GET Project Data */
