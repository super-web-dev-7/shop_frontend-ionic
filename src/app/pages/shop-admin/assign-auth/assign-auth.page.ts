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
import {TranslateService} from '@ngx-translate/core';
import {AssignToProfileComponent} from './assign-to-profile/assign-to-profile.component';

@Component({
    selector: 'app-assign-auth',
    templateUrl: './assign-auth.page.html',
    styleUrls: ['./assign-auth.page.scss'],
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

export class AssignAuthPage {





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
        // this.http.getAssign().subscribe(res => {
        //     this.selectedUserAccess = res[0].user;
        //     this.selectedProfileAccess = res[0].profile;
        //     this.selectedShopAccess = res[0].shop;
        //     this.selectedCountryAccess = res[0].country;
        //     this.selectedLanguageAccess = res[0].language;
        //     this.setting = res[0];
        // });

        this.http.getAllProfiles().subscribe(profiles => {
            this.profiles = profiles;
        });
    }

    async assign(profile) {
        const modal = await this.modalCtrl.create({
            component: AssignToProfileComponent,
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
