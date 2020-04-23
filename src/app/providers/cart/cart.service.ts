import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orderCounter = 0;
  orders: Array<any> = [];

  addtoCart(order, qtd) {
    this.orderCounter = this.orderCounter + 1;
    this.orders.push({id: this.orderCounter, order: order, qtd: qtd});
    return Promise.resolve();
  }

  getOrders() {
    return Promise.resolve(this.orders);
  }

  removefromCart(order) {
    const index = this.orders.indexOf(order);
    if (index > -1) {
      this.orders.splice(index, 1);
    }
    return Promise.resolve();
  }

  editQtdOrder(order, op) {
    for (const i in this.orders) {
      if (this.orders[i].id === order.id) {
        if (op === 'minus') {
          this.orders[i].qtd--;
          break;
        }
        if (op === 'plus') {
          this.orders[i].qtd++;
          break;
        }
      }
    }
    
    return Promise.resolve();
  }

  cleanCart() {
    this.orders = [];
  }
}
