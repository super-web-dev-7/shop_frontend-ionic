import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService, HttpService} from '../../../../providers';

@Component({
    selector: 'app-add-profile',
    templateUrl: './add-profile.component.html',
    styleUrls: ['./add-profile.component.scss'],
})

export class AddProfileComponent implements OnInit {

    public onRegisterForm: FormGroup;

    constructor(
        private modalCtrl: ModalController,
        private httpRequest: HttpService,
        private formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        private auth: AuthService
    ) {
    }

    ngOnInit() {
        this.onRegisterForm = this.formBuilder.group({
            'name': [null, Validators.compose([
                Validators.required
            ])]
        });
    }

    get f() {
        return this.onRegisterForm.controls;
    }

    closeModal() {
        this.modalCtrl.dismiss(null);
    }

    async addProfile() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        const data = {
            name: this.f.name.value,
            shopId: this.auth.currentUserValue.shop,
            isMainAdmin: false,
            createdBy: this.auth.currentUserValue.email
        };

        this.httpRequest.addProfile(data).subscribe(result => {
            this.modalCtrl.dismiss(data);
        });

        loader.onWillDismiss().then(() => {
        });
    }
}
