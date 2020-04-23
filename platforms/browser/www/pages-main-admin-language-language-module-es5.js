function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-admin-language-language-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/language/add-language/add-language.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/language/add-language/add-language.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMainAdminLanguageAddLanguageAddLanguageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" (click)=\"closeModal()\">\n                <ion-icon name=\"close\" color=\"light\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            {{'app.pages.language.title.add' | translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <form [formGroup]=\"onRegisterForm\" class=\"list-form\">\n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"person\" item-start></ion-icon>\n                {{'app.label.language' | translate}}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"text\" formControlName=\"name\"></ion-input>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onRegisterForm.get('name').touched && onRegisterForm.get('name').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label>\n                <ion-icon name=\"trail-sign\" item-start></ion-icon>\n                {{ 'app.label.direction' | translate }}\n            </ion-label>\n            <ion-select formControlName=\"isRTL\" okText=\"OK\" cancelText=\"Cancel\">\n                <ion-select-option [value]=\"direction\" *ngFor=\"let direction of directions\" >{{direction.name}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onRegisterForm.get('isRTL').touched && onRegisterForm.get('isRTL').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        <ion-button expand=\"full\" color=\"primary\" (click)=\"addLanguage()\" [disabled]=\"!onRegisterForm.valid\">{{'app.button.addLanguage' | translate}}</ion-button>\n    </form>\n    \n    \n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/language/edit-language/edit-language.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/language/edit-language/edit-language.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMainAdminLanguageEditLanguageEditLanguageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" (click)=\"closeModal()\">\n                <ion-icon name=\"close\" color=\"light\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            {{'app.pages.language.title.edit' | translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <form [formGroup]=\"onEditForm\" class=\"list-form\">\n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"person\" item-start></ion-icon>\n                {{'app.label.language' | translate}}\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"text\" formControlName=\"name\"></ion-input>\n        </ion-item>\n        <p class=\"text08\"\n           *ngIf=\"onEditForm.get('name').touched && onEditForm.get('name').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n    \n        <ion-item class=\"ion-no-padding animated fadeInUp\">\n            <ion-label>\n                <ion-icon name=\"trail-sign\" item-start></ion-icon>\n                {{'app.label.direction' | translate}}\n            </ion-label>\n            <ion-select okText=\"OK\" cancelText=\"Cancel\" [selectedText]=\"this.f.isRTL.value.name\" formControlName=\"isRTL\">\n                <ion-select-option [value]=\"direction\"\n                                   *ngFor=\"let direction of directions\">{{direction.name}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <p color=\"warning\" class=\"text08\"\n           *ngIf=\"onEditForm.get('isRTL').touched && onEditForm.get('isRTL').hasError('required')\">\n            <ion-text color=\"warning\">\n                {{ 'app.label.errors.field' | translate }}\n            </ion-text>\n        </p>\n        \n        <ion-button expand=\"full\" color=\"primary\" (click)=\"editLanguage()\" [disabled]=\"!onEditForm.valid\">{{'app.button.editLanguage' | translate}}\n        </ion-button>\n    </form>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/language/language.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/language/language.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMainAdminLanguageLanguagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"secondary\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            <ion-text color=\"light\">\n                {{ 'app.pages.language.title.header' | translate }}\n            </ion-text>\n        </ion-title>\n    </ion-toolbar>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"end\">\n            <ion-button size=\"default\" shape=\"round\" (click)=\"addLanguage()\">\n                <ion-icon name=\"person-add\"></ion-icon> {{'app.common.add' | translate}}\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-no-padding\" fixed>\n        <div class=\"ion-no-margin\" [@staggerIn]=\"languages\">\n        \n            <ion-item lines=\"none\" class=\"bg-white\" tappable\n                      *ngFor=\"let language of languages\">\n                <ion-label (click)=\"editLanguage(language)\">\n                    <h2>\n                        <ion-text color=\"dark\"><strong>{{ language.language }}</strong></ion-text>\n                    </h2>\n                    <p class=\"text-12x\">\n                        <ion-text color=\"secondary\" class=\"fw700\">{{language.isRTL === true ? 'RTL' : 'LTR'}}</ion-text>\n                    </p>\n                    \n                </ion-label>\n                <ion-button slot=\"end\" (click)=\"deleteLanguage(language._id)\">\n                    <ion-icon name=\"trash\"></ion-icon>\n                </ion-button>\n            </ion-item>\n            \n        </div>\n    \n    </ion-grid>\n    \n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/main-admin/language/add-language/add-language.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/main-admin/language/add-language/add-language.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMainAdminLanguageAddLanguageAddLanguageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tYWRtaW4vbGFuZ3VhZ2UvYWRkLWxhbmd1YWdlL2FkZC1sYW5ndWFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/main-admin/language/add-language/add-language.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/main-admin/language/add-language/add-language.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AddLanguageComponent */

  /***/
  function srcAppPagesMainAdminLanguageAddLanguageAddLanguageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddLanguageComponent", function () {
      return AddLanguageComponent;
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
    /*! ../../../../providers */
    "./src/app/providers/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AddLanguageComponent = /*#__PURE__*/function () {
      function AddLanguageComponent(modalCtrl, httpRequest, formBuilder, loadingCtrl, auth) {
        _classCallCheck(this, AddLanguageComponent);

        this.modalCtrl = modalCtrl;
        this.httpRequest = httpRequest;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.directions = [{
          name: 'LTR',
          value: false
        }, {
          name: 'RTL',
          value: true
        }];
      }

      _createClass(AddLanguageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onRegisterForm = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'isRTL': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCtrl.dismiss(null);
        }
      }, {
        key: "addLanguage",
        value: function addLanguage() {
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
                      language: this.f.name.value,
                      isRTL: this.f.isRTL.value.value
                    };
                    this.httpRequest.addLanguage(data).subscribe(function (result) {
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

      return AddLanguageComponent;
    }();

    AddLanguageComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AddLanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-language',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-language.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/language/add-language/add-language.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-language.component.scss */
      "./src/app/pages/main-admin/language/add-language/add-language.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], AddLanguageComponent);
    /***/
  },

  /***/
  "./src/app/pages/main-admin/language/edit-language/edit-language.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/main-admin/language/edit-language/edit-language.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMainAdminLanguageEditLanguageEditLanguageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tYWRtaW4vbGFuZ3VhZ2UvZWRpdC1sYW5ndWFnZS9lZGl0LWxhbmd1YWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/main-admin/language/edit-language/edit-language.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/main-admin/language/edit-language/edit-language.component.ts ***!
    \************************************************************************************/

  /*! exports provided: EditLanguageComponent */

  /***/
  function srcAppPagesMainAdminLanguageEditLanguageEditLanguageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLanguageComponent", function () {
      return EditLanguageComponent;
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

    var EditLanguageComponent = /*#__PURE__*/function () {
      function EditLanguageComponent(modalCtrl, httpRequest, formBuilder, navParams, loadingCtrl) {
        _classCallCheck(this, EditLanguageComponent);

        this.modalCtrl = modalCtrl;
        this.httpRequest = httpRequest;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.directions = [{
          name: 'LTR',
          value: false
        }, {
          name: 'RTL',
          value: true
        }];
      }

      _createClass(EditLanguageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.language = this.navParams.data.language;
          this.onEditForm = this.formBuilder.group({
            'name': [this.language.language, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'isRTL': [this.directions[this.language.isRTL === false ? 0 : 1], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCtrl.dismiss(null);
        }
      }, {
        key: "editLanguage",
        value: function editLanguage() {
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
                      _id: this.language._id,
                      language: this.f.name.value,
                      isRTL: this.f.isRTL.value.value
                    };
                    this.httpRequest.editLanguage(data).subscribe(function (result) {
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

      return EditLanguageComponent;
    }();

    EditLanguageComponent.ctorParameters = function () {
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
      }];
    };

    EditLanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-language',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-language.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/language/edit-language/edit-language.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-language.component.scss */
      "./src/app/pages/main-admin/language/edit-language/edit-language.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _providers__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], EditLanguageComponent);
    /***/
  },

  /***/
  "./src/app/pages/main-admin/language/language.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/main-admin/language/language.module.ts ***!
    \**************************************************************/

  /*! exports provided: LanguagePageModule */

  /***/
  function srcAppPagesMainAdminLanguageLanguageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function () {
      return LanguagePageModule;
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


    var _language_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./language.page */
    "./src/app/pages/main-admin/language/language.page.ts");
    /* harmony import */


    var _add_language_add_language_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add-language/add-language.component */
    "./src/app/pages/main-admin/language/add-language/add-language.component.ts");
    /* harmony import */


    var _edit_language_edit_language_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./edit-language/edit-language.component */
    "./src/app/pages/main-admin/language/edit-language/edit-language.component.ts");

    var routes = [{
      path: '',
      component: _language_page__WEBPACK_IMPORTED_MODULE_7__["LanguagePage"]
    }];

    var LanguagePageModule = function LanguagePageModule() {
      _classCallCheck(this, LanguagePageModule);
    };

    LanguagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()],
      declarations: [_language_page__WEBPACK_IMPORTED_MODULE_7__["LanguagePage"], _add_language_add_language_component__WEBPACK_IMPORTED_MODULE_8__["AddLanguageComponent"], _edit_language_edit_language_component__WEBPACK_IMPORTED_MODULE_9__["EditLanguageComponent"]],
      entryComponents: [_add_language_add_language_component__WEBPACK_IMPORTED_MODULE_8__["AddLanguageComponent"], _edit_language_edit_language_component__WEBPACK_IMPORTED_MODULE_9__["EditLanguageComponent"]]
    })], LanguagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/main-admin/language/language.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/main-admin/language/language.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMainAdminLanguageLanguagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card {\n  border-radius: 0;\n}\n:host ion-button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1hZG1pbi9sYW5ndWFnZS9FOlxcQVBQXFxJb25pY1xcc2hvcGluZ1xcZm9vZGlvbmljMi1kZXZlbG9wZXItMjAyMDAxMjAgLSBDb3B5L3NyY1xcYXBwXFxwYWdlc1xcbWFpbi1hZG1pblxcbGFuZ3VhZ2VcXGxhbmd1YWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFpbi1hZG1pbi9sYW5ndWFnZS9sYW5ndWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxvQ0FBQTtBQ0RSO0FESUk7RUFDSSxnQkFBQTtFQUNBLGlEQUFBO0FDRlI7QURLSTtFQUNJLGdCQUFBO0FDSFI7QURNSTtFQUNJLDBCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLWFkbWluL2xhbmd1YWdlL2xhbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSlcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIGlvbi1pdGVtIHtcclxuLy8gICAgIC5pdGVtLW5hdGl2ZSB7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbi8vICAgICB9XHJcbi8vIH1cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG46aG9zdCBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/main-admin/language/language.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/main-admin/language/language.page.ts ***!
    \************************************************************/

  /*! exports provided: LanguagePage */

  /***/
  function srcAppPagesMainAdminLanguageLanguagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagePage", function () {
      return LanguagePage;
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


    var _add_language_add_language_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-language/add-language.component */
    "./src/app/pages/main-admin/language/add-language/add-language.component.ts");
    /* harmony import */


    var _edit_language_edit_language_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-language/edit-language.component */
    "./src/app/pages/main-admin/language/edit-language/edit-language.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var LanguagePage = /*#__PURE__*/function () {
      function LanguagePage(navCtrl, menuCtrl, modalCtrl, loadingCtrl, http, alertController, translate) {
        _classCallCheck(this, LanguagePage);

        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertController = alertController;
        this.translate = translate;
      }

      _createClass(LanguagePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(true);
          this.findAll();
        }
      }, {
        key: "settings",
        value: function settings() {
          this.navCtrl.navigateForward('settings');
        }
      }, {
        key: "findAll",
        value: function findAll() {
          var _this3 = this;

          this.http.getAllLanguages().subscribe(function (languages) {
            _this3.languages = languages;
          });
        }
      }, {
        key: "addLanguage",
        value: function addLanguage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _add_language_add_language_component__WEBPACK_IMPORTED_MODULE_5__["AddLanguageComponent"]
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data.data != null) {
                        // this.languages.unshift(data.data)
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
        key: "editLanguage",
        value: function editLanguage(language) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalCtrl.create({
                      component: _edit_language_edit_language_component__WEBPACK_IMPORTED_MODULE_6__["EditLanguageComponent"],
                      componentProps: {
                        "language": language
                      }
                    });

                  case 2:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data.data != null) {
                        // const index = this.languages.findIndex(user => {
                        //     return data.data._id === user._id;
                        // });
                        // this.languages[index] = data.data;
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
        key: "deleteLanguage",
        value: function deleteLanguage(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: this.translate.instant('app.pages.language.title.delete'),
                      message: this.translate.instant('app.alert.language.content'),
                      buttons: [{
                        text: this.translate.instant('app.button.cancel'),
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: function handler(blah) {}
                      }, {
                        text: this.translate.instant('app.button.delete'),
                        handler: function handler() {
                          _this6.http.deleteLanguage(id).subscribe(function (result) {
                            var index = _this6.languages.findIndex(function (user) {
                              return id === user._id;
                            });

                            _this6.languages.splice(index, 1);
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

      return LanguagePage;
    }();

    LanguagePage.ctorParameters = function () {
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
      }];
    };

    LanguagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-language',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./language.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/language/language.page.html"))["default"],
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
      /*! ./language.page.scss */
      "./src/app/pages/main-admin/language/language.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])], LanguagePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-main-admin-language-language-module-es5.js.map