import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController, NavParams} from '@ionic/angular';
import {AuthService, HttpService} from '../../../../providers';

@Component({
    selector: 'app-edit-shop',
    templateUrl: './edit-shop.component.html',
    styleUrls: ['./edit-shop.component.scss'],
})
export class EditShopComponent implements OnInit {

    public onEditForm: FormGroup;
    private shop: any;
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
        private navParams: NavParams,
        public loadingCtrl: LoadingController,
        private auth: AuthService
    ) {}

    ngOnInit() {
        this.shop = this.navParams.data.shop;

        this.onEditForm = this.formBuilder.group({
            'companyName': [this.shop.companyName, Validators.compose([
                Validators.required
            ])],
            'firstName': [this.shop.firstName, Validators.compose([
                Validators.required
            ])],
            'lastName': [this.shop.lastName, Validators.compose([
                Validators.required
            ])],
            'email': [this.shop.email, Validators.compose([
                Validators.required
            ])],
            'status': [this.shop.status === true ? this.status[0] : this.status[1], Validators.compose([
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
            _id: this.shop._id,
            companyName: this.f.companyName.value,
            firstName: this.f.firstName.value,
            lastName: this.f.lastName.value,
            email: this.f.email.value,
            status: this.f.status.value.value,
            updatedBy: this.auth.currentUserValue.email
        };

        this.httpRequest.editShop(data).subscribe(result => {
            loader.onWillDismiss().then(() => {
                this.modalCtrl.dismiss(data);
            })
        })

    }
}
