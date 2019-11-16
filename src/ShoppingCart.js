class ShoppingCart {
  constructor() {}
  items = [];
  getItems() {
    return this.items;
  }
  addItem(itemName, quantity, price) {
    this.items.push({ name: itemName, quantity, pricePerUnit: price });
  }
  clear() {
    this.items = [];
  }
  total() {
    // return this.items
    //   .map(item => item.quantity * item.pricePerUnit)
    //   .reduce((acc, val) => acc + val, 0);
    return this.items.reduce((acc, val) => {
      const { quantity, pricePerUnit } = val;
      return acc + quantity * pricePerUnit;
    }, 0);
  }
}

module.exports = ShoppingCart;


