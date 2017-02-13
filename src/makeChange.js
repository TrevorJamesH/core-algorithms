export default function makeChange({price, amountGiven}) {

let change = amountGiven - price
return new Change(change)
}

class Change {
  constructor(amount) {
    this.quarters = this.getCoins(amount,25);
    this.dimes = this.getCoins(amount%25,10);
    this.nickels = this.getCoins(amount%25%10,5);
    this.pennies = amount%5;
  }

  getCoins(amount,denomination){
    let coins = 0
    while (amount >= denomination){
      amount -= denomination;
      coins++
    }
    return coins
  }
}
