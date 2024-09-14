"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 9913:
/*!****************************************!*\
  !*** ./src/app/interfaces/busqueda.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "busqueda": () => (/* binding */ busqueda)
/* harmony export */ });
class busqueda {
}


/***/ }),

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _services_servicioPelicula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/servicioPelicula */ 2785);
/* harmony import */ var _interfaces_busqueda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/busqueda */ 9913);









let Tab2Page = class Tab2Page {
    constructor(router, activatedRoute, sanitizer, servicioPelicula) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.servicioPelicula = servicioPelicula;
        this.busqueda = new _interfaces_busqueda__WEBPACK_IMPORTED_MODULE_3__.busqueda();
        this.peliculas = [];
        this.busquedas = [];
        this.arrayBusquedas = [];
        router.events.subscribe((val) => {
            // see also 
            console.log();
        });
    }
    ngOnInit() {
        this.servicioPelicula.getPopularMovies().subscribe(response => {
            this.peliculas = response.peliculas;
        });
    }
    busquedaAplication(value) {
        if (value == "") {
            document.getElementById("drag").style.display = "block";
            document.getElementById("drag2").style.display = "none";
        }
        else {
            document.getElementById("drag").style.display = "none";
            document.getElementById("drag2").style.display = "block";
            this.servicioPelicula.getPeliculaBusqueda(value).subscribe(busquedaPeliculas => {
                this.busquedas = [];
                for (let index = 0; index < busquedaPeliculas.results.length; index++) {
                    if (busquedaPeliculas.results[index].poster_path != null) {
                        this.busquedas.push(busquedaPeliculas.results[index]);
                    }
                    else {
                        busquedaPeliculas.results.splice(index, 1);
                    }
                }
            });
            this.servicioPelicula.getSerieBusqueda(value).subscribe(busquedaSeries => {
                for (let index = 0; index < busquedaSeries.results.length; index++) {
                    if (busquedaSeries.results[index].poster_path != null) {
                        this.busquedas.push(busquedaSeries.results[index]);
                    }
                    else {
                        busquedaSeries.results.splice(index, 1);
                    }
                }
            });
            this.arrayBusquedas = this.busquedas.sort((a, b) => a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0);
            console.log(this.arrayBusquedas);
        }
    }
    onCancel(value) {
        document.getElementById("drag").style.display = "block";
        document.getElementById("drag2").style.display = "none";
    }
};
Tab2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer },
    { type: _services_servicioPelicula__WEBPACK_IMPORTED_MODULE_2__.servicioPelicula }
];
Tab2Page.propDecorators = {
    draggableElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['draggable',] }]
};
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".album {\n  background-color: black;\n}\n\n.titulo {\n  font-weight: bold;\n}\n\n.peliBusquedaInicio {\n  width: 100%;\n  height: 100%;\n}\n\nion-icon {\n  color: White;\n  background-color: Black;\n  font-size: 25px;\n}\n\n#back {\n  height: 100%;\n  background-color: Black;\n}\n\n.new-background-color {\n  --background: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFDO0VBQ0ksWUFBQTtFQUNELHVCQUFBO0FBR0o7O0FBREM7RUFDRyxxQkFBQTtBQUlKIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsYnVte1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIFxuICAgXG59XG4udGl0dWxve1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4ucGVsaUJ1c3F1ZWRhSW5pY2lve1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogV2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQmxhY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuIH1cbiAjYmFja3tcbiAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEJsYWNrO1xuIH1cbiAubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIFxuIH0iXX0= */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header translucent>\n \n  <ion-toolbar class=\"new-background-color border border-dark\">\n    <ion-searchbar (input)=\"busquedaAplication($event.target.value)\" (ionClear)=\"onCancel($event.target.value)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"back\">\n\n  \n  <div class=\"album py-5\">\n   \n    <div id=\"drag\" >\n      <div class=\"box-shadow\" *ngFor=\"let item of peliculas.slice(13, 20);\">\n\n      <ion-row style=\"text-align: center;\">\n        <ion-col>\n          <div *ngIf=\"item.poster_path!=null;else other_content\">\n           <img class=\"peliBusquedaInicio card-img-top\" src=\"https://image.tmdb.org/t/p/w500{{item.backdrop_path}}\" alt=\"Card image cap\"  onerror=\"this.onerror=null;this.src='https://increasify.com.au/wp-content/uploads/2016/08/default-image.png';\" >\n        </div>\n        <ng-template #other_content>\n          <a [routerLink]=\"['/pagina-pelicula', item.id]\" ><img class=\"card-img-top\" src=\"https://increasify.com.au/wp-content/uploads/2016/08/default-image.png\" alt=\"Card image cap\"></a>\n        </ng-template>\n        </ion-col>\n        <ion-col>\n          <div><h5 style=\"color: white; margin-top: 5%;\">{{item.title}}</h5></div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div>  <a [routerLink]=\"['/pagina-pelicula', item.id]\" ><li class=\"list-group-item\"  style=\"background-color: black;\"> <ion-icon name=\"play-outline\"></ion-icon></li></a></div>\n        </ion-col>\n      </ion-row>\n\n      </div>\n\n    </div>\n    <div id=\"drag2\" >\n      <div class=\"row card-group\">\n\n          <div  class=\"col-4 box-shadow\" *ngFor=\"let item of arrayBusquedas\">\n\n            <div *ngIf=\"item.poster_path!=null;else other_content\">\n             \n              <div *ngIf=\"item.first_air_date!=null;else other\">\n                <a [routerLink]=\"['/pagina-serie', item.id]\" ><img class=\"card-img-top\" src=\"https://image.tmdb.org/t/p/w500{{item.poster_path}}\" alt=\"Card image cap\"  onerror=\"this.onerror=null;this.src='https://increasify.com.au/wp-content/uploads/2016/08/default-image.png';\"></a>\n              \n              </div>\n              <ng-template #other>\n                <a [routerLink]=\"['/pagina-pelicula', item.id]\" ><img class=\"card-img-top\" src=\"https://image.tmdb.org/t/p/w500{{item.poster_path}}\" alt=\"Card image cap\"  onerror=\"this.onerror=null;this.src='https://increasify.com.au/wp-content/uploads/2016/08/default-image.png';\"></a>\n              </ng-template>\n              \n          </div>\n          <ng-template #other_content>\n            <a [routerLink]=\"['/pagina-pelicula', item.id]\" ><img class=\"card-img-top\" src=\"https://increasify.com.au/wp-content/uploads/2016/08/default-image.png\" alt=\"Card image cap\"></a>\n          </ng-template>\n            <div class=\"card-body\">\n            \n              <div class=\"d-flex justify-content-between align-items-center\">\n              \n                \n              </div>\n            </div>\n          </div>\n    </div>\n\n    </div>\n</div>\n</div>\n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map