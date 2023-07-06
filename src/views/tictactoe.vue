<template>
  <div class="tictactoe-widget">
    <h1 class="ket">Game Tic Tac Toe</h1>
    <div v-if="winner" class="overlay">
      <p v-if="winner === 'draw'">Draw!</p>
      <p v-else>{{ winner }} wins!</p>
      <button @click="resetGame">Play Again</button>
      <button @click="kembaliKeBeranda">Kembali ke Beranda</button>
    </div>
    <div class="board">
      <div
        v-for="(cell, index) in cells"
        :key="index"
        class="cell"
        :class="{ 'cell-x': cell === 'X', 'cell-o': cell === 'O' }"
        @click="makeMove(index)"
        :disabled="cell !== '' || winner"
      >
        {{ cell }}
      </div>
    </div>
    <p class="aturan">Bermian bersama temanmu dan rasakan kebersamaan <br> Player 1 = X <br> Player 2 = O <br><br> Aturan: <br> 1. Halangi lawan agar dia tidak bisa menuliskan simbolnya dalam satu baris. <br> 2. Tidak ada waktu dalam permainan ini, sehingga kamu bisa menggunkan waktu sebanyak yang kamu butuhkan.  </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cells: ['', '', '', '', '', '', '', '', ''],
      currentPlayer: 'X',
      winner: null,
      winningConditions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
  },
  methods: {
    makeMove(index) {
      if (this.cells[index] === '' && !this.winner) {
        this.cells[index] = this.currentPlayer;
        this.checkWinner();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    },
    checkWinner() {
      for (let condition of this.winningConditions) {
        const [a, b, c] = condition;
        if (
          this.cells[a] &&
          this.cells[a] === this.cells[b] &&
          this.cells[b] === this.cells[c]
        ) {
          this.winner = this.cells[a];
          return;
        }
      }
      if (this.cells.every((cell) => cell !== '')) {
        this.winner = 'draw';
      }
    },
    kembaliKeBeranda() {
      this.$router.push('/beranda')
    },
    resetGame() {
      this.cells = ['', '', '', '', '', '', '', '', ''];
      this.currentPlayer = 'X';
      this.winner = null;
    },
  },
};
</script>

<style>
.ket {
  margin-bottom: 50px;
  font-weight: bold;
  color: whitesmoke;
  font-family: 'Comic Sans MS', cursive;
}

.aturan {
  color: whitesmoke;
  margin-top: 50px;
  font-weight: bold;
  font-family: 'Comic Sans MS', cursive;
}

.tictactoe-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  background-image: url('../assets/background_tictactoe.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.50);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
  z-index: 999;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #eee;
  font-size: 48px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.cell:hover {
  background-color: #f8f9fa;
}

.cell:disabled {
  cursor: not-allowed;
}

.cell-x {
  color: #f00;
}

.cell-o {
  color: #00f;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #1417bd;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
}

button:hover {
  background-color: #04067e;
}
</style>
