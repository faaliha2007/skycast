# 🌤️ SkyCast Weather App

SkyCast is a **React-based weather application** that lets users check the weather of any city. The app dynamically displays a **beautiful, animated UI** based on the weather type.  

---

## 🌐 Live Demo

You can check the **live version** of the SkyCast Weather App here:

🔗👀: https://skycast-sigma-ten.vercel.app/ 

## 🔹 Project Explanation

The project flow works like this:

1. **Login Page (City Input)**
   - The user enters the name of a city on the login page.
   - A **floating stars background** and gradient animations create an interactive UI.
   - When the user clicks **"Check Weather"**, the app makes an **API call** to OpenWeatherMap using **Axios**.

2. **Fetching Weather Data**
   - The app requests the weather data for the entered city.
   - It extracts **temperature**, **city name**, and **weather type** (clear, rain, snow, clouds) from the API response.

3. **Routing to Weather Pages**
   - Based on the **weather type**, the app dynamically navigates to a specific page:
     - **Sunny** → `Sunny.js` → displays a clear sky animation.
     - **Rainy** → `Rainy.js` → shows rain and lightning animations.
     - **Snowy** → `Snowy.js` → shows snowfall with snowman and snowflakes.
   - Each page displays:
     - City name
     - Temperature in Celsius
     - Weather description

4. **Handling Page Refresh**
   - If a user refreshes a weather page without navigating from the login page, the app **redirects back to the login page**.
   - This ensures users **cannot directly access weather pages** without entering a city.

5. **UI Enhancements**
   - Animated **stars, shooting stars, clouds, snow, rain, and sun** using CSS and TailwindCSS.
   - Floating cards with **backdrop blur**, **border effects**, and **shadow** for the weather information.
   - Smooth transitions and hover effects for better user experience.

6. **Tech Stack**
   - **React** – Component-based UI
   - **React Router** – Handles page navigation
   - **Axios** – API requests
   - **TailwindCSS** – Styling and animations
   - **OpenWeatherMap API** – Weather data source

---

## 🔹 Features

- ✅ Enter any city to get live weather information.
- ✅ Dynamic routing based on weather type.
- ✅ Interactive UI animations for different weather types.
- ✅ Temperature, city name, and weather description displayed.
- ✅ Automatic redirection to login if a user tries to access weather pages directly.
- ✅ Smooth user experience with floating cards and background effects.

---

Built with 💗 by **Faali**
