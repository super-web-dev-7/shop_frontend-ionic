import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController, NavParams} from '@ionic/angular';
import { HttpService} from '../../../../providers';

@Component({
    selector: 'app-edit-country',
    templateUrl: './edit-country.component.html',
    styleUrls: ['./edit-country.component.scss'],
})
export class EditCountryComponent implements OnInit {

    public onEditForm: FormGroup;
    private languages: any;
    private country: any;

    constructor(
        private modalCtrl: ModalController,
        private httpRequest: HttpService,
        private formBuilder: FormBuilder,
        private navParams: NavParams,
        public loadingCtrl: LoadingController,
    ) {}

    ngOnInit() {
        this.country = this.navParams.data.country;
        this.httpRequest.getAllLanguages().subscribe(languages => {
            this.languages = languages;
        });
        let selectedLanguage = [];
        for (let language of this.country.languages) {
            selectedLanguage.push(language._id)
        }

        this.onEditForm = this.formBuilder.group({
            'name': [this.country.name, Validators.compose([
                Validators.required
            ])],
            'languages': [selectedLanguage, Validators.compose([
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

    async editLanguage() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        const data = {
            _id: this.country._id,
            name: this.f.name.value,
            languages: this.f.languages.value
        };

        this.httpRequest.editCountry(data).subscribe(result => {
            loader.onWillDismiss().then( () => {
                this.modalCtrl.dismiss(data)
            })
        })
    }
}
