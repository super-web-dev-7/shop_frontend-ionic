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
import {AddCountryComponent} from './add-country/add-country.component';
import {EditCountryComponent} from './edit-country/edit-country.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-country',
    templateUrl: './country.page.html',
    styleUrls: ['./country.page.scss'],
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

export class CountryPage {

    countries: any;

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
        this.http.getCountry().subscribe(countries => {
            this.countries = countries;
        });
    }

    async addCountry() {
        const modal = await this.modalCtrl.create({
            component: AddCountryComponent
        });
        modal.onDidDismiss().then((data) => {
            if (data.data != null) {
                this.findAll();
            }
        });

        return await modal.present();
    }

    async editCountry(country) {
        const modal = await this.modalCtrl.create({
            component: EditCountryComponent,
            componentProps: {
                "country": country
            }
        });
        modal.onDidDismiss().then((data) => {
            if (data.data != null) {
                this.findAll()
            }
        });
        return await modal.present();
    }

    async deleteCountry(id) {

        const alert = await this.alertController.create({
            header: this.translate.instant('app.pages.country.title.delete'),
            message: this.translate.instant('app.alert.country.content'),
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
                        this.http.deleteCountry(id).subscribe(result => {
                            const index = this.countries.findIndex(user => {
                                return id === user._id;
                            });
                            this.countries.splice(index, 1);
                        })
                    }
                }
            ]
        });
        await alert.present();
    }
}
