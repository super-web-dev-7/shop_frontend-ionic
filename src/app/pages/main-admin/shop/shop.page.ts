import {Component} from '@angular/core';
import {
    AlertController,
    MenuController,
    LoadingController,
    ModalController
} from '@ionic/angular';

import {HttpService} from '../../../providers';

import {
    trigger,
    style,
    animate,
    transition,
    query,
    stagger
} from '@angular/animations';
import {AddShopComponent} from './add-shop/add-shop.component';
import {EditShopComponent} from './edit-shop/edit-shop.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.page.html',
    styleUrls: ['./shop.page.scss'],
    animations: [
        trigger('staggerIn', [
            transition('* => *', [
                query(':enter', style({opacity: 0, transform: `translate3d(100px,0,0)`}), {optional: true}),
                query(':enter', stagger('300ms', [animate('500ms', style({
                    opacity: 1,
                    transform: `translate3d(0, 0, 0)`
                }))]), {optional: true})
            ])
        ])
    ]
})

export class ShopPage {

    languages: any;
    shops: any;

    constructor(
        public menuCtrl: MenuController,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController,
        private http: HttpService,
        public alertController: AlertController,
        private translate: TranslateService
    ) {
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true);
        this.findAll();
    }

    findAll() {
        this.http.getAllShops().subscribe(shops => {
            this.shops = shops;
        });
    }

    async addLanguage() {
        const modal = await this.modalCtrl.create({
            component: AddShopComponent
        });
        modal.onDidDismiss().then((data) => {
            if (data.data != null) {
                this.findAll();
            }
        });

        return await modal.present();
    }

    async editLanguage(shop) {
        const modal = await this.modalCtrl.create({
            component: EditShopComponent,
            componentProps: {
                "shop": shop
            }
        });
        modal.onDidDismiss().then((data) => {
            if (data.data != null) {
                this.findAll();
            }
        });
        return await modal.present();
    }

    async deleteShop(id) {

        const alert = await this.alertController.create({
            header: this.translate.instant('app.pages.shop.title.delete'),
            message: this.translate.instant('app.alert.shop.content'),
            buttons: [
                {
                    text: this.translate.instant('app.button.cancel'),
                    role: 'cancel',
                    cssClass: 'primary',
                    handler: (blah) => {
                    }
                }, {
                    text: this.translate.instant('app.button.delete'),
                    handler: () => {
                        this.http.deleteShop(id).subscribe(result => {
                            const index = this.shops.findIndex(shop => {
                                return id === shop._id;
                            });
                            this.shops.splice(index, 1);
                        })
                    }
                }
            ]
        });
        await alert.present();
    }
}
