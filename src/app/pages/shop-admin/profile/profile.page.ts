import {Component} from '@angular/core';
import {
    NavController,
    AlertController,
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
import {AddProfileComponent} from './add-profile/add-profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
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

export class ProfilePage {

    languages: any;
    shops: any;
    profiles: any;

    constructor(
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController,
        private http: HttpService,
        public alertController: AlertController,
        private translate: TranslateService,
        private auth: AuthService
    ) {
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true);
        this.findAll();
    }

    findAll() {
        this.http.getProfilesForShopAdmin(this.auth.currentUserValue.shop).subscribe(profiles => {
            this.profiles = profiles;
        });
    }

    async addProfile() {
        const modal = await this.modalCtrl.create({
            component: AddProfileComponent
        });
        modal.onDidDismiss().then((data) => {
            if (data.data != null) {
                this.findAll();
            }
        });

        return await modal.present();
    }

    async editProfile(profile) {
        const modal = await this.modalCtrl.create({
            component: EditProfileComponent,
            componentProps: {
                "profile": profile
            }
        });
        modal.onDidDismiss().then((data) => {
            if (data.data != null) {
                this.findAll();
            }
        });
        return await modal.present();
    }

    async deleteProfile(id) {

        const alert = await this.alertController.create({
            header: this.translate.instant('app.pages.profile.title.delete'),
            message: this.translate.instant('app.alert.profile.content'),
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
                        this.http.deleteProfile(id).subscribe(result => {
                            this.findAll();
                        })
                    }
                }
            ]
        });
        await alert.present();
    }
}
