// Dummy data representing temperatures for certain cities
const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
  };
  
  // This function returns another function, creating a closure around the cache object.
  function createTemperatureFetcher(data) {
    // The cache object is private to this closure.
    const cache = {};
  
    return function getTemperatureForCity(city) {
      // Check if the temperature is already in the cache.
      if (cache[city] !== undefined) {
        console.log('Retrieved from cache');
        return cache[city];
      }
  
      // Simulate an API call by accessing the hardcoded data.
      const temperature = data[city];
      if (temperature !== undefined) {
        // Store the temperature in the cache.
        cache[city] = temperature;
        return temperature;
      }
  
      // If city is not found, return null.
      return null;
    };
  }
  
  // Create the memoized function using the closure.
  const getTemperatureForCity = createTemperatureFetcher(temperatureData);
  
  // Function to display the temperature in the HTML page.
  function displayTemperature() {
    const cityName = document.getElementById('cityName').value;
    const temperature = getTemperatureForCity(cityName);
    if (temperature !== null) {
      document.getElementById('temperature').textContent = `The temperature in ${cityName} is ${temperature}°C`;
    } else {
      document.getElementById('temperature').textContent = `Temperature for ${cityName} not found.`;
    }
  }
  
  // Expose displayTemperature to the global scope to be called from HTML.
  window.displayTemperature = displayTemperature;
  