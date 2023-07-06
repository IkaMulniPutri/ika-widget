<template>
  <div class="weather-widget">
    <h2 class="widget-title">Weather Widget</h2>
    <div class="location-input1">
      <label for="location"><p class="loc">Enter Location:</p></label>
      <input type="text" id="location" v-model="location" />
      <button @click="fetchWeatherData">Get Weather</button>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location">Location: {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        Temperature: {{ weatherData.main.temp }}°C
      </p>
      <p v-if="weatherData.weather" class="description">
        Description: {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p class="loc" v-else>Loading weather data...</p>
    <button class="tombol3" @click="kembaliKeBeranda">Kembali ke Beranda</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      weatherData: null
    };
  },
  methods: {
    kembaliKeBeranda() {
      this.$router.push('/beranda')
    },
    async fetchWeatherData() {
      try {
        const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        this.weatherData = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }
};
</script>

<style>
.weather-widget {
  padding: 5px;
  margin-bottom: 20px;
  text-align: center;
  background-image: url(../assets/background_cuaca.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 20px;
}
.widget-title {
  margin-top: 0;
  color: white;
  font-weight: bold;
}
.loc {
  margin-right: 10px;
  color: white;
  font-weight: bold;
}
.loading {
  color: white;
  font-weight: bold;
}
.custom-input {
  border: 2px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
}
.weather-icon {
  width: 100px;
  height: 100px;
  margin-top: 20px;
}
.custom-input:focus {
  outline: none;
  border-color: #0066ff;
}

.location-input1 {
  margin-bottom: 10px;
  padding: 20px;
  color: white;
  font-weight: bold;
}

.location-input1 label {
  display: block;
  margin-bottom: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
}
.location-input1 input {
  width: 200px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
.location-input1 button {
  padding: 10px 20px;
  background-color: rgb(110, 110, 110);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.location-input1 button:hover {
  background-color: rgb(88, 88, 88);
}
.tombol3 {
  padding: 10px 20px;
  background-color: rgb(110, 110, 110);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}
.tombol3:hover {
  background-color: rgb(88, 88, 88);
}

.weather-data {
  margin-top: 10px;
}
.location {
  font-size: 18px;
  font-weight: bold;
  color:white;
}
.temperature {
  font-size: 24px;
  color: red;
  font-weight: bold;
}
.description {
  font-size: 16px;
  color: white;
  font-weight: bold;
}
</style>
