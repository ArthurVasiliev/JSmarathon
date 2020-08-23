const $btnkick = document.getElementById('btn-kick');
const $btnheal = document.getElementById('btn-heal');

const character = {
name: 'Pikachu',
defaultHP: 200,
damagedHP: 200,
elHP: document.getElementById('health-character'),
elHPBar: document.getElementById('progressbar-character'),
}
const enemy = {
name: 'Charmander',
defaultHP: 200,
damagedHP: 200,
elHP: document.getElementById('health-enemy'),
elHPBar: document.getElementById('progressbar-enemy'),
}

$btnkick.addEventListener('click', function(){

console.log('Strike');
strike (rnd(20), character);
strike (rnd(20), enemy);

})

$btnheal.addEventListener('click', function()
{

  console.log('Heal');
  heal (rnd(20), character);
  heal (rnd(20), enemy);

})


function init(){

console.log('Start game!');
renderHP(character);
renderHP(enemy);
}

function renderHP(person){

person.elHP.innerText = person.damagedHP + ' / ' + person.defaultHP;
person.elHPBar.style.width = (person.damagedHP / (person.defaultHP/100)) + '%';
}

function strike(dmg, person){
  if (person.damagedHP <= dmg)
  {

person.damagedHP = 0;
alert(person.name + ' сражался достойно, но проиграл!')
$btnkick.disabled = true;
  }
  else{
person.damagedHP -= dmg;

}
renderHP(person);
}
let cnt = 0;

function heal(hl, person){
cnt++;
if (cnt === 3)
{

$btnheal.disabled = true;

}
if(person.defaultHP <= (person.damagedHP += hl))
{

person.damagedHP = person.defaultHP;

}
else{

person.damagedHP += hl;

}
renderHP(person);
}

function rnd(num){


return Math.ceil(Math.random()*num);


}

init();
