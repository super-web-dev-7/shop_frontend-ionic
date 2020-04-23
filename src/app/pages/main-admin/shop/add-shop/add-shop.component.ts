import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController} from '@ionic/angular';
import {AuthService, HttpService} from '../../../../providers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-shop',
    templateUrl: './add-shop.component.html',
    styleUrls: ['./add-shop.component.scss'],
})
export class AddShopComponent implements OnInit {

    public onRegisterForm: FormGroup;
    private status = [
        {
            name: 'Active',
            value: true
        },
        {
            name: 'Inactive',
            value: false
        }
    ];


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
            'companyName': [null, Validators.compose([
                Validators.required
            ])],
            'firstName': [null, Validators.compose([
                Validators.required
            ])],
            'lastName': [null, Validators.compose([
                Validators.required
            ])],
            'email': [null, Validators.compose([
                Validators.required
            ])],
            'status': [null, Validators.compose([
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

    async addShop() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        const data = {
            companyName: this.f.companyName.value,
            firstName: this.f.firstName.value,
            lastName: this.f.lastName.value,
            email: this.f.email.value,
            status: this.f.status.value.value,
            createdBy: this.auth.currentUserValue.email
        };

        this.httpRequest.addShop(data).subscribe(result => {
            this.modalCtrl.dismiss(data)
        });

        loader.onWillDismiss().then(() => {
        });
    }
}
