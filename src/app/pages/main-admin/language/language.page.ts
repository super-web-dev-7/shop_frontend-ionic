import {Component} from '@angular/core';
import {
    NavController,
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
import {AddLanguageComponent} from './add-language/add-language.component';
import {EditLanguageComponent} from './edit-language/edit-language.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-language',
    templateUrl: './language.page.html',
    styleUrls: ['./language.page.scss'],
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

export class LanguagePage {

    languages: any;
    searchValue: String;
    filteredLanguages: any;

    constructor(
        public navCtrl: NavController,
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

    settings() {
        this.navCtrl.navigateForward('settings');
    }

    findAll() {
        this.http.getAllLanguages().subscribe(languages => {
            this.languages = languages;
            this.filteredLanguages = languages;
        })
    }

    searchLanguage() {
        this.filteredLanguages = this.languages.filter(language => {
            return language.language.toLowerCase().indexOf(this.searchValue.trim().toLowerCase()) > -1;
        })
    }

    async addLanguage() {
        const modal = await this.modalCtrl.create({
            component: AddLanguageComponent
        });
        modal.onDidDismiss().then((data) => {
            if (data.data != null) {
                // this.languages.unshift(data.data)
                this.findAll();
            }
        });

        return await modal.present();
    }

    async editLanguage(language) {
        const modal = await this.modalCtrl.create({
            component: EditLanguageComponent,
            componentProps: {
                "language": language
            }
        });
        modal.onDidDismiss().then((data) => {
            if (data.data != null) {
                // const index = this.languages.findIndex(user => {
                //     return data.data._id === user._id;
                // });
                // this.languages[index] = data.data;
                this.findAll();
            }
        });
        return await modal.present();
    }

    async deleteLanguage(id) {

        const alert = await this.alertController.create({
            header: this.translate.instant('app.pages.language.title.delete'),
            message: this.translate.instant('app.alert.language.content'),
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
                        this.http.deleteLanguage(id).subscribe(result => {
                            const index = this.languages.findIndex(user => {
                                return id === user._id;
                            });
                            this.languages.splice(index, 1);
                        })
                    }
                }
            ]
        });
        await alert.present();
    }
}
