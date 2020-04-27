import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController, NavParams} from '@ionic/angular';
import {AuthService, HttpService} from '../../../../providers';

@Component({
    selector: 'app-assign-to-profile',
    templateUrl: './assign-to-profile.component.html',
    styleUrls: ['./assign-to-profile.component.scss'],
})
export class AssignToProfileComponent implements OnInit {

    private profile: any;

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

    private selectedUserAccess: any;
    private selectedProfileAccess: any;
    private selectedShopAccess: any;
    private selectedCountryAccess: any;
    private selectedLanguageAccess: any;

    constructor(
        private modalCtrl: ModalController,
        private httpRequest: HttpService,
        private formBuilder: FormBuilder,
        private navParams: NavParams,
        public loadingCtrl: LoadingController,
        private auth: AuthService
    ) {}

    ngOnInit() {
        this.profile = this.navParams.data.profile;
        this.selectedUserAccess = this.profile.user;
        this.selectedCountryAccess = this.profile.country;
        this.selectedLanguageAccess = this.profile.language;
        this.selectedShopAccess = this.profile.shop;
        this.selectedProfileAccess = this.profile.profile;
        console.log(this.profile)
    }

    closeModal() {
        this.modalCtrl.dismiss(null);
    }

    async select() {
        const data = {
            user: this.selectedUserAccess,
            profile: this.selectedProfileAccess,
            shop: this.selectedShopAccess,
            country: this.selectedCountryAccess,
            language: this.selectedLanguageAccess,
            _id: this.profile._id,
            updatedBy: this.auth.currentUserValue.email
        };

        console.log(data)
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        this.httpRequest.assignToProfile(data).subscribe(res => {
            console.log(res);
            loader.onWillDismiss().then(() => {
                this.modalCtrl.dismiss(data);
            })

        })
        // this.httpRequest.updateAssign(data).subscribe(res => {
        //     console.log(res)
        // });
    }
}
