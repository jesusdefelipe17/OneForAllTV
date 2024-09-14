"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pagina-pelicula_pagina-pelicula_module_ts"],{

/***/ 5442:
/*!***************************************!*\
  !*** ./src/app/interfaces/trailer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trailer": () => (/* binding */ trailer)
/* harmony export */ });
class trailer {
}


/***/ }),

/***/ 574:
/*!************************************************!*\
  !*** ./src/app/interfaces/valoresPeliculas.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "valoresPeliculas": () => (/* binding */ valoresPeliculas)
/* harmony export */ });
class valoresPeliculas {
}


/***/ }),

/***/ 559:
/*!*******************************************************************!*\
  !*** ./src/app/pagina-pelicula/pagina-pelicula-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginaPeliculaPageRoutingModule": () => (/* binding */ PaginaPeliculaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pagina_pelicula_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagina-pelicula.page */ 2321);




const routes = [
    {
        path: '',
        component: _pagina_pelicula_page__WEBPACK_IMPORTED_MODULE_0__.PaginaPeliculaPage
    }
];
let PaginaPeliculaPageRoutingModule = class PaginaPeliculaPageRoutingModule {
};
PaginaPeliculaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaginaPeliculaPageRoutingModule);



/***/ }),

/***/ 699:
/*!***********************************************************!*\
  !*** ./src/app/pagina-pelicula/pagina-pelicula.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginaPeliculaPageModule": () => (/* binding */ PaginaPeliculaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pagina_pelicula_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagina-pelicula-routing.module */ 559);
/* harmony import */ var _pagina_pelicula_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagina-pelicula.page */ 2321);







let PaginaPeliculaPageModule = class PaginaPeliculaPageModule {
};
PaginaPeliculaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pagina_pelicula_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaginaPeliculaPageRoutingModule
        ],
        declarations: [_pagina_pelicula_page__WEBPACK_IMPORTED_MODULE_1__.PaginaPeliculaPage]
    })
], PaginaPeliculaPageModule);



/***/ }),

/***/ 2321:
/*!*********************************************************!*\
  !*** ./src/app/pagina-pelicula/pagina-pelicula.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginaPeliculaPage": () => (/* binding */ PaginaPeliculaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pagina_pelicula_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagina-pelicula.page.html?ngResource */ 9147);
/* harmony import */ var _pagina_pelicula_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagina-pelicula.page.scss?ngResource */ 613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _services_servicioPelicula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/servicioPelicula */ 2785);
/* harmony import */ var _interfaces_valoresPeliculas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/valoresPeliculas */ 574);
/* harmony import */ var _interfaces_trailer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interfaces/trailer */ 5442);
/* harmony import */ var _interfaces_reparto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interfaces/reparto */ 5251);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);












let PaginaPeliculaPage = class PaginaPeliculaPage {
    constructor(router, activatedRoute, sanitizer, servioPelicula, navCtrl) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.servioPelicula = servioPelicula;
        this.navCtrl = navCtrl;
        this.enlaces = [];
        this.url = '';
        this.valoresPeliculas = new _interfaces_valoresPeliculas__WEBPACK_IMPORTED_MODULE_3__.valoresPeliculas();
        this.trailer = new _interfaces_trailer__WEBPACK_IMPORTED_MODULE_4__.trailer();
        this.peliculas = [];
        this.reparto = new _interfaces_reparto__WEBPACK_IMPORTED_MODULE_5__.reparto();
        this.reparto_array = [];
        this.idiomaSeleccionado = 0; // Idioma por defecto
        this.cargarPelicula = false;
    }
    ngOnInit() {
        this.idPelicula = this.activatedRoute.snapshot.paramMap.get("id");
        this.servioPelicula.getPelicula(this.idPelicula).subscribe(resultados => {
            this.valoresPeliculas = resultados;
            this.enlaces = this.valoresPeliculas.links.map(l => l.replace('doodstream.com', 'dood.li'));
            this.cargarPelicula = true;
            this.updateIframeUrl(); // Actualiza la URL del iframe al cargar
        });
    }
    close() {
        this.router.navigate(['../']);
    }
    setLanguage(index) {
        this.idiomaSeleccionado = index;
        this.updateIframeUrl(); // Actualiza la URL cuando se cambia el idioma
    }
    updateIframeUrl() {
        // Actualiza la URL del iframe según el enlace seleccionado
        this.url = this.enlaces[this.idiomaSeleccionado] || this.enlaces[0];
    }
    getPeliculaStream() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
};
PaginaPeliculaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer },
    { type: _services_servicioPelicula__WEBPACK_IMPORTED_MODULE_2__.servicioPelicula },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController }
];
PaginaPeliculaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-pagina-pelicula',
        template: _pagina_pelicula_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pagina_pelicula_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaginaPeliculaPage);



/***/ }),

/***/ 613:
/*!**********************************************************************!*\
  !*** ./src/app/pagina-pelicula/pagina-pelicula.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\nion-back-button {\n  display: block;\n  color: White;\n}\n.fondo {\n  background-color: black;\n}\n.new-background-color {\n  --background: #000000;\n}\nion-title {\n  text-align: center;\n  margin-right: 10%;\n}\nion-icon {\n  color: White;\n  background-color: Black;\n  font-size: 30px;\n}\np {\n  color: white;\n}\n.card-title, h2, h3 {\n  color: white;\n}\n.titulo {\n  text-align: center;\n}\n.back {\n  position: absolute;\n  width: 100%;\n  height: 30%;\n  object-fit: cover;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #202035), color-stop(100%, #202035));\n  z-index: 1;\n  opacity: 0.7;\n  image-rendering: auto;\n}\n#imagenBack {\n  width: 100%;\n  height: 100%;\n}\n#serieImgError {\n  height: 72%;\n}\n@media only screen and (max-width: 424px) and (min-width: 375px) {\n  .back {\n    position: absolute;\n    width: 100%;\n    height: 26.5%;\n    object-fit: cover;\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #202035), color-stop(100%, #202035));\n    z-index: 1;\n    opacity: 0.7;\n    image-rendering: auto;\n  }\n}\n@media only screen and (max-width: 374px) and (min-width: 319px) {\n  .back {\n    position: absolute;\n    width: 100%;\n    height: 22.5%;\n    object-fit: cover;\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #202035), color-stop(100%, #202035));\n    z-index: 1;\n    opacity: 0.7;\n    image-rendering: auto;\n  }\n}\n.card-body {\n  text-align: center;\n  /* Centra el contenido de texto y los botones dentro de card-body */\n}\n.btn-group {\n  margin-top: 10px;\n  /* Añade un margen superior para separar los botones del contenido anterior */\n}\n.language-btn {\n  background-color: #007bff;\n  /* Color de fondo de los botones */\n  color: white;\n  /* Color del texto de los botones */\n  border: none;\n  /* Quita el borde de los botones */\n  border-radius: 5px;\n  /* Redondea las esquinas de los botones */\n  padding: 10px 20px;\n  /* Añade relleno para hacer los botones más grandes */\n  margin: 0 5px;\n  /* Añade espacio horizontal entre los botones */\n  cursor: pointer;\n  /* Cambia el cursor al pasar sobre el botón */\n  transition: background-color 0.3s ease;\n  /* Transición suave para el cambio de color de fondo */\n}\n.language-btn:hover {\n  background-color: #0056b3;\n  /* Color de fondo de los botones al pasar el mouse */\n}\n.language-btn:focus {\n  outline: none;\n  /* Quita el borde del enfoque para que se vea más limpio */\n}\n.spinner-container {\n  position: fixed;\n  /* Fija el contenedor en la pantalla */\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Fondo negro con opacidad para el contenedor de carga */\n  display: flex;\n  /* Usa flexbox para centrar el contenido */\n  justify-content: center;\n  /* Centra horizontalmente */\n  align-items: center;\n  /* Centra verticalmente */\n  z-index: 9999;\n  /* Asegúrate de que esté sobre otros elementos */\n  opacity: 1;\n  transition: opacity 0.5s ease-out;\n  /* Transición para ocultar el spinner */\n}\n.loader {\n  width: 50px;\n  height: 50px;\n  /* Ajusta el alto del spinner para que sea un círculo perfecto */\n  padding: 8px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: #25b09b;\n  --_m:\n    conic-gradient(#0000 10%, #000),\n    linear-gradient(#000 0 0) content-box;\n  -webkit-mask: var(--_m);\n  mask: var(--_m);\n  -webkit-mask-composite: source-out;\n  mask-composite: subtract;\n  animation: l3 1s infinite linear;\n}\n@keyframes l3 {\n  to {\n    transform: rotate(1turn);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYS1wZWxpY3VsYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFFSjtBQUFBO0VBQ0ksdUJBQUE7QUFHSjtBQUFDO0VBQ0UscUJBQUE7QUFHSDtBQUFBO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtBQUdIO0FBREM7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSUg7QUFGQztFQUNFLFlBQUE7QUFLSDtBQUhDO0VBQ0UsWUFBQTtBQU1IO0FBSkM7RUFDRSxrQkFBQTtBQU9IO0FBSEE7RUFDRyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwrR0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFNSDtBQUpBO0VBQ0csV0FBQTtFQUNBLFlBQUE7QUFPSDtBQUpBO0VBQ0csV0FBQTtBQU9IO0FBSkE7RUFDRztJQUNHLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLCtHQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxxQkFBQTtFQU9KO0FBQ0Y7QUFKQztFQUNFO0lBQ0csa0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsK0dBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VBTUo7QUFDRjtBQUZDO0VBQ0Usa0JBQUE7RUFBb0IsbUVBQUE7QUFLdkI7QUFGQztFQUNFLGdCQUFBO0VBQWtCLDZFQUFBO0FBTXJCO0FBSEM7RUFDRSx5QkFBQTtFQUEyQixrQ0FBQTtFQUMzQixZQUFBO0VBQWMsbUNBQUE7RUFDZCxZQUFBO0VBQWMsa0NBQUE7RUFDZCxrQkFBQTtFQUFvQix5Q0FBQTtFQUNwQixrQkFBQTtFQUFvQixxREFBQTtFQUNwQixhQUFBO0VBQWUsK0NBQUE7RUFDZixlQUFBO0VBQWlCLDZDQUFBO0VBQ2pCLHNDQUFBO0VBQXdDLHNEQUFBO0FBYzNDO0FBWEM7RUFDRSx5QkFBQTtFQUEyQixvREFBQTtBQWU5QjtBQVpDO0VBQ0UsYUFBQTtFQUFlLDBEQUFBO0FBZ0JsQjtBQWJDO0VBQ0UsZUFBQTtFQUFpQixzQ0FBQTtFQUNqQixNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFBc0MseURBQUE7RUFDdEMsYUFBQTtFQUFlLDBDQUFBO0VBQ2YsdUJBQUE7RUFBeUIsMkJBQUE7RUFDekIsbUJBQUE7RUFBcUIseUJBQUE7RUFDckIsYUFBQTtFQUFlLGdEQUFBO0VBQ2YsVUFBQTtFQUNBLGlDQUFBO0VBQW1DLHVDQUFBO0FBdUJ0QztBQXBCQztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQWMsZ0VBQUE7RUFDZCxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQTs7eUNBQUE7RUFHQSx1QkFBQTtFQUNRLGVBQUE7RUFDUixrQ0FBQTtFQUNRLHdCQUFBO0VBQ1IsZ0NBQUE7QUF3Qkg7QUFyQkM7RUFDRTtJQUFLLHdCQUFBO0VBeUJOO0FBQ0YiLCJmaWxlIjoicGFnaW5hLXBlbGljdWxhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IFdoaXRlO1xuIH1cbi5mb25kb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBcbiB9XG4gLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuIFxufVxuaW9uLXRpdGxle1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4gaW9uLWljb24ge1xuICAgY29sb3I6IFdoaXRlO1xuICAgYmFja2dyb3VuZC1jb2xvcjogQmxhY2s7XG4gICBmb250LXNpemU6IDMwcHg7IFxuIH1cbiBwe1xuICAgY29sb3I6IHdoaXRlO1xuIH1cbiAuY2FyZC10aXRsZSxoMixoM3tcbiAgIGNvbG9yOiB3aGl0ZTtcbiB9XG4gLnRpdHVsb3tcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuIFxuLmJhY2t7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDogMzAlO1xuICAgb2JqZWN0LWZpdDpjb3ZlcjtcbiAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMzEuNSwgMzEuNSwgNTIuNSwgMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMzEuNSwgMzEuNSwgNTIuNSwgMSkpKTtcbiAgIHotaW5kZXg6IDE7XG4gICBvcGFjaXR5OiAwLjc7XG4gICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XG59XG4jaW1hZ2VuQmFja3tcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jc2VyaWVJbWdFcnJvcntcbiAgIGhlaWdodDogNzIlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOjQyNHB4KSBhbmQgKG1pbi13aWR0aDogMzc1cHgpICB7IC8vUGFudGFsbGFzIG1lZGlhbmFzXG4gICAuYmFja3tcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyNi41JTtcbiAgICAgIG9iamVjdC1maXQ6Y292ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDMxLjUsIDMxLjUsIDUyLjUsIDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDMxLjUsIDMxLjUsIDUyLjUsIDEpKSk7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgaW1hZ2UtcmVuZGVyaW5nOiBhdXRvO1xuICAgfVxuIH1cblxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6Mzc0cHgpIGFuZCAobWluLXdpZHRoOiAzMTlweCkgIHsgLy9QYW50YWxsYXMgcGVxdWXDsWFzXG4gICAuYmFja3tcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMi41JTtcbiAgICAgIG9iamVjdC1maXQ6Y292ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDMxLjUsIDMxLjUsIDUyLjUsIDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDMxLjUsIDMxLjUsIDUyLjUsIDEpKSk7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgaW1hZ2UtcmVuZGVyaW5nOiBhdXRvO1xuICAgfVxuICAgXG4gfVxuXG4gLmNhcmQtYm9keSB7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRyYSBlbCBjb250ZW5pZG8gZGUgdGV4dG8geSBsb3MgYm90b25lcyBkZW50cm8gZGUgY2FyZC1ib2R5ICovXG4gfVxuIFxuIC5idG4tZ3JvdXAge1xuICAgbWFyZ2luLXRvcDogMTBweDsgLyogQcOxYWRlIHVuIG1hcmdlbiBzdXBlcmlvciBwYXJhIHNlcGFyYXIgbG9zIGJvdG9uZXMgZGVsIGNvbnRlbmlkbyBhbnRlcmlvciAqL1xuIH1cbiBcbiAubGFuZ3VhZ2UtYnRuIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7IC8qIENvbG9yIGRlIGZvbmRvIGRlIGxvcyBib3RvbmVzICovXG4gICBjb2xvcjogd2hpdGU7IC8qIENvbG9yIGRlbCB0ZXh0byBkZSBsb3MgYm90b25lcyAqL1xuICAgYm9yZGVyOiBub25lOyAvKiBRdWl0YSBlbCBib3JkZSBkZSBsb3MgYm90b25lcyAqL1xuICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSZWRvbmRlYSBsYXMgZXNxdWluYXMgZGUgbG9zIGJvdG9uZXMgKi9cbiAgIHBhZGRpbmc6IDEwcHggMjBweDsgLyogQcOxYWRlIHJlbGxlbm8gcGFyYSBoYWNlciBsb3MgYm90b25lcyBtw6FzIGdyYW5kZXMgKi9cbiAgIG1hcmdpbjogMCA1cHg7IC8qIEHDsWFkZSBlc3BhY2lvIGhvcml6b250YWwgZW50cmUgbG9zIGJvdG9uZXMgKi9cbiAgIGN1cnNvcjogcG9pbnRlcjsgLyogQ2FtYmlhIGVsIGN1cnNvciBhbCBwYXNhciBzb2JyZSBlbCBib3TDs24gKi9cbiAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlOyAvKiBUcmFuc2ljacOzbiBzdWF2ZSBwYXJhIGVsIGNhbWJpbyBkZSBjb2xvciBkZSBmb25kbyAqL1xuIH1cbiBcbiAubGFuZ3VhZ2UtYnRuOmhvdmVyIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7IC8qIENvbG9yIGRlIGZvbmRvIGRlIGxvcyBib3RvbmVzIGFsIHBhc2FyIGVsIG1vdXNlICovXG4gfVxuIFxuIC5sYW5ndWFnZS1idG46Zm9jdXMge1xuICAgb3V0bGluZTogbm9uZTsgLyogUXVpdGEgZWwgYm9yZGUgZGVsIGVuZm9xdWUgcGFyYSBxdWUgc2UgdmVhIG3DoXMgbGltcGlvICovXG4gfVxuXG4gLnNwaW5uZXItY29udGFpbmVyIHtcbiAgIHBvc2l0aW9uOiBmaXhlZDsgLyogRmlqYSBlbCBjb250ZW5lZG9yIGVuIGxhIHBhbnRhbGxhICovXG4gICB0b3A6IDA7XG4gICBsZWZ0OiAwO1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6IDEwMCU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEZvbmRvIG5lZ3JvIGNvbiBvcGFjaWRhZCBwYXJhIGVsIGNvbnRlbmVkb3IgZGUgY2FyZ2EgKi9cbiAgIGRpc3BsYXk6IGZsZXg7IC8qIFVzYSBmbGV4Ym94IHBhcmEgY2VudHJhciBlbCBjb250ZW5pZG8gKi9cbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50cmEgaG9yaXpvbnRhbG1lbnRlICovXG4gICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50cmEgdmVydGljYWxtZW50ZSAqL1xuICAgei1pbmRleDogOTk5OTsgLyogQXNlZ8O6cmF0ZSBkZSBxdWUgZXN0w6kgc29icmUgb3Ryb3MgZWxlbWVudG9zICovXG4gICBvcGFjaXR5OiAxO1xuICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0OyAvKiBUcmFuc2ljacOzbiBwYXJhIG9jdWx0YXIgZWwgc3Bpbm5lciAqL1xuIH1cbiBcbiAubG9hZGVyIHtcbiAgIHdpZHRoOiA1MHB4O1xuICAgaGVpZ2h0OiA1MHB4OyAvKiBBanVzdGEgZWwgYWx0byBkZWwgc3Bpbm5lciBwYXJhIHF1ZSBzZWEgdW4gY8OtcmN1bG8gcGVyZmVjdG8gKi9cbiAgIHBhZGRpbmc6IDhweDtcbiAgIGFzcGVjdC1yYXRpbzogMTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGJhY2tncm91bmQ6ICMyNWIwOWI7XG4gICAtLV9tOiBcbiAgICAgY29uaWMtZ3JhZGllbnQoIzAwMDAgMTAlLCAjMDAwKSxcbiAgICAgbGluZWFyLWdyYWRpZW50KCMwMDAgMCAwKSBjb250ZW50LWJveDtcbiAgIC13ZWJraXQtbWFzazogdmFyKC0tX20pO1xuICAgICAgICAgICBtYXNrOiB2YXIoLS1fbSk7XG4gICAtd2Via2l0LW1hc2stY29tcG9zaXRlOiBzb3VyY2Utb3V0O1xuICAgICAgICAgICBtYXNrLWNvbXBvc2l0ZTogc3VidHJhY3Q7XG4gICBhbmltYXRpb246IGwzIDFzIGluZmluaXRlIGxpbmVhcjtcbiB9XG4gXG4gQGtleWZyYW1lcyBsMyB7XG4gICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTsgfVxuIH1cblxuICJdfQ== */";

/***/ }),

/***/ 9147:
/*!**********************************************************************!*\
  !*** ./src/app/pagina-pelicula/pagina-pelicula.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"titulo\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-sharp\" (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"titulo\" style=\"color: red;\">\n      ONE FOR ALL \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"fondo\">\n  <div *ngIf=\"cargarPelicula\" class=\"contenido\">\n    <ion-img src=\"https://image.tmdb.org/t/p/w500{{valoresPeliculas.poster}}\" id=\"portada\"></ion-img>\n    <ul class=\"list-group list-group-flush\" style=\"background-color: black; text-align: center;\">\n      <li class=\"list-group-item\" style=\"background-color: black; color: green;\">Puntuacion: {{valoresPeliculas.calificacion}} / 10</li>\n      <ion-row style=\"text-align: center;\">\n        <ion-col>\n          <div><li class=\"list-group-item\" style=\"background-color: black;\"><ion-icon name=\"arrow-undo-outline\"></ion-icon></li></div>\n        </ion-col>\n        <ion-col>\n          <div><li class=\"list-group-item\" style=\"background-color: black;\"><ion-icon name=\"thumbs-up-outline\"></ion-icon></li></div>\n        </ion-col>\n        <ion-col>\n          <div><li class=\"list-group-item\" style=\"background-color: black;\"><ion-icon name=\"add-outline\"></ion-icon></li></div>\n        </ion-col>\n      </ion-row>\n    </ul>\n\n    <div class=\"card-body\">\n      <p class=\"card-text\">{{valoresPeliculas.descripcion}}</p>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"btn-group\">\n          <!-- Botones para cambiar idioma -->\n          <button *ngFor=\"let enlace of enlaces; let i = index\" (click)=\"setLanguage(i)\" class=\"language-btn\"> Opción {{i + 1}}</button>\n        </div>\n      </div>\n    </div>\n\n    <div style=\"text-align: center;\">\n      <iframe [src]='sanitizer.bypassSecurityTrustResourceUrl(url)' frameborder=\"0\" allowfullscreen width=\"100%\" height=\"650px\"></iframe>\n    </div>\n\n    <div style=\"text-align: center;\">\n      <h2>Reparto Principal</h2>\n    </div>\n\n    <div class=\"card-group\">\n      <div class=\"row\">\n        <div class=\"col-4 box-shadow\" *ngFor=\"let item of reparto_array.slice(0, 6);\">\n          <div *ngIf=\"item.profile_path!=null;else other_content\">\n            <img class=\"card-img-top\" src=\"https://image.tmdb.org/t/p/w500{{item.profile_path}}\" alt=\"Card image cap\">\n          </div>\n          <ng-template #other_content>\n            <img class=\"card-img-top\" id=\"serieImgError\" src=\"https://img.soluziondigital.com/img/p/es-default-home_default.jpg\" alt=\"Card image cap\">\n          </ng-template>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\" style=\"font-size: 14px !important;\">{{item.name}}</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Contenedor de carga -->\n  <div *ngIf=\"!cargarPelicula\" class=\"spinner-container\">\n    <div class=\"loader\"></div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pagina-pelicula_pagina-pelicula_module_ts.js.map