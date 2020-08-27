const $btnstrike = document.getElementById('btn-kick');
const $btnheal = document.getElementById('btn-heal');

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

function init(){

console.log('Start game!');
character.renderHP();
enemy.renderHP();
}

$btnstrike.addEventListener('click', function(){

console.log('Strike');
character.strike (rnd(20));
enemy.strike (rnd(20));

})

$btnheal.addEventListener('click', function()
{

  console.log('Heal');
  character.heal (rnd(20));
  enemy.heal (rnd(20));

})

function renderHP(){

this.elHP.innerText = this.damagedHP + ' / ' + this.defaultHP;
this.elHPBar.style.width = (this.damagedHP / (this.defaultHP/100)) + '%';
}

function strike(dmg){
  if (this.damagedHP <= dmg)
  {

this.damagedHP = 0;
alert(this.name + ' сражался достойно, но проиграл!')
$btnstrike.disabled = true;
  }
  else{
this.damagedHP -= dmg;

}
this.renderHP();
}
let cnt = 0;
function heal(hl){
let t = cnt++ - 1;

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
this.renderHP();
}

function rnd(num){

return Math.ceil(Math.random()*num);

}
init();
