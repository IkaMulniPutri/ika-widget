<template>
    <div class="home">
      <h1>Selamat Datang di Beranda</h1>
      <p class="paragraf">Ini adalah halaman utama Widget</p>
      <div class="button-container">
        <button class="custom-button" @click="masukKeCuaca">Cuaca</button>
        <button class="custom-button" @click="MasukKeLokasi">Lokasi</button>
        <button class="custom-button" @click="masukKeStopwatch">Stopwatch</button>
        <button class="custom-button" @click="masukKeTicTacToe">Tic Tac Toe</button>
        <button class="custom-button" @click="masukKeFoto">Foto</button>
      </div>
    </div>
  </template>
  
  <script>
  import HelloWorld from '../components/HelloWorld.vue'
  
  export default {
    components: {
      HelloWorld
    },
  
  methods: {
      masukKeCuaca() {
        this.$router.push('/cuaca')
      },
      MasukKeLokasi() {
        this.$router.push('/lokasi')
      },
      masukKeStopwatch() {
        this.$router.push('/stopwatch')
      },
      masukKeTicTacToe() {
        this.$router.push('/tictactoe')
      },
      masukKeFoto() {
        this.$router.push('/foto')
      },
    }
  }
  </script>
  
  <style>
  .home {
    background-image: url('../assets/background_home.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  h1 {
    color: darkred;
    text-align: center;
  }
  .paragraf {
    color:  darkred;
    text-align: center;
    font-weight: bold;
  }
  
  .button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 20px;
  }

  .custom-button {
    padding: 10px 20px;
    background-color: rgb(136, 44, 44);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 20px;
    transition: background-color 0.3s ease;
  }

  .custom-button:last-child {
    margin-right: 0;
  }
  
  .custom-button:hover {
    background-color: rgb(158, 52, 52);
  }
  </style>