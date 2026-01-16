const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;

export async function getWeatherForecast(city) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${WEATHER_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("City not found. Please check spelling.");
  }

  return await response.json();
}
