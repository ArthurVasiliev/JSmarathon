class Selector {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`)
    this.elHPBar = document.getElementById(`progressbar-${name}`)
  }
}
class Pokemon extends Selector {
  constructor({name, hp, type, selector}) {
    super(selector);
this.name = name;
this.hp = {
current: hp,
total: hp,
};
this.type = type;
this.renderHP();
}

renderHP = () => {
  const {elHP, elHPBar, hp: {current, total}} = this;
  this.elHP.innerText = current + ' / ' + total;
  this.elHPBar.style.width = (current / (total/100)) + '%';
}

strike = (dmg, ht) => {
this.hp.current -= dmg;

  if (this.hp.current <= dmg)
  {

this.hp.current = 0;
alert(this.name + ' сражался достойно, но проиграл!')
$btnstrike.disabled = true;
  }
this.renderHP();
ht && ht(dmg);
}

heal = (hl, hp) => {
this.hp.current += hl;
if(this.hp.total <= (this.hp.current + hl))
{

this.hp.current = this.hp.total;

}
this.renderHP();
hp && hp(hl);
}
}

export default Pokemon;
