const player1 = {
  player: 1,
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['Wind Blade', 'Kali Sticks'],
  attack: function () {
    console.log(name + 'Fight...');
  },
};
const player2 = {
  player: 2,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Steel Fans', 'Flying Blade'],
  attack: function () {
    console.log(name + 'Fight...');
  },
};

const arenas = document.querySelector('.arenas')
const randomButton = document.querySelector('.button')

function createElement(tagName, className) {
  const tag = document.createElement(tagName);
  if (className) {
    tag.classList.add(className);
  }
  return tag;
}

function createPlayer(playerObj) {
  const player = createElement('div', 'player' + playerObj.player)

  const progressbar = createElement('div', 'progressbar')
  player.appendChild(progressbar)

  const life = createElement('div', 'life')
  life.style.width = playerObj.hp + '%'
  progressbar.appendChild(life)

  const name = createElement('div', 'name')
  name.innerText = playerObj.name
  progressbar.appendChild(name)

  const character = createElement('div', 'character')
  player.appendChild(character)

  const img = createElement('img')
  img.src = playerObj.img
  character.appendChild(img)

  return player
}

function changeHP(player) {
  const playerLife = document.querySelector('.player' + player.player + ' .life')
  player.hp -= Math.ceil(Math.random() * 20);
  playerLife.style.width = player.hp + '%';
  if (player.hp <= 0) {
    randomButton.disabled = true;
    playerLife.style.width = 0 + '%';
    player1.hp > player2.hp ? arenas.appendChild(playerWins(player1.name)) : arenas.appendChild(playerWins(player2.name));
  }
}


function playerWins(name) {
  const winsTitle = createElement('div', 'loseTitle');
  winsTitle.innerText = name + ' wins';
  return winsTitle;
}

randomButton.addEventListener('click', function () {
  console.log('####: Click Random Button');
  changeHP(player1)
  changeHP(player2)
})

arenas.appendChild(createPlayer(player1))
arenas.appendChild(createPlayer(player2))
