import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

import {
  DishService,
  CartService,
  TranslateProvider
} from '../../../providers';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage {
  orders: Array<any>;
  totalVal = 0;

  @ViewChild('slidingList', { static: false }) slidingList: IonItemSliding;

  constructor(
    public navCtrl: NavController,
    public dishService: DishService,
    public cartService: CartService,
    public route: Router,
    private modalCtrl: ModalController
  ) {
    this.getOrders();
  }

  async removeOrder (order) {
    this.cartService.removefromCart(order)
      .then(() => {
          this.getOrders();
      })
      .catch(error => alert(JSON.stringify(error)));

    await this.slidingList.close().then((a) => {});
  }

  getOrders () {
    this.cartService.getOrders().then(orders => {
      this.orders = orders;
      this.totalVal = 0;
      this.orders.forEach((val, i) => {
        this.totalVal = this.totalVal + (val.order.price * val.qtd);
      });
    });
  }

  // minus adult when click minus button
  minusQtd(order) {
    this.cartService.editQtdOrder(order, 'minus')
      .then(() => {
          this.getOrders();
      })
      .catch(error => alert(JSON.stringify(error)));
  }

  // plus adult when click plus button
  plusQtd(order) {
    this.cartService.editQtdOrder(order, 'plus')
      .then(() => {
          this.getOrders();
      })
      .catch(error => alert(JSON.stringify(error)));
  }

  openCheckout() {
    this.route.navigate(['checkout']);
    this.modalCtrl.dismiss();
    // this.navCtrl.navigateForward('checkout/');
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
