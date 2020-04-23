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
    public shopLists: any;
    public isMainAdmin: Boolean = false;

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
            ])],
            'shop': [this.profile.shopID, Validators.compose([
                Validators.required
            ])]
        });

        this.isMainAdmin = this.profile.isMainAdmin;
        console.log(this.isMainAdmin)

        this.setShopID();

        this.httpRequest.getAllShops().subscribe(shopLists => {
            this.shopLists = shopLists;
        })
    }

    get f() {
        return this.onEditForm.controls;
    }

    closeModal() {
        this.modalCtrl.dismiss(null);
    }

    setShopID() {
        console.log(this.isMainAdmin)
        if (this.isMainAdmin) {
            this.f.shop.disable();
        } else {
            this.f.shop.enable();
        }
    }

    async editShop() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        const data = {
            _id: this.profile._id,
            name: this.f.name.value,
            shopID: this.isMainAdmin ? null : this.f.shop.value._id,
            isMainAdmin: this.isMainAdmin,
            updatedBy: this.auth.currentUserValue.email
        };

        this.httpRequest.editProfile(data).subscribe(result => {
            loader.onWillDismiss().then(() => {
                this.modalCtrl.dismiss(data);
            })
        })

    }
}
