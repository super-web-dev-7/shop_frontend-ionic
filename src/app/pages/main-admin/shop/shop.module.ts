import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {IonicModule} from '@ionic/angular';

import {ShopPage} from './shop.page';
import {AddShopComponent} from './add-shop/add-shop.component';
import {EditShopComponent} from './edit-shop/edit-shop.component';

const routes: Routes = [
    {
        path: '',
        component: ShopPage
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
        ShopPage,
        AddShopComponent,
        EditShopComponent
    ],
    entryComponents: [
        AddShopComponent,
        EditShopComponent
    ]
})
export class ShopPageModule {
}
