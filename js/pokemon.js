class Selector {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`)
    this.elHPBar = document.getElementById(`progressbar-${name}`)
    this.pkname = document.getElementById(`name-${name}`)
    this.pkimg = document.getElementById(`img-${name}`)
  }
}
class Pokemon extends Selector {
  constructor({name, hp, type, selector, attacks = [], img}) {
    super(selector);
this.pkname.innerText = name;
this.hp = {
current: hp,
total: hp,
};
this.pkimg.src = img;
this.type = type;
this.attacks = attacks;
this.renderHP();
}

renderHP = () => {
  const {elHP, elHPBar, hp: {current, total}} = this;
  this.elHP.innerText = current + ' / ' + total;
  this.elHPBar.style.width = (current / (total/100)) + '%';

  if (this.elHPBar.style.width >= '60%')
  {

    elHPBar.classList.remove("critical");
    elHPBar.classList.remove("low");

  }
  else if (this.elHPBar.style.width <= '60%' && this.elHPBar.style.width >= '20%') {
              elHPBar.classList.remove("critical");
              elHPBar.classList.add("low");
          }  else if (this.elHPBar.style.width <= '20%') {
                  elHPBar.classList.add("critical");
              }

}
strike = (dmg, ht) => {
this.hp.current -= dmg;

  if (this.hp.current <= dmg)
  {
$startBtn.style.display = 'initial';
this.hp.current = 0;
  }
this.renderHP();
ht && ht(dmg);
}
}

export default Pokemon;
