import {Component} from '@angular/core';
import {
    MenuController,
    LoadingController,
    ModalController
} from '@ionic/angular';

import {AuthService, HttpService} from '../../../providers';

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
    searchValue: String;
    filteredShops: any;
    currentUser: any;

    constructor(
        public menuCtrl: MenuController,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController,
        private http: HttpService,
        private translate: TranslateService,
        private auth: AuthService
    ) {
        this.currentUser = this.auth.currentUserValue;
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true);
        this.findAll();
    }

    findAll() {
        this.http.getAllShops().subscribe(shops => {
            this.shops = shops;
            this.filteredShops = shops;
        });
    }

    searchShop() {
        this.filteredShops = this.shops.filter(shop => {
            return shop.companyName.toLowerCase().indexOf(this.searchValue.trim().toLowerCase()) > -1
                || shop.firstName.toLowerCase().indexOf(this.searchValue.trim().toLowerCase()) > -1
                || shop.lastName.toLowerCase().indexOf(this.searchValue.trim().toLowerCase()) > -1
                || shop.email.toLowerCase().indexOf(this.searchValue.trim().toLowerCase()) > -1;
        })
    }

    async addShop() {
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

    async editShop(shop) {
        if (!this.currentUser.profile.shop.includes(3)) return;
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
}
