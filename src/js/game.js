import Character from './domain';

class Game {
  start() {
    console.log('game started');
    this.character = new Character();
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export default Game;
module.exports = { GameSavingData, readGameSaving, writeGameSaving };