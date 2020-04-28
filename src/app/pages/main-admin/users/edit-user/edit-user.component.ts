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
    public shops: any;
    private user: any;
    public profiles: any;
    public filteredProfiles: any;
    private roles = [
        {
            name: 'User',
            value: 0
        },
        {
            name: 'Shop Admin',
            value: 1
        },
        {
            name: "Main Admin",
            value: 2
        },
    ];

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
        console.log(this.user)
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
            'role': [this.roles[this.user.role], Validators.compose([
                Validators.required
            ])],
            'country': [this.user.country, Validators.compose([
                Validators.required
            ])],
            'language': [{value: this.user.language, disabled: false}, Validators.compose([
                Validators.required
            ])],
            'shop': [{value: this.user.role !== 2 ? this.user.shop : null, disabled: false}, Validators.compose([
                Validators.required
            ])],
            'status': [this.user.status, Validators.compose([
                Validators.required
            ])],
            'profile': [this.user.profile, Validators.compose([Validators.required])]
        });

        this.onEditUserForm.controls.country.setValue(this.user.country);

        if (this.user.role !== 1) {
            this.f.shop.disable();
        }

        this.httpRequest.getCountry().subscribe(res => {
            this.countries = res;
            const index = this.countries.findIndex(country => country._id === this.user.country._id);
            this.languages = this.countries[index].languages
        });

        this.httpRequest.getAllShops().subscribe(res => {
            this.shops = res;
        });

        this.httpRequest.getAllProfiles().subscribe(res => {
            this.profiles = res;
            if (this.user.role === 2) {
                this.filteredProfiles = this.profiles.filter(profile => {
                    return profile.isMainAdmin === true;
                });
            } else {
                this.filteredProfiles = this.profiles.filter(profile => {
                    if (profile.shopID !== null) {
                        return profile.shopID._id === this.user.shop._id;
                    }
                });
            }
        });
    }

    get f() {
        return this.onEditUserForm.controls;
    }

    selectCountry(item) {
        if (item.detail.value !== null) {
            this.languages = item.detail.value.languages;
        }
    }

    selectRole(item){
        if (item.detail.value.value === 1) {
            this.filteredProfiles = [];
            this.f.shop.setValue(null);
            this.f.shop.enable();
        } else if (item.detail.value.value === 2) {
            this.f.shop.disable();
            this.filteredProfiles = this.profiles.filter(profile => {
                return profile.isMainAdmin === true;
            });
            this.f.profile.enable();
        } else {
            this.filteredProfiles = [];
            this.f.shop.setValue(null);
            this.f.shop.enable();
        }
    }

    selectShop(item) {
        this.f.profile.setValue(null);
        if (item.detail.value !== undefined) {
            this.filteredProfiles = this.profiles.filter(profile => {
                if (profile.shopID !== null) {
                    return profile.shopID._id === item.detail.value._id;
                }
            });
            this.f.profile.enable();
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
            role: this.f.role.value.value,
            shop: this.f.role.value.value !== 2 && this.f.shop.value !== null ? this.f.shop.value._id : null,
            status: this.f.status.value,
            profile: this.f.profile.value._id
        };

        this.httpRequest.editUser(data).subscribe(result => {
            loader.onWillDismiss().then(() => {
                data.country = this.f.country.value;
                data.language = this.f.language.value;
                this.modalCtrl.dismiss(data);
            });
        });
    }
}
