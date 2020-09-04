import Pokemon from "./js/pokemon.js"
import {pokemons} from "./js/pokemons.js"
let $startBtn = document.getElementById('newGame');
$startBtn.style.display = 'none';

function random (max){

return Math.floor(Math.random() * Math.floor(max))

}

const randomPokemon1 = pokemons[random(6)];
const randomPokemon2 = pokemons[random(6)];
let newPokemon = pokemons[random(6)];
let player1 = new Pokemon({
...randomPokemon1,
selector: 'player1',
})

let player2 = new Pokemon({
...randomPokemon2,
selector: 'player2',
})


const $control = document.querySelector('.control')
player1.attacks.forEach(item => {

  const $btn = document.createElement('button');
  $btn.classList.add('button')
  $btn.innerText = item.name;
  const btnCount = count($btn, item.maxCount)
  $control.appendChild($btn);
  $btn.addEventListener('click', () => {
btnCount();
player2.strike (rnd(item.minDamage, item.maxDamage));
player1.strike (rnd(player2.attacks[0].minDamage, player2.attacks[0].maxDamage))
  })
});

function init(){
console.log('Start game!');
}

/*$btnstrike.addEventListener('click', function(dmg){
console.log('Strike');
player1.strike (rnd(20), function(dmg){
let p1dmg = generateLogDmg(player1, player2, dmg);
const $logs = document.querySelector('#logs');
const $p = document.createElement('p');
$p.style.color = 'red';
$p.innerHTML = p1dmg;
$logs.insertBefore($p, $logs.children[0]);
});

player2.strike (rnd(20), function(dmg){
let p2dmg = generateLogDmg(player2, player1, dmg)
const $logs = document.querySelector('#logs');
const $p = document.createElement('p');
$p.style.color = 'red';
$p.innerHTML = p2dmg;
$logs.insertBefore($p, $logs.children[0]);
})
});
$btnstrike.addEventListener('click', count($btnstrike, cntKick))

$btnheal.addEventListener('click', function()
{
  console.log('Heal');

  player1.heal (rnd(20), function(hl){
let p1hl = generateLogHeal(player1,hl)
const $logs = document.querySelector('#logs');
const $p = document.createElement('p');
$p.style.color = 'blue';
$p.innerHTML = p1hl;
$logs.insertBefore($p, $logs.children[0]);
})

player2.heal (rnd(20), function(hl){
let p2hl = generateLogHeal(player2,hl)
const $logs = document.querySelector('#logs');
const $p = document.createElement('p');
$p.style.color = 'blue';
$p.innerHTML = p2hl;
$logs.insertBefore($p, $logs.children[0]);
})


})
$btnheal.addEventListener('click', count($btnheal, cntHeal))
*/

function rnd (min = 0, max) {
  const num = max - min;
return Math.ceil(Math.random()*num) + min;
}

function generateLogDmg(firstCharacter, secondCharacter, dmg){
  function lifelog()
  {

  return `- ${dmg}, [${firstCharacter.hp.current} / ${firstCharacter.hp.total}]`;

  }

const logs = [
  `${firstCharacter.name} вспомнил что-то важное, но неожиданно ${secondCharacter.name}, не помня себя от испуга, ударил в предплечье врага. ${lifelog()}`,
  `${firstCharacter.name} поперхнулся, и за это ${secondCharacter.name} с испугу приложил прямой удар коленом в лоб врага. ${lifelog()}`,
  `${firstCharacter.name} забылся, но в это время наглый ${secondCharacter.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${lifelog()}`,
  `${firstCharacter.name} пришел в себя, но неожиданно ${secondCharacter.name} случайно нанес мощнейший удар. ${lifelog()}`,
  `${firstCharacter.name} поперхнулся, но в это время ${secondCharacter.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${lifelog()}`,
  `${firstCharacter.name} удивился, а ${secondCharacter.name} пошатнувшись влепил подлый удар. ${lifelog()}`,
  `${firstCharacter.name} высморкался, но неожиданно ${secondCharacter.name} провел дробящий удар. ${lifelog()}`,
  `${firstCharacter.name} пошатнулся, и внезапно наглый ${secondCharacter.name} беспричинно ударил в ногу противника. ${lifelog()}`,
  `${firstCharacter.name} расстроился, как вдруг, неожиданно ${secondCharacter.name} случайно влепил стопой в живот соперника. ${lifelog()}`,
  `${firstCharacter.name} пытался что-то сказать, но вдруг, неожиданно ${secondCharacter.name} со скуки, разбил бровь сопернику. ${lifelog()}`
];

return logs[Math.random(logs.length) - 1];

}

function count($btn, clickNumb){
let num = 0;
const innerText = $btn.innerText;
$btn.innerText = `${innerText} [${clickNumb}]`
return function(){
  num ++;
  console.log(`Number of clicks: ${num}`);
  $btn.innerText = `${innerText} [${clickNumb - num}]`;
if (num >= clickNumb){
    $btn.disabled = true;
}
}
}
init()
