# Globetrotter

Globetrotter is a frontend web application that allows users to search for any city in the world and explore:

- 5-day weather forecast
- Country information
- City photo gallery from Unsplash
- Search history (stored in LocalStorage)
- Light / Dark theme
- Responsive user interface

---

## Features

- City search with real-time data
- 5-day weather forecast (OpenWeather API)
- Country details (RestCountries API)
- City photo gallery (Unsplash API)
- Search history saved in browser
- Light / Dark theme toggle
- Modal image preview
- Loading and error states
- Fully responsive layout

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Vite
- REST APIs
- LocalStorage

---

## APIs Used

- OpenWeather API – weather forecast data
- Unsplash API – city photos
- RestCountries API – country information

---

## Quick Start

```bash
git clone https://github.com/Name-vm/globetrotter.git
cd globetrotter
npm install
npm run dev
```

---

### Set up API keys

Create a .env file in the root folder with your API keys:

```env
VITE_WEATHER_KEY=your_openweather_api_key
VITE_UNSPLASH_KEY=your_unsplash_api_key
```

---

The app will be available at: [http://localhost:5173](http://localhost:5173)

---
