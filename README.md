🌤️ India Weather App
A beautiful, responsive weather application showcasing weather information for 105+ Indian cities. Built with pure HTML, CSS, and JavaScript.

https://img.shields.io/badge/Weather-App-blue
https://img.shields.io/badge/version-1.0.0-green
https://img.shields.io/badge/license-MIT-orange

📋 Table of Contents
Features

Demo

Technologies Used

Installation

File Structure

Usage Guide

Features in Detail

API Integration

Customization

Browser Support

Contributing

License

Acknowledgements

✨ Features
🌡️ Weather Information
Current temperature display

"Feels like" temperature

Humidity percentage

Wind speed

Atmospheric pressure

Visibility distance

UV Index with color coding

🏙️ City Coverage
105+ Indian cities across all regions

Metro cities and major towns

Quick city search functionality

City data organized by region

📊 Air Quality Index (AQI)
Real-time AQI levels

PM2.5 and PM10 measurements

O₃, NO₂, and SO₂ levels

Color-coded AQI categories

📅 5-Day Forecast
Daily temperature predictions

Weather condition icons

Max/Min temperatures

Click for detailed forecast

🎨 User Interface
Clean, modern design

Dark/Light theme toggle

Responsive for all devices

Smooth animations

Glass-morphism effects

Loading spinners

🚀 Demo
Live Demo (Add your deployed link here)

💻 Technologies Used
Frontend
HTML5 - Structure

CSS3 - Styling (Flexbox, Grid, Animations)

JavaScript ES6+ - Functionality

Font Awesome 6 - Icons

Google Fonts - Poppins font family

CSS Features
CSS Variables for theming

CSS Grid & Flexbox layouts

CSS Animations & Keyframes

Media Queries for responsiveness

Backdrop filters (glass effect)

Custom scrollbar styling

JavaScript Features
DOM Manipulation

Event Listeners

Array methods

Template literals

Local Storage (theme preference)

Modular functions

📦 Installation
Method 1: Direct Download
Download the ZIP file

Extract to your desired folder

Open index.html in your browser

Method 2: Clone Repository
bash
git clone https://github.com/yourusername/india-weather-app.git
cd india-weather-app
open index.html
Method 3: Local Setup
Create the following file structure:

text
india-weather-app/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
📁 File Structure
text
india-weather-app/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and animations
├── js/
│   └── script.js          # All JavaScript functionality
└── README.md              # Documentation
📖 Usage Guide
🔍 Searching for Cities
Use the search bar at the top

Type any Indian city name

Press Enter or click the search icon

Results update automatically

🌓 Theme Toggle
Click the moon/sun icon to switch between light and dark mode

Theme preference is saved in browser

📍 Location Button
Click the location icon for location-based weather (demo mode shows Mumbai)

🔄 Refresh Data
Click the refresh icon to update weather data

Auto-refreshes every 2 minutes

📊 Viewing Details
Main weather display shows current conditions

Scroll down for AQI and 5-day forecast

Click any forecast day for detailed information

🎯 Features in Detail
Weather Display
text
┌─────────────────────────────────┐
│         Mumbai, INDIA           │
│         Last updated: 2:30 PM   │
│                                  │
│        ☀️       32°C            │
│            Hazy Sunshine         │
│                                  │
│ Feels Like │ Humidity │ Wind    │
│   35°C     │   74%    │ 15 km/h │
│                                  │
│ Pressure  │ Visibility │ UV     │
│ 1012 hPa  │   5.2 km   │ 7.2    │
└─────────────────────────────────┘
Air Quality Index
0-50: Good (Green)

51-100: Satisfactory (Light Green)

101-150: Moderate (Yellow)

151-200: Unhealthy (Orange)

201-300: Poor (Red)

300+: Severe (Purple)

Weather Alerts
Automatically generated based on:

High temperature (>38°C)

High humidity (>75%)

Extreme UV index (>8)

Rain conditions

🔌 API Integration
This version uses mock data for demonstration. To integrate with a real weather API:

Get API Key from:

OpenWeatherMap

WeatherAPI

Weather.gov API

Modify updateWeatherData function:

javascript
async function updateWeatherData(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.name},IN&appid=YOUR_API_KEY&units=metric`
        );
        const data = await response.json();
        // Process and display data
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}
🎨 Customization
Changing Colors
Modify the CSS variables in :root:

css
:root {
    --primary: #4a90e2;      /* Main blue */
    --secondary: #65dac5;     /* Mint green */
    --accent: #559fba;         /* Steel blue */
    --sun-color: #FDB813;      /* Sun yellow */
    --rain-color: #3498db;      /* Rain blue */
}
Adding More Cities
Update the indianCities array in script.js:

javascript
{ 
    name: "Your City", 
    state: "Your State", 
    temp: 30, 
    condition: "Sunny", 
    aqi: 75 
}
Modifying Animations
Adjust animation timings in CSS:

css
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); } /* Change height */
}
🌐 Browser Support
Browser	Version	Support
Chrome	60+	✅ Full
Firefox	55+	✅ Full
Safari	13+	✅ Full
Edge	79+	✅ Full
Opera	50+	✅ Full
iOS Safari	13+	✅ Full
Android Chrome	90+	✅ Full
🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Development Guidelines
Follow existing code style

Test on multiple browsers

Ensure responsive design

Add comments for complex logic

Update documentation

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

text
MIT License

Copyright (c) 2026 India Weather App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
