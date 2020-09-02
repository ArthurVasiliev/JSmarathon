import Pokemon from "./js/pokemon.js"

const $btnstrike = document.getElementById('btn-kick');
const $btnheal = document.getElementById('btn-heal');

const player1 = new Pokemon({
name: 'Pikachu',
type: 'Electric',
hp: 200,
selector: 'character',
})

const player2 = new Pokemon({
name: 'Charmander',
type: 'Fire',
hp: 200,
selector: 'enemy',
})


let cntKick = 10;
let cntHeal = 3;

function init(){
console.log('Start game!');
$btnstrike.innerText = `Thunder Jolt [${cntKick}]`;
$btnheal.innerText = `Heal [${cntHeal}]`;
}

$btnstrike.addEventListener('click', function(dmg){
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


const rnd = (num) => Math.ceil(Math.random()*num);

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

return logs[rnd(logs.length) - 1];


}

function generateLogHeal(character,hl)
{
  function lifelog()
  {

  return `+ ${hl}, [${character.hp.current} / ${character.hp.total}]`;

  }
const logs = [
`${character.name} хлебнул пивка и почувстовал прилив сил. ${lifelog()}`,
`Бабушка угостила ${character.name} пирожком и теперь он снова в строю. ${lifelog()}`,
`${character.name} вспомнил про Властелин колец в переводе Гоблина и на душе стало тепло. ${lifelog()}`,
`${character.name} услышал гимн СССР и впал в правидную ярость. ${lifelog()}`,
`${character.name} решил ничего не делать и ни о чем не жалеет. ${lifelog()}`,
`Чечеточник снова танцует чечетку, а ${character.name} - лечится. ${lifelog()}`,
`Ванга снова обезкуражила всех и... вылечила ${character.name}. ${lifelog()}`,
`Я устал придумывать какие-то фразы и просто так накрутил жизни ${character.name}. ${lifelog()}`
]
return logs[rnd(logs.length) - 1];
}

function count($btn, clickNumb){
let num = 0;
return function(){
  num ++;
  console.log(`Number of clicks: ${num}`);
  if($btn === $btnstrike)
  {
  $btn.innerText = `Thunder Jolt [${clickNumb - num}]`;
}
else if($btn === $btnheal){
$btn.innerText = `Heal [${clickNumb - num}]`;
}
if (num >= clickNumb){
    $btn.disabled = true;
}
}
}
init()
