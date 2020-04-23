import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {IonicModule} from '@ionic/angular';

import {CountryPage} from './country.page';
import {AddCountryComponent} from './add-country/add-country.component';
import {EditCountryComponent} from './edit-country/edit-country.component';

const routes: Routes = [
    {
        path: '',
        component: CountryPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild()
    ],
    declarations: [
        CountryPage,
        AddCountryComponent,
        EditCountryComponent
    ],
    entryComponents: [
        AddCountryComponent,
        EditCountryComponent
    ]
})
export class CountryPageModule {
}
