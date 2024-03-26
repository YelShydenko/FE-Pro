async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=407a330010123158c8e606b939d02d17`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
     console.log(data);
     
  } catch (error) {
    console.error("The data was not received: ", error);
  }
}
fetchWeather();
