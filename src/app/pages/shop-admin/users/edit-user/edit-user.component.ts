import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController, NavParams} from '@ionic/angular';
import {AuthService, HttpService} from '../../../../providers';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {

    public onEditUserForm: FormGroup;
    public countries: any;
    public languages = [];
    private user: any;
    public profiles: any;

    constructor(
        private modalCtrl: ModalController,
        private httpRequest: HttpService,
        private formBuilder: FormBuilder,
        private navParams: NavParams,
        public loadingCtrl: LoadingController,
        private auth: AuthService
    ) {}

    ngOnInit() {
        this.user = this.navParams.data.user;
        this.onEditUserForm = this.formBuilder.group({
            'firstName': [this.user.firstName, Validators.compose([
                Validators.required
            ])],
            'lastName': [this.user.lastName, Validators.compose([
                Validators.required
            ])],
            'email': [this.user.email, Validators.compose([
                Validators.required
            ])],
            'country': [this.user.country, Validators.compose([
                Validators.required
            ])],
            'language': [{value: this.user.language, disabled: false}, Validators.compose([
                Validators.required
            ])],
            'profile': [this.user.profile],
            'status': [this.user.status, Validators.compose([
                Validators.required
            ])]
        });

        this.onEditUserForm.controls.country.setValue(this.user.country)
        this.httpRequest.getCountry().subscribe(res => {
            this.countries = res;
            const index = this.countries.findIndex(country => country._id === this.user.country._id);
            this.languages = this.countries[index].languages
        });

        this.httpRequest.getProfilesForShopAdmin(this.auth.currentUserValue.shop).subscribe(profiles => {
            this.profiles = profiles;
        })
    }

    get f() {
        return this.onEditUserForm.controls;
    }

    selectCountry(item) {
        if (item.detail.value !== null) {
            this.languages = item.detail.value.languages;
        }
    }

    closeModal() {
        this.modalCtrl.dismiss(null);
    }

    async editUser() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        const data = {
            _id: this.user._id,
            firstName: this.f.firstName.value,
            lastName: this.f.lastName.value,
            email: this.f.email.value,
            country: this.f.country.value._id,
            language: this.f.language.value._id,
            profile: this.f.profile.value._id,
            status: this.f.status.value
        };

        this.httpRequest.editUser(data).subscribe(result => {
            loader.onWillDismiss().then(() => {
                this.modalCtrl.dismiss(data);
            });
        });
    }
}
