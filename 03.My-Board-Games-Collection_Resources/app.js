function solve() {
    const baseUrl = "http://localhost:3030/jsonstore/games/";
    const loadButton = document.getElementById('load-games');
    const divElement = document.getElementById('games-list');
    loadButton.addEventListener('click', loadGames);

    async function loadGames() {
const game = await fetch(baseUrl);

    }
    function createGame(game) {
        const divBoardGameElement = document.createElement('div');
        divBoardGameElement.className('board-game');
const divContentElement = document.createElement('div');
divContentElement.className('content');
const pNameElement = document.createElement('p');
pNameElement.textContent = game.name;
pPlayersElement = document.createElement('p');
pPlayersElement.textContent = game.players;
    }
}