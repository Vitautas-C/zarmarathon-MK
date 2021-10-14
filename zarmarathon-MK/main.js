const player1 = {
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['Wind Blade', 'Kali Sticks'],
  attack: function () {
    console.log(name + 'Fight...');
  },
};
const player2 = {
  name: 'Kitana',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Steel Fans', 'Flying Blade'],
  attack: function () {
    console.log(name + 'Fight...');
  },
};

function createPlayer(className, player) {
  const player1 = document.createElement('div')
  player1.classList.add(className)

  const progressbar = document.createElement('div')
  progressbar.classList.add('progressbar')
  player1.appendChild(progressbar)

  const life = document.createElement('div')
  life.classList.add('life')
  life.style.width = player.hp + '%'
  progressbar.appendChild(life)

  const name = document.createElement('div')
  name.classList.add('name')
  name.innerText = player.name
  progressbar.appendChild(name)

  const character = document.createElement('div')
  character.classList.add('character')
  player1.appendChild(character)

  const img = document.createElement('img')
  img.src = player.img
  character.appendChild(img)

  const arenas = document.querySelector('.arenas')
  arenas.appendChild(player1)
}
createPlayer('player1', player2)
createPlayer('player2', player1)