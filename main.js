const $btnstrike = document.getElementById('btn-kick');
const $btnheal = document.getElementById('btn-heal');
$btnstrike.getElementsByTagName('span')[1];
const character = {
name: 'Pikachu',
defaultHP: 200,
damagedHP: 200,
elHP: document.getElementById('health-character'),
elHPBar: document.getElementById('progressbar-character'),
renderHP: renderHP,
strike: strike,
heal: heal,
}
const enemy = {
name: 'Charmander',
defaultHP: 200,
damagedHP: 200,
elHP: document.getElementById('health-enemy'),
elHPBar: document.getElementById('progressbar-enemy'),
renderHP: renderHP,
strike: strike,
heal: heal,
}


let cntKick = 10;
let cntHeal = 3;

function init(){
console.log('Start game!');
character.renderHP();
enemy.renderHP();
$btnstrike.innerText = `Thunder Jolt [${cntKick}]`;
$btnheal.innerText = `Heal [${cntHeal}]`;
}

$btnstrike.addEventListener('click', function(){

console.log('Strike');
character.strike (rnd(20));
enemy.strike (rnd(20));
})
$btnstrike.addEventListener('click', count($btnstrike, cntKick))
$btnheal.addEventListener('click', function()
{

  console.log('Heal');
  character.heal (rnd(20));
  enemy.heal (rnd(20));

})
$btnheal.addEventListener('click', count($btnheal, cntHeal))
function renderHP(){

this.elHP.innerText = this.damagedHP + ' / ' + this.defaultHP;
this.elHPBar.style.width = (this.damagedHP / (this.defaultHP/100)) + '%';
}

function strike(dmg){
this.damagedHP -= dmg;
const log = this === enemy ? generateLogDmg(this, character, dmg) : generateLogDmg(this, enemy, dmg);
const $logs = document.querySelector('#logs');
const $p = document.createElement('p');
$p.innerHTML = log;
$logs.insertBefore($p, $logs.children[0]);


  if (this.damagedHP <= dmg)
  {

this.damagedHP = 0;
alert(this.name + ' сражался достойно, но проиграл!')
$btnstrike.disabled = true;
  }
this.renderHP();
}

function heal(hl){
let t = 0;
if (t === 3)
{

$btnheal.disabled = true;

}

if(this.defaultHP <= (this.damagedHP + hl))
{

this.damagedHP = this.defaultHP;

}
else{

this.damagedHP += hl;

}
const $logs = document.querySelector('#logs');
const $p = document.createElement('p');
$p.innerHTML = generateLogHeal(this, hl);
$logs.insertBefore($p, $logs.children[0]);
this.renderHP();
}

const rnd = (num) => Math.ceil(Math.random()*num);

function generateLogDmg(firstCharacter, secondCharacter, dmg){
  function lifelog()
  {

  return `- ${dmg}, [${firstCharacter.damagedHP} / ${firstCharacter.defaultHP}]`;

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

  return `+ ${hl}, [${character.damagedHP} / ext${character.defaultHP}]`;

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
