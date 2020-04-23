import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController, NavParams} from '@ionic/angular';
import {AuthService, HttpService} from '../../../../providers';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

    public onEditForm: FormGroup;
    private profile: any;

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

        this.onEditForm = this.formBuilder.group({
            'name': [this.profile.name, Validators.compose([
                Validators.required
            ])]
        });
    }

    get f() {
        return this.onEditForm.controls;
    }

    closeModal() {
        this.modalCtrl.dismiss(null);
    }

    async editShop() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        const data = {
            _id: this.profile._id,
            name: this.f.name.value,
            shopID: this.auth.currentUserValue.shop,
            isMainAdmin: false,
            updatedBy: this.auth.currentUserValue.email
        };

        this.httpRequest.editProfile(data).subscribe(result => {
            loader.onWillDismiss().then(() => {
                this.modalCtrl.dismiss(data);
            })
        })
    }
}
