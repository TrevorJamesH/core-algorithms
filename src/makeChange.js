export default function makeChange({price, amountGiven}) {
  let change = amountGiven - price
  return new Change(change)
}

class Change{
  constructor(amount){
    this.quarters = this.getQuarters(amount);
    this.dimes = this.getDimes(amount - this.quarters*25);
    this.nickels = this.getNickels(amount - this.quarters*25 -this.dimes*10);
    this.pennies = amount - this.quarters*25 -this.dimes*10 -this.nickels*5;
  }

  getQuarters(amount){
    let quarters = 0
    while (amount >= 25){
      amount -= 25;
      quarters++
    }
    return quarters
  }
  getDimes(amount){
    let dimes = 0
    while (amount >= 10){
      amount -= 10;
      dimes++
    }
    return dimes
  }
  getNickels(amount){
    let nickels = 0
    while (amount >= 5){
      amount -= 5;
      nickels++
    }
    return nickels
  }
}
