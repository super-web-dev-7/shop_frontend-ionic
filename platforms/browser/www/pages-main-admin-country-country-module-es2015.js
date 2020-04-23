(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-admin-country-country-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/country/add-country/add-country.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/country/add-country/add-country.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" (click)=\"closeModal()\">\n                <ion-icon name=\"close\" color=\"light\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            {{'app.pages.country.title.add' | translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <form [formGroup]=\"onRegisterForm\" class=\"list-form\">\n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"globe\" item-start></ion-icon>\n                {{'app.label.country' | translate}}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"text\" formControlName=\"name\"></ion-input>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onRegisterForm.get('name').touched && onRegisterForm.get('name').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label>\n                <ion-icon name=\"language\" item-start></ion-icon>\n                {{ 'app.label.language' | translate }}\n            </ion-label>\n            <ion-select formControlName=\"languages\" okText=\"OK\" cancelText=\"Cancel\" multiple>\n                <ion-select-option [value]=\"language\" *ngFor=\"let language of languages\" >{{language.language}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onRegisterForm.get('languages').touched && onRegisterForm.get('languages').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        <ion-button expand=\"full\" color=\"primary\" (click)=\"addCountry()\" [disabled]=\"!onRegisterForm.valid\">{{'app.button.addCountry' | translate}}</ion-button>\n    </form>\n    \n    \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/country/country.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/country/country.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"secondary\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            <ion-text color=\"light\">\n                {{ 'app.pages.country.title.header' | translate }}\n            </ion-text>\n        </ion-title>\n    </ion-toolbar>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"end\">\n            <ion-button size=\"default\" shape=\"round\" (click)=\"addCountry()\">\n                <ion-icon name=\"person-add\"></ion-icon> {{'app.common.add' | translate}}\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-no-padding\" fixed>\n        <div class=\"ion-no-margin\" [@staggerIn]=\"countries\">\n        \n            <ion-item lines=\"none\" class=\"bg-white\" tappable\n                      *ngFor=\"let country of countries\">\n                <ion-label (click)=\"editCountry(country)\">\n                    <h2>\n                        <ion-text color=\"dark\"><strong>{{ country.name }}</strong></ion-text>\n                    </h2>\n                    <p class=\"text-12x\">\n                        <ion-text color=\"secondary\" class=\"fw700\" *ngFor=\"let language of country.languages\">{{language.language}} </ion-text>\n                    </p>\n                    \n                </ion-label>\n                <ion-button slot=\"end\" (click)=\"deleteCountry(country._id)\">\n                    <ion-icon name=\"trash\"></ion-icon>\n                </ion-button>\n            </ion-item>\n            \n        </div>\n    \n    </ion-grid>\n    \n</ion-content>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/country/edit-country/edit-country.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/country/edit-country/edit-country.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" (click)=\"closeModal()\">\n                <ion-icon name=\"close\" color=\"light\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            {{'app.pages.country.title.edit' | translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <form [formGroup]=\"onEditForm\" class=\"list-form\">\n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"person\" item-start></ion-icon>\n                {{'app.label.country' | translate}}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"text\" formControlName=\"name\"></ion-input>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onEditForm.get('name').touched && onEditForm.get('name').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n    \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label>\n                <ion-icon name=\"trail-sign\" item-start></ion-icon>\n                {{ 'app.label.language' | translate }}\n            </ion-label>\n            <ion-select okText=\"OK\" cancelText=\"Cancel\" formControlName=\"languages\" multiple>\n                <ion-select-option [value]=\"language._id\"\n                                   *ngFor=\"let language of languages\">{{language.language}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <p color=\"warning\" class=\"text08\"\n           *ngIf=\"onEditForm.get('languages').touched && onEditForm.get('languages').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-button expand=\"full\" color=\"primary\" (click)=\"editLanguage()\" [disabled]=\"!onEditForm.valid\">{{'app.button.editCountry' | translate}}\n        </ion-button>\n    </form>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/main-admin/country/add-country/add-country.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/main-admin/country/add-country/add-country.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tYWRtaW4vY291bnRyeS9hZGQtY291bnRyeS9hZGQtY291bnRyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/main-admin/country/add-country/add-country.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/main-admin/country/add-country/add-country.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCountryComponent", function() { return AddCountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AddCountryComponent = class AddCountryComponent {
    constructor(modalCtrl, httpRequest, formBuilder, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.httpRequest = httpRequest;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
        this.onRegisterForm = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            'languages': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])]
        });
        this.httpRequest.getAllLanguages().subscribe(languages => {
            this.languages = languages;
        });
    }
    get f() {
        return this.onRegisterForm.controls;
    }
    closeModal() {
        this.modalCtrl.dismiss(null);
    }
    addCountry() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                duration: 2000
            });
            loader.present();
            const data = {
                name: this.f.name.value,
                languages: this.f.languages.value,
            };
            this.httpRequest.addCountry(data).subscribe(result => {
                this.modalCtrl.dismiss(data);
            });
            loader.onWillDismiss().then(() => {
            });
        });
    }
};
AddCountryComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
AddCountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-country',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-country.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/country/add-country/add-country.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-country.component.scss */ "./src/app/pages/main-admin/country/add-country/add-country.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], AddCountryComponent);



/***/ }),

/***/ "./src/app/pages/main-admin/country/country.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/main-admin/country/country.module.ts ***!
  \************************************************************/
/*! exports provided: CountryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryPageModule", function() { return CountryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _country_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country.page */ "./src/app/pages/main-admin/country/country.page.ts");
/* harmony import */ var _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-country/add-country.component */ "./src/app/pages/main-admin/country/add-country/add-country.component.ts");
/* harmony import */ var _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-country/edit-country.component */ "./src/app/pages/main-admin/country/edit-country/edit-country.component.ts");










const routes = [
    {
        path: '',
        component: _country_page__WEBPACK_IMPORTED_MODULE_7__["CountryPage"]
    }
];
let CountryPageModule = class CountryPageModule {
};
CountryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
        ],
        declarations: [
            _country_page__WEBPACK_IMPORTED_MODULE_7__["CountryPage"],
            _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_8__["AddCountryComponent"],
            _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_9__["EditCountryComponent"]
        ],
        entryComponents: [
            _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_8__["AddCountryComponent"],
            _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_9__["EditCountryComponent"]
        ]
    })
], CountryPageModule);



/***/ }),

/***/ "./src/app/pages/main-admin/country/country.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/main-admin/country/country.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card {\n  border-radius: 0;\n}\n:host ion-button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1hZG1pbi9jb3VudHJ5L0U6XFxBUFBcXElvbmljXFxzaG9waW5nXFxmb29kaW9uaWMyLWRldmVsb3Blci0yMDIwMDEyMCAtIENvcHkvc3JjXFxhcHBcXHBhZ2VzXFxtYWluLWFkbWluXFxjb3VudHJ5XFxjb3VudHJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFpbi1hZG1pbi9jb3VudHJ5L2NvdW50cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUksb0NBQUE7QUNEUjtBRElJO0VBQ0ksZ0JBQUE7RUFDQSxpREFBQTtBQ0ZSO0FES0k7RUFDSSxnQkFBQTtBQ0hSO0FETUk7RUFDSSwwQkFBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1hZG1pbi9jb3VudHJ5L2NvdW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKVxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gaW9uLWl0ZW0ge1xyXG4vLyAgICAgLml0ZW0tbmF0aXZlIHtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbjpob3N0IGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/main-admin/country/country.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-admin/country/country.page.ts ***!
  \**********************************************************/
/*! exports provided: CountryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryPage", function() { return CountryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-country/add-country.component */ "./src/app/pages/main-admin/country/add-country/add-country.component.ts");
/* harmony import */ var _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-country/edit-country.component */ "./src/app/pages/main-admin/country/edit-country/edit-country.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let CountryPage = class CountryPage {
    constructor(menuCtrl, modalCtrl, loadingCtrl, http, alertController, translate) {
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertController = alertController;
        this.translate = translate;
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
        this.findAll();
    }
    findAll() {
        this.http.getCountry().subscribe(countries => {
            this.countries = countries;
        });
    }
    addCountry() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_5__["AddCountryComponent"]
            });
            modal.onDidDismiss().then((data) => {
                if (data.data != null) {
                    this.findAll();
                }
            });
            return yield modal.present();
        });
    }
    editCountry(country) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_6__["EditCountryComponent"],
                componentProps: {
                    "country": country
                }
            });
            modal.onDidDismiss().then((data) => {
                if (data.data != null) {
                    this.findAll();
                }
            });
            return yield modal.present();
        });
    }
    deleteCountry(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.translate.instant('app.pages.country.title.delete'),
                message: this.translate.instant('app.alert.country.content'),
                buttons: [
                    {
                        text: this.translate.instant('app.button.cancel'),
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: (blah) => {
                        }
                    }, {
                        text: this.translate.instant('app.button.delete'),
                        handler: () => {
                            this.http.deleteCountry(id).subscribe(result => {
                                const index = this.countries.findIndex(user => {
                                    return id === user._id;
                                });
                                this.countries.splice(index, 1);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CountryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
CountryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-country',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./country.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/country/country.page.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: `translate3d(100px,0,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            opacity: 1,
                            transform: `translate3d(0, 0, 0)`
                        }))]), { optional: true })
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./country.page.scss */ "./src/app/pages/main-admin/country/country.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
], CountryPage);



/***/ }),

/***/ "./src/app/pages/main-admin/country/edit-country/edit-country.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/main-admin/country/edit-country/edit-country.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tYWRtaW4vY291bnRyeS9lZGl0LWNvdW50cnkvZWRpdC1jb3VudHJ5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/main-admin/country/edit-country/edit-country.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/main-admin/country/edit-country/edit-country.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCountryComponent", function() { return EditCountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers */ "./src/app/providers/index.ts");





let EditCountryComponent = class EditCountryComponent {
    constructor(modalCtrl, httpRequest, formBuilder, navParams, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.httpRequest = httpRequest;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
        this.country = this.navParams.data.country;
        this.httpRequest.getAllLanguages().subscribe(languages => {
            this.languages = languages;
        });
        let selectedLanguage = [];
        for (let language of this.country.languages) {
            selectedLanguage.push(language._id);
        }
        this.onEditForm = this.formBuilder.group({
            'name': [this.country.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'languages': [selectedLanguage, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
    }
    get f() {
        return this.onEditForm.controls;
    }
    closeModal() {
        this.modalCtrl.dismiss(null);
    }
    editLanguage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                duration: 2000
            });
            loader.present();
            const data = {
                _id: this.country._id,
                name: this.f.name.value,
                languages: this.f.languages.value
            };
            this.httpRequest.editCountry(data).subscribe(result => {
                loader.onWillDismiss().then(() => {
                    this.modalCtrl.dismiss(data);
                });
            });
        });
    }
};
EditCountryComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
EditCountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-country',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-country.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/country/edit-country/edit-country.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-country.component.scss */ "./src/app/pages/main-admin/country/edit-country/edit-country.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _providers__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], EditCountryComponent);



/***/ })

}]);
//# sourceMappingURL=pages-main-admin-country-country-module-es2015.js.map