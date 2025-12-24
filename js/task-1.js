const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
  // customer referans
    return this.balance;
  },
  // indirim oranı
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    // value,yeni
    this.discount = value;
  },
  // tüm siparişler
  getOrders() {
    return this.orders;
  },
  // Yeni sipariş
  addOrder(cost, order) {
  // İndirimli tutar
  this.balance -= cost - cost * this.discount;
  this.orders.push(order);
  },
  // Change code above this line
};
// kontrol
customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
