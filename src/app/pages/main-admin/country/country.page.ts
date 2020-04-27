import {Component} from '@angular/core';
import {
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
import {count} from 'rxjs/operators';

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
    searchValue: String;
    filteredCountries: any;

    constructor(
        public menuCtrl: MenuController,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController,
        private http: HttpService,
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
            this.filteredCountries = countries;
        });
    }

    searchCountry() {
        this.filteredCountries = this.countries.filter(country => {
            return country.name.toLowerCase().indexOf(this.searchValue.trim().toLowerCase()) > -1;
        })
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
}
