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
import {TranslateService} from '@ngx-translate/core';

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

    private items = [
        {
            name: 'View',
            value: 1
        },
        {
            name: 'Insert',
            value: 2
        },
        {
            name: 'Edit',
            value: 3
        },
        {
            name: 'Delete',
            value: 4
        }
    ];

    private setting: any;
    private selectedUserAccess: any;
    private selectedProfileAccess: any;
    private selectedShopAccess: any;
    private selectedCountryAccess: any;
    private selectedLanguageAccess: any;

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
        this.http.getAssign().subscribe(res => {
            this.selectedUserAccess = res[0].user;
            this.selectedProfileAccess = res[0].profile;
            this.selectedShopAccess = res[0].shop;
            this.selectedCountryAccess = res[0].country;
            this.selectedLanguageAccess = res[0].language;
            this.setting = res[0];
        })
    }

    select() {
        const data = {
            user: this.selectedUserAccess,
            profile: this.selectedProfileAccess,
            shop: this.selectedShopAccess,
            country: this.selectedCountryAccess,
            language: this.selectedLanguageAccess,
            _id: this.setting._id
        };
        this.http.updateAssign(data).subscribe(res => {
            console.log(res)
        });
    }
}
