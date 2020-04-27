import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS, HttpClientXsrfModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AgmCoreModule} from '@agm/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {IonicStorageModule} from '@ionic/storage';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ServiceWorkerModule} from '@angular/service-worker';

// Services/Providers
import {TranslateProvider, RestaurantService} from './providers';

// Modal Pages
import {ImagePageModule} from './pages/modal/image/image.module';
import {CartPageModule} from './pages/modal/cart/cart.module';
import {LocationPageModule} from './pages/modal/location/location.module';
import {SearchFilterPageModule} from './pages/modal/search-filter/search-filter.module';

// Environment
import {environment} from '../environments/environment';

// Components
import {NotificationsComponent} from './components/notifications/notifications.component';

// Pipes
import {PipesModule} from './pipes/pipes.module';
import {BlankComponent} from './pages/blank/blank.component';
import {JwtInterceptor} from './providers/helper';
import {HttpXsrfInterceptor} from './providers/helper/csrf.interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AddUserComponent} from './pages/main-admin/users/add-user/add-user.component';
import {EditUserComponent} from './pages/main-admin/users/edit-user/edit-user.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        NotificationsComponent,
        BlankComponent,
        AddUserComponent,
        EditUserComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(environment.config),
        AppRoutingModule,
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'My-Xsrf-Cookie',
            headerName: 'My-Xsrf-Header'
        }),
        ImagePageModule,
        CartPageModule,
        LocationPageModule,
        SearchFilterPageModule,
        IonicStorageModule.forRoot({
            name: '__foodionic2',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
        }),
        PipesModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        NotificationsComponent,
        AddUserComponent,
        EditUserComponent
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true},
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        TranslateProvider,
        RestaurantService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
