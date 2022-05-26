window.addEventListener("load", () => {
  let long;
  let lat;
  const temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  const temperatureDegree = document.querySelector(".temperature-degree");
  const locationTimezone = document.querySelector(".location-timezone");
  const temperatureSection = document.querySelector(".temperature");
  const temperatureSpan = document.querySelector(".temperature span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords; // destructuring
      long = longitude;
      lat = latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}`;

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const { temperature, summary, icon } = data.current;
          temperatureDegree.textContent = temperature; // change the temperature degree to the current temperature from the data
          temperatureDescription.textContent = summary; // change the temperature description to the current temperature from the data
          locationTimezone.textContent = data.timezone; // change the location timezone to the current timezone from the data

          // FORMULA FOR CELSIUS
          const celsius = (temperature - 32) * (5 / 9);
          setIcon(icon, document.querySelector(".icon")); // change the icon to the current icon from the data

          // Change temperature to Celsius/Fahrenheit
          temperatureSection.addEventListener("click", () => {
            if (temperatureSpan.textContent === "F") {
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = Math.floor(celsius);
            } else {
              temperatureSpan.textContent = "F";
              temperatureDegree.textContent = temperature;
            }
          });
        });
    });
  }

  function setIcon(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
