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
        this.http.getAllProfiles().subscribe(profiles => {
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
}
