<template>
  <div class="photo-widget">
      <h1 class="ket1">Widget Photo</h1>
    <div class="image-container">
      <img :src="currentPhoto" :alt="currentPhoto" :style="{ width: '1000px', height: 'auto' }" />
    </div>
    <div class="controls-foto">
      <button @click="kembaliKeBeranda">Kembali ke Beranda</button>
      <button @click="prevPhoto">Previous</button>
      <button @click="nextPhoto">Next</button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      photos: [require('../assets/photo1.jpg'),require('../assets/photo2.jpg'),require('../assets/photo3.jpg'),require('../assets/photo4.jpg'),require('../assets/photo5.jpg'),require('../assets/photo6.jpg'),require('../assets/photo7.jpg'),require('../assets/photo8.jpg'),require('../assets/photo9.jpg'),require('../assets/photo10.jpg'),require('../assets/photo11.jpg'),require('../assets/photo12.jpg'),require('../assets/photo13.jpg'),require('../assets/photo14.jpg'),require('../assets/photo15.jpg'),require('../assets/photo16.jpg'),require('../assets/photo17.jpg'),require('../assets/photo18.jpg')],
      currentIndex: 0,
    };
  },
  computed: {
    currentPhoto() {
      return this.photos[this.currentIndex];
    },
  },
  methods: {
    kembaliKeBeranda() {
      this.$router.push('/beranda')
    },
    prevPhoto() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.photos.length - 1;
      }
    },
    nextPhoto() {
      if (this.currentIndex < this.photos.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
  },
};
</script>

<style>
.ket1 {
  font-weight: bold;
  margin-bottom: 50px;
  color: black;
  font-family: 'Comic Sans MS', cursive;
}

.photo-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.image-container {
  margin-bottom: 20px;
  border: 30px solid black; 
  padding: 5px;
  display: flex;
  justify-content: center;
}
.image-container img {
  max-width: 100%;
  max-height: 100%;
}

.controls-foto button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: rgb(0, 0, 0);
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 50px;
  margin-right: 10px;
}

.controls-foto button:hover {
  background-color: rgb(41, 40, 40);
}

</style>