<template>
  <div class="container">
    <h1 class="judul">Stopwatch</h1>
    <div class="display">{{ formatTime }}</div>
    <div class="controls">
      <button class="button-controls" @click="start" :disabled="isRunning">Start</button>
      <button class="button-controls" @click="stop" :disabled="!isRunning">Stop</button>
      <button class="button-controls" @click="reset" :disabled="isRunning">Reset</button>
    </div>
    <button class="tombol1" @click="kembaliKeBeranda">Kembali ke Beranda</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      startTime: null,
      currentTime: null
    };
  },
  computed: {
    elapsedTime() {
      if (!this.startTime) return 0;
      return this.currentTime - this.startTime;
    },
    formatTime() {
      const minutes = Math.floor(this.elapsedTime / 60000);
      const seconds = Math.floor((this.elapsedTime % 60000) / 1000);
      const milliseconds = Math.floor((this.elapsedTime % 1000) / 10);
      return `${this.padZero(minutes)}:${this.padZero(seconds)}.${this.padZero(milliseconds)}`;
    }
  },
  methods: {
    start() {
      if (!this.isRunning) {
        this.startTime = new Date().getTime();
        this.currentTime = this.startTime;
        this.isRunning = true;
        this.updateTime();
      }
    },
    kembaliKeBeranda() {
      this.$router.push('/beranda')
    },
    stop() {
      if (this.isRunning) {
        this.isRunning = false;
      }
    },
    reset() {
      if (!this.isRunning) {
        this.startTime = null;
        this.currentTime = null;
      }
    },
    updateTime() {
      if (this.isRunning) {
        this.currentTime = new Date().getTime();
        requestAnimationFrame(this.updateTime);
      }
    },
    padZero(value) {
      return value.toString().padStart(2, '0');
    }
  }
};
</script>

<style>
.tombol1 {
  display: flex;
  justify-content: center;
  gap: 10px;
  border-radius: 20px;
  background-color: #001cb8;
  font-weight: bold;
}
.judul {
  color: white;
}

.tombol1:hover {
  background-color: #011270;
}

.container {
  background-image: url('../assets/background_stopwatch.jpg');
  background-size: cover;
  background-position: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.display {
  font-size: 48px;
  text-align: center;
  margin-bottom: 20px;
  color: white;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.button-controls {
  padding: 10px 20px;
  background-color: #001cb8;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
}

.button-controls:hover {
  background-color: #011270;
}

.button-controls:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

</style>
