(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shop-admin-users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/users/add-user/add-user.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/users/add-user/add-user.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" (click)=\"closeModal()\">\n                <ion-icon name=\"close\" color=\"light\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            {{ 'app.pages.users.title.add' | translate }}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <form [formGroup]=\"onRegisterForm\" class=\"list-form\">\n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"person\" item-start></ion-icon>\n                {{ 'app.label.firstname' | translate }}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"text\" formControlName=\"firstName\"></ion-input>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onRegisterForm.get('firstName').touched && onRegisterForm.get('firstName').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"person\" item-start></ion-icon>\n                {{ 'app.label.lastname' | translate }}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"text\" formControlName=\"lastName\"></ion-input>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onRegisterForm.get('lastName').touched && onRegisterForm.get('lastName').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"mail\" item-start></ion-icon>\n                {{ 'app.label.email' | translate }}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onRegisterForm.get('email').touched && onRegisterForm.get('email').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"lock-closed\" item-start></ion-icon>\n                {{ 'app.label.password' | translate }}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <p color=\"warning\" class=\"text08\"\n           *ngIf=\"onRegisterForm.get('password').touched && onRegisterForm.get('password').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label>\n                <ion-icon name=\"settings\" item-start></ion-icon>\n                {{ 'app.label.country' | translate }}\n            </ion-label>\n            <ion-select okText=\"OK\" cancelText=\"Cancel\" (ionChange)=\"selectCountry($event)\" formControlName=\"country\">\n                <ion-select-option [value]=\"country\" *ngFor=\"let country of countries\">{{country.name}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <p color=\"warning\" class=\"text08\"\n           *ngIf=\"onRegisterForm.get('country').touched && onRegisterForm.get('country').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label>\n                <ion-icon name=\"language\" item-start></ion-icon>\n                {{ 'app.label.language' | translate }}\n            </ion-label>\n            <ion-select formControlName=\"language\" okText=\"OK\" cancelText=\"Cancel\">\n                <ion-select-option [value]=\"language\" *ngFor=\"let language of languages\" >{{language.language}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-button expand=\"full\" color=\"primary\" (click)=\"addUser()\" [disabled]=\"!onRegisterForm.valid\">{{'app.button.addUser' | translate}}</ion-button>\n    </form>\n    \n    \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/users/edit-user/edit-user.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/users/edit-user/edit-user.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" (click)=\"closeModal()\">\n                <ion-icon name=\"close\" color=\"light\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            {{'app.common.edit' | translate}} {{'app.common.user' | translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <form [formGroup]=\"onEditUserForm\" class=\"list-form\">\n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"person\" item-start></ion-icon>\n                {{ 'app.label.firstname' | translate }}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"text\" formControlName=\"firstName\"></ion-input>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onEditUserForm.get('firstName').touched && onEditUserForm.get('firstName').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"person\" item-start></ion-icon>\n                {{ 'app.label.lastname' | translate }}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"text\" formControlName=\"lastName\"></ion-input>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onEditUserForm.get('lastName').touched && onEditUserForm.get('lastName').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"mail\" item-start></ion-icon>\n                {{ 'app.label.email' | translate }}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onEditUserForm.get('email').touched && onEditUserForm.get('email').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"lock-closed\" item-start></ion-icon>\n                {{ 'app.label.password' | translate }}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <p color=\"warning\" class=\"text08\"\n           *ngIf=\"onEditUserForm.get('password').touched && onEditUserForm.get('password').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label>\n                <ion-icon name=\"settings\" item-start></ion-icon>\n                {{ 'app.label.country' | translate }}\n            </ion-label>\n            <ion-select okText=\"OK\" cancelText=\"Cancel\" [selectedText]=\"this.f.country.value.name\" (ionChange)=\"selectCountry($event)\" formControlName=\"country\">\n                <ion-select-option [value]=\"country\"\n                                   *ngFor=\"let country of countries\">{{country.name}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <p color=\"warning\" class=\"text08\"\n           *ngIf=\"onEditUserForm.get('country').touched && onEditUserForm.get('country').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label>\n                <ion-icon name=\"language\" item-start></ion-icon>\n                {{ 'app.label.language' | translate }}\n            </ion-label>\n            <ion-select formControlName=\"language\" okText=\"OK\" [selectedText]=\"this.f.language.value.language\" cancelText=\"Cancel\">\n                <ion-select-option [value]=\"language\"\n                                   *ngFor=\"let language of languages\">{{language.language}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-button expand=\"full\" color=\"primary\" (click)=\"editUser()\" [disabled]=\"!onEditUserForm.valid\">{{'app.common.edit' | translate}} {{'app.common.user' | translate}}\n        </ion-button>\n    </form>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/users/users.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/users/users.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"secondary\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            <ion-text color=\"light\">\n                {{ 'app.common.users' | translate }}\n            </ion-text>\n        </ion-title>\n    </ion-toolbar>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"end\">\n            <ion-button size=\"default\" shape=\"round\" (click)=\"addUser()\">\n                <ion-icon name=\"person-add\"></ion-icon> {{'app.common.add' | translate}}\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-no-padding\" fixed>\n        <div class=\"ion-no-margin\" [@staggerIn]=\"users\">\n        \n            <ion-item lines=\"none\" class=\"bg-white\" tappable\n                      *ngFor=\"let user of users\">\n                <ion-label (click)=\"editUser(user)\">\n                    <h2>\n                        <ion-text color=\"dark\"><strong>{{ user.firstName }} {{user.lastName}}</strong></ion-text>\n                    </h2>\n                    <p class=\"text-12x\">\n                        <ion-text color=\"secondary\" class=\"fw700\">{{user.email}}</ion-text>\n                    </p>\n                    <p class=\"text-10x\">\n                        <ion-text color=\"primary\">{{user.country.name}}({{user.language.language}})</ion-text>\n                    </p>\n                    <p class=\"text-10x\">\n                        <ion-text color=\"primary\">{{user.role == 0 ? \"User\" : user.role == 1 ? \"Shop Admin\" : \"Main Admin\"}}</ion-text>\n                    </p>\n                </ion-label>\n                <ion-button slot=\"end\" (click)=\"deleteUser(user._id)\">\n                    <ion-icon name=\"trash\"></ion-icon>\n                </ion-button>\n            </ion-item>\n            \n        </div>\n    \n    </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/shop-admin/users/add-user/add-user.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/shop-admin/users/add-user/add-user.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3AtYWRtaW4vdXNlcnMvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/shop-admin/users/add-user/add-user.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/shop-admin/users/add-user/add-user.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AddUserComponent = class AddUserComponent {
    constructor(modalCtrl, httpRequest, formBuilder, loadingCtrl, auth) {
        this.modalCtrl = modalCtrl;
        this.httpRequest = httpRequest;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.languages = [];
    }
    ngOnInit() {
        this.onRegisterForm = this.formBuilder.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            'country': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            'language': [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])]
        });
        this.httpRequest.getCountry().subscribe(res => {
            this.countries = res;
        });
    }
    get f() {
        return this.onRegisterForm.controls;
    }
    selectCountry(item) {
        if (item.detail.value !== null)
            this.languages = item.detail.value.languages;
        if (this.languages.length != 0)
            this.onRegisterForm.controls.language.enable();
    }
    closeModal() {
        this.modalCtrl.dismiss(null);
    }
    addUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                duration: 2000
            });
            loader.present();
            loader.onWillDismiss().then(() => {
                const data = {
                    firstName: this.f.firstName.value,
                    lastName: this.f.lastName.value,
                    email: this.f.email.value,
                    password: this.f.password.value,
                    country: this.f.country.value._id,
                    language: this.f.language.value._id,
                    shop: this.auth.currentUserValue.shop
                };
                this.httpRequest.addShopAdmin(data).subscribe(res => {
                    this.modalCtrl.dismiss(res);
                });
                // this.auth.register(data).pipe(first()).subscribe(
                //     data => {
                //         data.country = this.f.country.value;
                //         data.language = this.f.language.value;
                //         this.modalCtrl.dismiss(data);
                //     }, error => {
                //         console.log(error.error)
                //     }
                // );
            });
        });
    }
};
AddUserComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/users/add-user/add-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-user.component.scss */ "./src/app/pages/shop-admin/users/add-user/add-user.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], AddUserComponent);



/***/ }),

/***/ "./src/app/pages/shop-admin/users/edit-user/edit-user.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/shop-admin/users/edit-user/edit-user.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3AtYWRtaW4vdXNlcnMvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/shop-admin/users/edit-user/edit-user.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/shop-admin/users/edit-user/edit-user.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers */ "./src/app/providers/index.ts");





let EditUserComponent = class EditUserComponent {
    constructor(modalCtrl, httpRequest, formBuilder, navParams, loadingCtrl, auth) {
        this.modalCtrl = modalCtrl;
        this.httpRequest = httpRequest;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.languages = [];
    }
    ngOnInit() {
        this.user = this.navParams.data.user;
        this.onEditUserForm = this.formBuilder.group({
            'firstName': [this.user.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'lastName': [this.user.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'email': [this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'country': [this.user.country, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'language': [{ value: this.user.language, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
        this.onEditUserForm.controls.country.setValue(this.user.country);
        this.httpRequest.getCountry().subscribe(res => {
            this.countries = res;
            const index = this.countries.findIndex(country => country._id === this.user.country._id);
            this.languages = this.countries[index].languages;
        });
    }
    get f() {
        return this.onEditUserForm.controls;
    }
    selectCountry(item) {
        if (item.detail.value !== null) {
            this.languages = item.detail.value.languages;
        }
    }
    closeModal() {
        this.modalCtrl.dismiss(null);
    }
    editUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                duration: 2000
            });
            loader.present();
            const data = {
                _id: this.user._id,
                firstName: this.f.firstName.value,
                lastName: this.f.lastName.value,
                email: this.f.email.value,
                password: this.f.password.value,
                country: this.f.country.value._id,
                language: this.f.language.value._id,
            };
            this.httpRequest.editUser(data).subscribe(result => {
                loader.onWillDismiss().then(() => {
                    data.country = this.f.country.value;
                    data.language = this.f.language.value;
                    this.modalCtrl.dismiss(data);
                });
            });
        });
    }
};
EditUserComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/users/edit-user/edit-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/pages/shop-admin/users/edit-user/edit-user.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _providers__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], EditUserComponent);



/***/ }),

/***/ "./src/app/pages/shop-admin/users/users.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/shop-admin/users/users.module.ts ***!
  \********************************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users.page */ "./src/app/pages/shop-admin/users/users.page.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/pages/shop-admin/users/add-user/add-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/pages/shop-admin/users/edit-user/edit-user.component.ts");










const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_7__["UsersPage"]
    }
];
let UsersPageModule = class UsersPageModule {
};
UsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            _users_page__WEBPACK_IMPORTED_MODULE_7__["UsersPage"],
            _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
            _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__["EditUserComponent"]
        ],
        entryComponents: [
            _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
            _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__["EditUserComponent"]
        ]
    })
], UsersPageModule);



/***/ }),

/***/ "./src/app/pages/shop-admin/users/users.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/shop-admin/users/users.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card {\n  border-radius: 0;\n}\n:host ion-button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcC1hZG1pbi91c2Vycy9FOlxcQVBQXFxJb25pY1xcc2hvcGluZ1xcZm9vZGlvbmljMi1kZXZlbG9wZXItMjAyMDAxMjAgLSBDb3B5L3NyY1xcYXBwXFxwYWdlc1xcc2hvcC1hZG1pblxcdXNlcnNcXHVzZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2hvcC1hZG1pbi91c2Vycy91c2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxvQ0FBQTtBQ0RSO0FESUk7RUFDSSxnQkFBQTtFQUNBLGlEQUFBO0FDRlI7QURLSTtFQUNJLGdCQUFBO0FDSFI7QURNSTtFQUNJLDBCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG9wLWFkbWluL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSlcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIGlvbi1pdGVtIHtcclxuLy8gICAgIC5pdGVtLW5hdGl2ZSB7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbi8vICAgICB9XHJcbi8vIH1cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG46aG9zdCBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/shop-admin/users/users.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/shop-admin/users/users.page.ts ***!
  \******************************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/pages/shop-admin/users/add-user/add-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/pages/shop-admin/users/edit-user/edit-user.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let UsersPage = class UsersPage {
    constructor(menuCtrl, modalCtrl, loadingCtrl, http, alertController, translate, auth) {
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertController = alertController;
        this.translate = translate;
        this.auth = auth;
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
        console.log(this.auth.currentUserValue);
        this.findAll();
    }
    findAll() {
        this.http.getUsersForShopAdmin(this.auth.currentUserValue.shop).subscribe(users => {
            this.users = users;
        });
    }
    addUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"]
            });
            modal.onDidDismiss().then((data) => {
                if (data.data != null) {
                    this.findAll();
                }
            });
            return yield modal.present();
        });
    }
    editUser(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__["EditUserComponent"],
                componentProps: {
                    "user": user
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
    deleteUser(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const option = {
                header: this.translate.instant('app.pages.users.title.delete'),
                message: this.translate.instant('app.alert.user.content'),
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
                            this.http.deleteUser(id).subscribe(result => {
                                const index = this.users.findIndex(user => {
                                    return id === user._id;
                                });
                                this.users.splice(index, 1);
                            });
                        }
                    }
                ]
            };
            const alert = yield this.alertController.create(option);
            yield alert.present();
        });
    }
};
UsersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
UsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/users/users.page.html")).default,
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
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.page.scss */ "./src/app/pages/shop-admin/users/users.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _providers__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], UsersPage);



/***/ })

}]);
//# sourceMappingURL=pages-shop-admin-users-users-module-es2015.js.map