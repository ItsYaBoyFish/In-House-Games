const gameSelectionDiv = document.getElementById('gameSelection');
const blackjackGameDiv = document.getElementById('blackjack');
const crashGameDiv = document.getElementById('crash');
const rouletteGameDiv = document.getElementById('roulette');

const socket = io();


function gameSelected(game) {
  switch(game) {
    case 'blackjack':
      blackjackGameDiv.classList.remove('hide');
      gameSelectionDiv.classList.add('hide');
      changeSocketRooms('blackjack');
      break;
    case 'crash':
      crashGameDiv.classList.remove('hide');
      gameSelectionDiv.classList.add('hide');
      changeSocketRooms('crash');
      break;
    case 'roulette':
      rouletteGameDiv.classList.remove('hide');
      gameSelectionDiv.classList.add('hide');
      changeSocketRooms('roulette');
      break;
  }
};


function changeSocketRooms(roomName) {
  socket.emit('room-change', (roomName))
};