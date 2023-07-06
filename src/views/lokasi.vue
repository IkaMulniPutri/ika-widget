<template>
  <div class="location-widget">
    <h2>Your Location</h2>
    <div v-if="latitude && longitude">
      <p>Latitude: {{ latitude }}</p>
      <p>Longitude: {{ longitude }}</p>
    </div>
    <div v-else>
      <p>Finding your location...</p>
    </div>

    <div class="location-input">
      <label for="latitude">Latitude:</label>
      <input type="text" id="latitude" v-model="inputLatitude" />
    </div>
    <div class="location-input">
      <label for="longitude">Longitude:</label>
      <input type="text" id="longitude" v-model="inputLongitude" />
    </div>
    <div v-if="foundLocation">
      <h3 class="detail">Location Details</h3>
      <p>{{ foundLocation.components.country }}</p>
      <p>{{ foundLocation.components.city }}</p>
      <p>{{ foundLocation.components.street }}</p>
      <p>Postal Code: {{ foundLocation.components.postcode }}</p>
    </div>
    <button class="find" @click="fetchLocationDetails">Find Location Details</button>
    <button class="tombol2" @click="kembaliKeBeranda">Kembali ke Beranda</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: null,
      longitude: null,
      inputLatitude: '',
      inputLongitude: '',
      foundLocation: null,
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    }
  },
  methods: {
    getPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },
    kembaliKeBeranda() {
      this.$router.push('/beranda')
    },
    async fetchLocationDetails() {
      try {
        const apiKey = '92591005a7b94008909d59a64b6d2a49';
        const latitude = this.inputLatitude || this.latitude;
        const longitude = this.inputLongitude || this.longitude;
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          latitude + ',' + longitude
        )}&key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const location = data.results[0];
          this.foundLocation = location;
          console.log('Location:', location);
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    },
  },
};
</script>

<style>
.location-widget {
  background-image: url('../assets/background_lokasi.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.find {
  padding: 10px 20px;
  background-color: rgb(44, 53, 136);
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}
.find:hover {
  background-color: rgb(21, 28, 88);
}
.tombol2 {
  padding: 10px 20px;
  background-color: rgb(44, 53, 136);
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}
.tombol2:hover {
  background-color: rgb(21, 28, 88);
}

.location-input button.tombol {
  margin-top: 20px;
  align-self: center;
}
.location-widget h2 {
  color: white;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}
.location-widget p {
  color: white;
  font-weight: bold;
}
.location-input {
  margin-top: 20px;
}
.location-input label {
  display: block;
  margin-bottom: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
}
.location-input input {
  width: 200px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
.location-input button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.location-input button:hover {
  background-color: #45a049;
}
.location-input button:disabled {
  background-color: #ccc;
  color: #999;
  cursor: not-allowed;
}
.location-details {
  margin-top: 10px;
  text-align: left;
}
.location-details h3 {
  margin-bottom: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
.detail {
  margin-bottom: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
.location-details p {
  margin: 5px 0;
  color: white;
}
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
