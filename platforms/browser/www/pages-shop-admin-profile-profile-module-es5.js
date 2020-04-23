function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shop-admin-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/profile/add-profile/add-profile.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/profile/add-profile/add-profile.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesShopAdminProfileAddProfileAddProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" (click)=\"closeModal()\">\n                <ion-icon name=\"close\" color=\"light\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            {{ 'app.pages.profile.title.add' | translate }}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <form [formGroup]=\"onRegisterForm\" class=\"list-form\">\n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"person\" item-start></ion-icon>\n                {{ 'app.label.profileName' | translate }}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"text\" formControlName=\"name\"></ion-input>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onRegisterForm.get('name').touched && onRegisterForm.get('name').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-button expand=\"full\" color=\"primary\" (click)=\"addProfile()\" [disabled]=\"!onRegisterForm.valid\">{{ 'app.button.addProfile' | translate }}</ion-button>\n    </form>\n    \n    \n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/profile/edit-profile/edit-profile.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/profile/edit-profile/edit-profile.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesShopAdminProfileEditProfileEditProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" (click)=\"closeModal()\">\n                <ion-icon name=\"close\" color=\"light\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            {{ 'app.pages.profile.title.edit' | translate }}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <form [formGroup]=\"onEditForm\" class=\"list-form\">\n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"person\" item-start></ion-icon>\n                {{ 'app.label.profileName' | translate }}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"text\" formControlName=\"name\"></ion-input>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onEditForm.get('name').touched && onEditForm.get('name').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-button expand=\"full\" color=\"primary\" (click)=\"editShop()\" [disabled]=\"!onEditForm.valid\">{{ 'app.button.editProfile' | translate }}\n        </ion-button>\n    </form>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/profile/profile.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/profile/profile.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesShopAdminProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"secondary\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            <ion-text color=\"light\">\n                {{ 'app.pages.profile.title.header' | translate }}\n            </ion-text>\n        </ion-title>\n    </ion-toolbar>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"end\">\n            <ion-button size=\"default\" shape=\"round\" (click)=\"addProfile()\">\n                <ion-icon name=\"person-add\"></ion-icon> {{'app.common.add' | translate}}\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-no-padding\" fixed>\n        <div class=\"ion-no-margin\" [@staggerIn]=\"shops\">\n        \n            <ion-item lines=\"none\" class=\"bg-white\" tappable\n                      *ngFor=\"let profile of profiles\">\n                <ion-label (click)=\"editProfile(profile)\">\n                    <h2>\n                        <ion-text color=\"dark\"><strong>{{ profile.name }}</strong></ion-text>\n                    </h2>\n                    <p class=\"text-12x\">\n                        <ion-text color=\"secondary\" class=\"fw700\" *ngIf=\"profile.shopID\">Shop: {{profile.shopID.companyName}}</ion-text>\n                    </p>\n                    <p class=\"text-12x\">\n                        <ion-text color=\"secondary\" class=\"fw700\">{{profile.isMainAdmin ? 'Main Admin' : ''}}</ion-text>\n                    </p>\n                    \n                </ion-label>\n                <ion-button slot=\"end\" (click)=\"deleteProfile(profile._id)\">\n                    <ion-icon name=\"trash\"></ion-icon>\n                </ion-button>\n            </ion-item>\n            \n        </div>\n    \n    </ion-grid>\n    \n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/shop-admin/profile/add-profile/add-profile.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/shop-admin/profile/add-profile/add-profile.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesShopAdminProfileAddProfileAddProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3AtYWRtaW4vcHJvZmlsZS9hZGQtcHJvZmlsZS9hZGQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/shop-admin/profile/add-profile/add-profile.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/shop-admin/profile/add-profile/add-profile.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AddProfileComponent */

  /***/
  function srcAppPagesShopAdminProfileAddProfileAddProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProfileComponent", function () {
      return AddProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../providers */
    "./src/app/providers/index.ts");

    var AddProfileComponent = /*#__PURE__*/function () {
      function AddProfileComponent(modalCtrl, httpRequest, formBuilder, loadingCtrl, auth) {
        _classCallCheck(this, AddProfileComponent);

        this.modalCtrl = modalCtrl;
        this.httpRequest = httpRequest;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
      }

      _createClass(AddProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onRegisterForm = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCtrl.dismiss(null);
        }
      }, {
        key: "addProfile",
        value: function addProfile() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loader, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      duration: 2000
                    });

                  case 2:
                    loader = _context.sent;
                    loader.present();
                    data = {
                      name: this.f.name.value,
                      shopId: this.auth.currentUserValue.shop,
                      isMainAdmin: false,
                      createdBy: this.auth.currentUserValue.email
                    };
                    this.httpRequest.addProfile(data).subscribe(function (result) {
                      _this.modalCtrl.dismiss(data);
                    });
                    loader.onWillDismiss().then(function () {});

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "f",
        get: function get() {
          return this.onRegisterForm.controls;
        }
      }]);

      return AddProfileComponent;
    }();

    AddProfileComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    AddProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/profile/add-profile/add-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-profile.component.scss */
      "./src/app/pages/shop-admin/profile/add-profile/add-profile.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], AddProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/shop-admin/profile/edit-profile/edit-profile.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/shop-admin/profile/edit-profile/edit-profile.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesShopAdminProfileEditProfileEditProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3AtYWRtaW4vcHJvZmlsZS9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/shop-admin/profile/edit-profile/edit-profile.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/shop-admin/profile/edit-profile/edit-profile.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: EditProfileComponent */

  /***/
  function srcAppPagesShopAdminProfileEditProfileEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
      return EditProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../providers */
    "./src/app/providers/index.ts");

    var EditProfileComponent = /*#__PURE__*/function () {
      function EditProfileComponent(modalCtrl, httpRequest, formBuilder, navParams, loadingCtrl, auth) {
        _classCallCheck(this, EditProfileComponent);

        this.modalCtrl = modalCtrl;
        this.httpRequest = httpRequest;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
      }

      _createClass(EditProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.profile = this.navParams.data.profile;
          this.onEditForm = this.formBuilder.group({
            'name': [this.profile.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCtrl.dismiss(null);
        }
      }, {
        key: "editShop",
        value: function editShop() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var loader, data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      duration: 2000
                    });

                  case 2:
                    loader = _context2.sent;
                    loader.present();
                    data = {
                      _id: this.profile._id,
                      name: this.f.name.value,
                      shopID: this.auth.currentUserValue.shop,
                      isMainAdmin: false,
                      updatedBy: this.auth.currentUserValue.email
                    };
                    this.httpRequest.editProfile(data).subscribe(function (result) {
                      loader.onWillDismiss().then(function () {
                        _this2.modalCtrl.dismiss(data);
                      });
                    });

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "f",
        get: function get() {
          return this.onEditForm.controls;
        }
      }]);

      return EditProfileComponent;
    }();

    EditProfileComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/profile/edit-profile/edit-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-profile.component.scss */
      "./src/app/pages/shop-admin/profile/edit-profile/edit-profile.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _providers__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], EditProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/shop-admin/profile/profile.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/shop-admin/profile/profile.module.ts ***!
    \************************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesShopAdminProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/shop-admin/profile/profile.page.ts");
    /* harmony import */


    var _add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add-profile/add-profile.component */
    "./src/app/pages/shop-admin/profile/add-profile/add-profile.component.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/pages/shop-admin/profile/edit-profile/edit-profile.component.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]
    }];

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"], _add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_8__["AddProfileComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__["EditProfileComponent"]],
      entryComponents: [_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_8__["AddProfileComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__["EditProfileComponent"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/shop-admin/profile/profile.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/shop-admin/profile/profile.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesShopAdminProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card {\n  border-radius: 0;\n}\n:host ion-button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcC1hZG1pbi9wcm9maWxlL0U6XFxBUFBcXElvbmljXFxzaG9waW5nXFxmb29kaW9uaWMyLWRldmVsb3Blci0yMDIwMDEyMCAtIENvcHkvc3JjXFxhcHBcXHBhZ2VzXFxzaG9wLWFkbWluXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2hvcC1hZG1pbi9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUksb0NBQUE7QUNEUjtBRElJO0VBQ0ksZ0JBQUE7RUFDQSxpREFBQTtBQ0ZSO0FES0k7RUFDSSxnQkFBQTtBQ0hSO0FETUk7RUFDSSwwQkFBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hvcC1hZG1pbi9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKVxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gaW9uLWl0ZW0ge1xyXG4vLyAgICAgLml0ZW0tbmF0aXZlIHtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbjpob3N0IGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/shop-admin/profile/profile.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/shop-admin/profile/profile.page.ts ***!
    \**********************************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesShopAdminProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers */
    "./src/app/providers/index.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-profile/add-profile.component */
    "./src/app/pages/shop-admin/profile/add-profile/add-profile.component.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/pages/shop-admin/profile/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(navCtrl, menuCtrl, modalCtrl, loadingCtrl, http, alertController, translate, auth) {
        _classCallCheck(this, ProfilePage);

        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertController = alertController;
        this.translate = translate;
        this.auth = auth;
      }

      _createClass(ProfilePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(true);
          this.findAll();
        }
      }, {
        key: "findAll",
        value: function findAll() {
          var _this3 = this;

          this.http.getProfilesForShopAdmin(this.auth.currentUserValue.shop).subscribe(function (profiles) {
            _this3.profiles = profiles;
          });
        }
      }, {
        key: "addProfile",
        value: function addProfile() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_5__["AddProfileComponent"]
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data.data != null) {
                        _this4.findAll();
                      }
                    });
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "editProfile",
        value: function editProfile(profile) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalCtrl.create({
                      component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"],
                      componentProps: {
                        "profile": profile
                      }
                    });

                  case 2:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data.data != null) {
                        _this5.findAll();
                      }
                    });
                    _context4.next = 6;
                    return modal.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "deleteProfile",
        value: function deleteProfile(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: this.translate.instant('app.pages.profile.title.delete'),
                      message: this.translate.instant('app.alert.profile.content'),
                      buttons: [{
                        text: this.translate.instant('app.button.cancel'),
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: function handler(blah) {}
                      }, {
                        text: this.translate.instant('app.button.delete'),
                        handler: function handler() {
                          _this6.http.deleteProfile(id).subscribe(function (result) {
                            _this6.findAll();
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-admin/profile/profile.page.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('staggerIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 0,
        transform: "translate3d(100px,0,0)"
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 1,
        transform: "translate3d(0, 0, 0)"
      }))]), {
        optional: true
      })])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/shop-admin/profile/profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _providers__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-shop-admin-profile-profile-module-es5.js.map