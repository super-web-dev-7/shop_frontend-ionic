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
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.page.html',
    styleUrls: ['./users.page.scss'],
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

export class UsersPage {

    currentUser: any;
    users: any;
    filteredUsers: any;
    searchValue: String;

    constructor(
        public menuCtrl: MenuController,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController,
        private http: HttpService,
        private auth: AuthService
    ) {
        this.currentUser = this.auth.currentUserValue;
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true);
        this.findAll();
    }

    findAll() {
        this.http.getAllUsers().subscribe(users => {
            this.users = users;
            this.filteredUsers = users;
        })
    }

    searchUser() {
        this.filteredUsers = this.users.filter(user => {
            return user.email.toLowerCase().indexOf(this.searchValue.trim().toLowerCase()) > -1
                || user.firstName.toLowerCase().indexOf(this.searchValue.trim().toLowerCase()) > -1
                || user.lastName.toLowerCase().indexOf(this.searchValue.trim().toLowerCase()) > -1;
        })
    }

    async addUser() {
        const modal = await this.modalCtrl.create({
            component: AddUserComponent
        });
        modal.onDidDismiss().then((data) => {
            if (data.data != null) {
                this.findAll();
            }
        });

        return await modal.present();
    }

    async editUser(user) {
        if (!this.currentUser.profile.user.includes(3)) return;
        const modal = await this.modalCtrl.create({
            component: EditUserComponent,
            componentProps: {
                "user": user
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
