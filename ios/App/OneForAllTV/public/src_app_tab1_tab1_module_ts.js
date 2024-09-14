"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_servicioPelicula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/servicioPelicula */ 2785);





let Tab1Page = class Tab1Page {
    constructor(servioPelicula) {
        this.servioPelicula = servioPelicula;
        this.peliculas = [];
        this.series = [];
        this.cargarPeliculasPopulares = false;
    }
    ngOnInit() {
        this.getPopularMovie();
        this.getPopularSeries();
    }
    getPopularMovie() {
        this.servioPelicula.getPopularMovies().subscribe(response => {
            this.peliculas = response.peliculas;
            this.cargarPeliculasPopulares = true;
        });
    }
    getPopularSeries() {
        this.servioPelicula.getSeriePopular().subscribe(series => {
            console.log(series.results);
            for (let index = 0; index < series.results.length; index++) {
                if (series.results[index].poster_path != null) {
                }
                else {
                    series.results.splice(index, 1);
                }
            }
            this.series = series.results;
            //Recorrer lista de series y eliminar la que tenga poster vacio
        });
    }
    errorHandler(event) {
        console.debug(event);
        event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_servicioPelicula__WEBPACK_IMPORTED_MODULE_2__.servicioPelicula }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.titulo {\n  text-align: center;\n  color: red;\n  font-weight: bold;\n}\n.album {\n  background-color: black;\n}\nh3 {\n  color: white;\n  text-align: center;\n}\n.new-background-color {\n  --background: #000000;\n}\n#serieImgError {\n  height: 85%;\n}\n/* HTML: <div class=\"loader\"></div> */\n.loader {\n  width: 50px;\n  padding: 8px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: #25b09b;\n  --_m:\n    conic-gradient(#0000 10%,#000),\n    linear-gradient(#000 0 0) content-box;\n  -webkit-mask: var(--_m);\n  mask: var(--_m);\n  -webkit-mask-composite: source-out;\n  mask-composite: subtract;\n  animation: l3 1s infinite linear;\n}\n@keyframes l3 {\n  to {\n    transform: rotate(1turn);\n  }\n}\n.spinner-container {\n  display: flex;\n  /* Usa flexbox para centrar el contenido */\n  justify-content: center;\n  /* Centra horizontalmente */\n  align-items: center;\n  /* Centra verticalmente */\n  opacity: 1;\n  transition: opacity 0.5s ease-out;\n  /* Transición para ocultar el spinner */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBRUo7QUFBQTtFQUNJLHVCQUFBO0FBR0o7QUFEQztFQUNHLFlBQUE7RUFDQSxrQkFBQTtBQUlKO0FBRkE7RUFDSSxxQkFBQTtBQUtKO0FBREM7RUFDSSxXQUFBO0FBSUw7QUFEQyxxQ0FBQTtBQUNEO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBOzt5Q0FBQTtFQUdBLHVCQUFBO0VBQ1EsZUFBQTtFQUNSLGtDQUFBO0VBQ1Esd0JBQUE7RUFDUixnQ0FBQTtBQUdKO0FBREU7RUFBZTtJQUFHLHdCQUFBO0VBTWxCO0FBQ0Y7QUFMRTtFQUdFLGFBQUE7RUFBZSwwQ0FBQTtFQUNmLHVCQUFBO0VBQXlCLDJCQUFBO0VBQ3pCLG1CQUFBO0VBQXFCLHlCQUFBO0VBQ3JCLFVBQUE7RUFDQSxpQ0FBQTtFQUFtQyx1Q0FBQTtBQVN2QyIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5hbGJ1bXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbiBoM3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBcbiB9XG5cbiAjc2VyaWVJbWdFcnJvcntcbiAgICAgaGVpZ2h0OiA4NSU7XG4gfVxuXG4gLyogSFRNTDogPGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PiAqL1xuLmxvYWRlciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIFxuICAgIGFzcGVjdC1yYXRpbzogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogIzI1YjA5YjtcbiAgICAtLV9tOiBcbiAgICAgIGNvbmljLWdyYWRpZW50KCMwMDAwIDEwJSwjMDAwKSxcbiAgICAgIGxpbmVhci1ncmFkaWVudCgjMDAwIDAgMCkgY29udGVudC1ib3g7XG4gICAgLXdlYmtpdC1tYXNrOiB2YXIoLS1fbSk7XG4gICAgICAgICAgICBtYXNrOiB2YXIoLS1fbSk7XG4gICAgLXdlYmtpdC1tYXNrLWNvbXBvc2l0ZTogc291cmNlLW91dDtcbiAgICAgICAgICAgIG1hc2stY29tcG9zaXRlOiBzdWJ0cmFjdDtcbiAgICBhbmltYXRpb246IGwzIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgfVxuICBAa2V5ZnJhbWVzIGwzIHt0b3t0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybil9fVxuXG4gIC5zcGlubmVyLWNvbnRhaW5lciB7XG4gIFxuICAgXG4gICAgZGlzcGxheTogZmxleDsgLyogVXNhIGZsZXhib3ggcGFyYSBjZW50cmFyIGVsIGNvbnRlbmlkbyAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50cmEgaG9yaXpvbnRhbG1lbnRlICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudHJhIHZlcnRpY2FsbWVudGUgKi9cbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dDsgLyogVHJhbnNpY2nDs24gcGFyYSBvY3VsdGFyIGVsIHNwaW5uZXIgKi9cbn1cbiJdfQ== */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<div class=\"toolbar\">\n<ion-header>\n  <ion-toolbar class=\"new-background-color border border-dark\">\n    <ion-title class=\"titulo\">\n     ONE FOR ALL TV\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n</div>\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"toolbar\">\n      <ion-title size=\"large\">Peliculas</ion-title>\n    </ion-toolbar>\n  </ion-header>\n \n  \n  <div class=\"album py-3\">\n    <div class=\"container\">\n      <h3>Peliculas Populares</h3>\n      <br>\n      <div class=\"row card-group peliculas\" *ngIf=\"cargarPeliculasPopulares\">\n       \n          <div  class=\"col-4 box-shadow\" *ngFor=\"let item of peliculas.slice(0, 12);\">\n\n            <div *ngIf=\"item.imgSrc!=null;else other_content\">\n              <a [routerLink]=\"['/pagina-pelicula', item.id]\" ><img class=\"card-img-top\" src=\"{{item.imgSrc}}\" alt=\"Card image cap\"  onerror=\"this.onerror=null;this.src='https://increasify.com.au/wp-content/uploads/2016/08/default-image.png';\"></a>\n          </div>\n          <ng-template #other_content>\n            <a [routerLink]=\"['/pagina-pelicula', item.id]\" ><img class=\"card-img-top\" src=\"https://increasify.com.au/wp-content/uploads/2016/08/default-image.png\" alt=\"Card image cap\"></a>\n          </ng-template>\n            <div class=\"card-body\">\n            \n              <div class=\"d-flex justify-content-between align-items-center\">\n               \n                \n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"!cargarPeliculasPopulares\" class=\"spinner-container\">\n          \n              <div class=\"loader\"></div>\n           \n        </div>\n    \n    </div>\n  </div>\n   <!-- <app-explore-container name=\"Tab 1 page\"></app-explore-container>-->\n   <div class=\"album py-3\">\n    <div class=\"container\">\n      <h3>Series Populares</h3>\n      <br>\n      <div class=\"row card-group\">\n       \n          <div  class=\"col-4 box-shadow\" *ngFor=\"let item of series.slice(0, 12);\">\n\n            <div *ngIf=\"item.poster_path!=null;\">\n              <a [routerLink]=\"['/pagina-serie', item.id]\" ><img class=\"card-img-top\" src=\"https://image.tmdb.org/t/p/w500{{item.poster_path}}\" alt=\"Card image cap\"  ></a>\n              <div class=\"card-body\">\n            \n                <div class=\"d-flex justify-content-between align-items-center\">\n                 \n                  \n                </div>\n              </div>\n            </div>\n          \n           \n          </div>\n        </div>\n    \n    </div>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map