"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pagina-serie_pagina-serie_module_ts"],{

/***/ 8821:
/*!*************************************!*\
  !*** ./src/app/interfaces/serie.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serie": () => (/* binding */ serie)
/* harmony export */ });
class serie {
}


/***/ }),

/***/ 9464:
/*!*****************************************!*\
  !*** ./src/app/interfaces/temporada.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "temporada": () => (/* binding */ temporada)
/* harmony export */ });
class temporada {
}


/***/ }),

/***/ 3357:
/*!*************************************************************!*\
  !*** ./src/app/pagina-serie/pagina-serie-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginaSeriePageRoutingModule": () => (/* binding */ PaginaSeriePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pagina_serie_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagina-serie.page */ 4751);




const routes = [
    {
        path: '',
        component: _pagina_serie_page__WEBPACK_IMPORTED_MODULE_0__.PaginaSeriePage
    }
];
let PaginaSeriePageRoutingModule = class PaginaSeriePageRoutingModule {
};
PaginaSeriePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaginaSeriePageRoutingModule);



/***/ }),

/***/ 1854:
/*!*****************************************************!*\
  !*** ./src/app/pagina-serie/pagina-serie.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginaSeriePageModule": () => (/* binding */ PaginaSeriePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pagina_serie_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagina-serie-routing.module */ 3357);
/* harmony import */ var _pagina_serie_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagina-serie.page */ 4751);







let PaginaSeriePageModule = class PaginaSeriePageModule {
};
PaginaSeriePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pagina_serie_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaginaSeriePageRoutingModule
        ],
        declarations: [_pagina_serie_page__WEBPACK_IMPORTED_MODULE_1__.PaginaSeriePage]
    })
], PaginaSeriePageModule);



/***/ }),

/***/ 4751:
/*!***************************************************!*\
  !*** ./src/app/pagina-serie/pagina-serie.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginaSeriePage": () => (/* binding */ PaginaSeriePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pagina_serie_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagina-serie.page.html?ngResource */ 2370);
/* harmony import */ var _pagina_serie_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagina-serie.page.scss?ngResource */ 4420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _services_servicioPelicula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/servicioPelicula */ 2785);
/* harmony import */ var _interfaces_serie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/serie */ 8821);
/* harmony import */ var _interfaces_temporada__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interfaces/temporada */ 9464);
/* harmony import */ var _interfaces_reparto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interfaces/reparto */ 5251);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);












let PaginaSeriePage = class PaginaSeriePage {
    constructor(router, activatedRoute, sanitizer, servioPelicula, navCtrl) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.servioPelicula = servioPelicula;
        this.navCtrl = navCtrl;
        this.serie = new _interfaces_serie__WEBPACK_IMPORTED_MODULE_3__.serie();
        this.temporada = new _interfaces_temporada__WEBPACK_IMPORTED_MODULE_4__.temporada();
        this.reparto = new _interfaces_reparto__WEBPACK_IMPORTED_MODULE_5__.reparto();
        this.reparto_array = [];
    }
    ngOnInit() {
        this.idSerie = this.activatedRoute.snapshot.paramMap.get("id");
        this.servioPelicula.getSerie(this.idSerie).subscribe(resultados => {
            this.serie = resultados;
            this.seasons = resultados.seasons;
            console.log(this.seasons);
        });
        this.servioPelicula.getEpisodioReparto(this.idSerie, 1).subscribe(resultados_reparto => {
            for (let index = 0; index < resultados_reparto.cast.length; index++) {
                if (resultados_reparto.cast[index].profile_path != null) {
                }
                else {
                    resultados_reparto.cast.splice(index, 1);
                }
            }
            this.reparto = resultados_reparto;
            this.reparto_array = this.reparto.cast;
        });
        /*
        this.servioPelicula.getRepartoPelicula(this.idPelicula).subscribe(resultados_reparto=>{
          
    
          console.log(this.reparto.cast);
    
          for (let index = 0; index < resultados_reparto.cast.length; index++) {
           
            if(resultados_reparto.cast[index].profile_path!=null){
    
            }else{
              resultados_reparto.cast.splice(index, 1);
            }
          }
    
          this.reparto = resultados_reparto;
    
          this.reparto_array= this.reparto.cast;
        });
        */
    }
    close() {
        this.navCtrl.back();
    }
    busquedaCapitulosTemporada(value) {
        //(<HTMLInputElement>document.getElementById("selectCapitulo")).value="";
        this.idTemporadaFinal = value;
        this.servioPelicula.getEpisodios(value, this.idSerie).subscribe(episodios => {
            this.temporada = episodios;
        });
    }
    busquedaCapitulo(value) {
        this.capitulo = value;
        this.servioPelicula.getEpisodio(value, this.idSerie, this.idTemporadaFinal).subscribe(episodio => {
        });
    }
    getSerieStream() {
        this.url = "https://www.2embed.ru/embed/tmdb/tv?id=" + this.idSerie + "&s=" + this.idTemporadaFinal + "&e=" + this.capitulo + "";
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
};
PaginaSeriePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer },
    { type: _services_servicioPelicula__WEBPACK_IMPORTED_MODULE_2__.servicioPelicula },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController }
];
PaginaSeriePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-pagina-serie',
        template: _pagina_serie_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pagina_serie_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaginaSeriePage);



/***/ }),

/***/ 4420:
/*!****************************************************************!*\
  !*** ./src/app/pagina-serie/pagina-serie.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".new-background-color {\n  --background: #000000;\n}\n\nion-title {\n  text-align: center;\n  margin-right: 10%;\n}\n\nion-icon {\n  color: White;\n  background-color: Black;\n  font-size: 30px;\n}\n\nion-back-button {\n  display: block;\n  color: White;\n}\n\n.fondo {\n  --background: #000000;\n}\n\np, h5 {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYS1zZXJpZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVDO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVDO0VBQ0csWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQztFQUNFLHFCQUFBO0FBRUg7O0FBQ0M7RUFDRyxZQUFBO0FBRUoiLCJmaWxlIjoicGFnaW5hLXNlcmllLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIFxuIH1cbiBpb24tdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuIH1cblxuIGlvbi1pY29uIHtcbiAgICBjb2xvcjogV2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQmxhY2s7XG4gICAgZm9udC1zaXplOiAzMHB4OyBcbiAgfVxuICBpb24tYmFjay1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiBXaGl0ZTtcbiB9XG5cbiAuZm9uZG97XG4gICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICBcbiB9XG4gcCxoNXtcbiAgICBjb2xvcjogd2hpdGU7XG4gfSJdfQ== */";

/***/ }),

/***/ 2370:
/*!****************************************************************!*\
  !*** ./src/app/pagina-serie/pagina-serie.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"titulo\" >\n  <ion-header class=\"titulo\" >\n    <ion-toolbar  class=\"new-background-color\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button icon=\"arrow-back-sharp\" (click)=\"close()\"></ion-back-button>\n        \n      </ion-buttons>\n      <ion-title class=\"titulo\" style=\"color: red;\">\n        ONE FOR ALL \n       </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  </div>\n\n  <ion-content class=\"fondo\">\n\n    <div class=\"fondo\">\n    \n        <div class=\"contenido\">\n          \n            <ion-img src=\"https://image.tmdb.org/t/p/w500{{serie.poster_path}}\" id=\"portada\"></ion-img>\n          \n            <ul class=\"list-group list-group-flush\" style=\"background-color: black; text-align: center;\">\n              <li class=\"list-group-item\"  style=\"background-color: black;  color: green;\">Puntuacion: {{serie.vote_average}} / 10</li>\n             \n              <ion-row style=\"text-align: center;\">\n                <ion-col>\n                  <div> <li class=\"list-group-item\"  style=\"background-color: black;\"><ion-icon name=\"arrow-undo-outline\"></ion-icon></li></div>\n                </ion-col>\n                <ion-col>\n                  <div> <li class=\"list-group-item\"  style=\"background-color: black;\"><ion-icon name=\"thumbs-up-outline\"></ion-icon></li></div>\n                </ion-col>\n    \n                <ion-col>\n                  <div> <li class=\"list-group-item\"  style=\"background-color: black;\"> <ion-icon name=\"add-outline\"></ion-icon></li></div>\n                </ion-col>\n    \n               \n              </ion-row>\n            </ul>\n          \n         \n             \n        </div>\n    \n      \n        <div class=\"card-body\">\n          <p class=\"card-text\">{{serie.overview}}</p>\n          <div class=\"d-flex justify-content-between align-items-center\">\n            <div class=\"btn-group\">\n             <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-success\" (click)=\"anadirPelicula(id)\">Añadir Pelicula</button>-->\n            </div>\n            \n          </div>\n        </div>\n        <div style=\"text-align: center;\">\n          <ion-item>\n            <ion-label>Temporada: </ion-label>\n            <ion-select placeholder=\"Selecciona temporada\" (ionChange)=\"busquedaCapitulosTemporada($event.target.value)\">\n              <ion-select-option *ngFor=\"let item of seasons;let indice=index\">{{item.season_number}}</ion-select-option>\n              \n            </ion-select>\n          </ion-item>\n\n          <ion-item id=\"capitulos\">\n            <ion-label>Capitulo: </ion-label>\n            <ion-select id=\"selectCapitulo\" placeholder=\"Selecciona episodio\" (ionChange)=\"busquedaCapitulo($event.target.value)\">\n              <ion-select-option *ngFor=\"let item of temporada.episodes;let indice=index\">{{item.episode_number}}</ion-select-option>\n              \n            </ion-select>\n          </ion-item>\n\n          <div *ngIf=\"this.capitulo!=null;\">\n            <iframe [src]='getSerieStream()'  frameborder=\"0\" allowfullscreen width=\"100%\" height=\"250px\"></iframe>\n          </div>\n          \n        </div>\n      \n        <div style=\"text-align: center;\">\n          <h2>Reparto Principal</h2>\n        </div>\n    \n        <div class=\"card-group\">\n          <div class=\"row\">\n          <div  class=\"col-4 box-shadow\" *ngFor=\"let item of reparto_array.slice(0, 6);\">\n      \n            <div *ngIf=\"item.profile_path!=null;else other_content\">\n                <img class=\"card-img-top\" src=\"https://image.tmdb.org/t/p/w500{{item.profile_path}}\" alt=\"Card image cap\">\n              </div>\n              <ng-template #other_content>\n                <img class=\"card-img-top\" id=\"serieImgError\" src=\"https://img.soluziondigital.com/img/p/es-default-home_default.jpg\" alt=\"Card image cap\">\n                </ng-template>\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\" style=\"font-size: 14px !important;\">{{item.name}}</h5>\n               \n                </div>\n              \n            \n            </div>\n          </div>\n        </div>\n      \n      \n        \n      </div>\n    \n    \n    </ion-content>\n    \n";

/***/ })

}]);
//# sourceMappingURL=src_app_pagina-serie_pagina-serie_module_ts.js.map