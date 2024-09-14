"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _interfaces_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/usuario */ 1464);
/* harmony import */ var _services_base_datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/base-datos.service */ 4123);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);









let LoginPage = class LoginPage {
    constructor(firestoreService, toastCtrl, router, navCtrl) {
        this.firestoreService = firestoreService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.usuario = new _interfaces_usuario__WEBPACK_IMPORTED_MODULE_2__.usuario();
    }
    ngOnInit() {
    }
    iniciarse() {
        this.usuario.user = this.user;
        this.usuario.pass = this.pass;
        this.firestoreService.recorrerBD1(this.usuario)
            .subscribe(valoresBaseDatos => {
            if (valoresBaseDatos.length != 0) {
                this.user2 = new _interfaces_usuario__WEBPACK_IMPORTED_MODULE_2__.usuario();
                this.user2 = Object.assign(this.user2, valoresBaseDatos[0]);
                console.log(this.user2.user);
                this.navCtrl.navigateBack('/tabs/tab3/' + this.user2.user);
            }
            else {
                this.showToast();
            }
        });
    }
    showToast() {
        this.toastCtrl.create({
            message: 'Error al iniciar sesion. Intentalo de nuevo',
            duration: 2000,
            cssClass: 'yourClass',
            position: 'middle'
        }).then((obj) => {
            obj.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_base_datos_service__WEBPACK_IMPORTED_MODULE_3__.BaseDatosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".titulo {\n  text-align: center;\n  color: red;\n  font-weight: bold;\n  margin-right: 10%;\n}\n\n.album {\n  background-color: black;\n  height: 80%;\n}\n\n.new-background-color {\n  --background: #000000;\n}\n\n.contenido {\n  background-color: black;\n  height: 20%;\n}\n\nh2 {\n  color: white;\n  margin-bottom: 5%;\n}\n\n.code {\n  text-align: center;\n}\n\nion-back-button {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBRUkscUJBQUE7QUFFSjs7QUFDQztFQUVHLHVCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVDO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0w7O0FBQ0M7RUFDSSxrQkFBQTtBQUVMOztBQUFDO0VBQ0csWUFBQTtBQUdKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cbi5hbGJ1bXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDgwJTtcbn1cbi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiBcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgXG4gfVxuIC5jb250ZW5pZG97XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDIwJTtcbiB9XG5cbiBoMntcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiB9XG4gLmNvZGV7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gaW9uLWJhY2stYnV0dG9ue1xuICAgIGNvbG9yOiB3aGl0ZTtcbiB9Il19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color border border-dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"titulo\">Iniciar Sesion</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"contenido\">\n    <p>h</p> \n  </div>\n  <div class=\"album\">\n  <form>\n    \n    <div class=\"code\">\n  \n    </div>\n    \n    \n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Usuario</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user\" name=\"usuario\" required></ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"pass\" name=\"pass\"required></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"iniciarse();\" color=\"danger\" expand=\"block\">Iniciar Sesion</ion-button>\n      </ion-col>\n    </ion-row>\n \n  </form>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map