

export interface ValoresPeliculas {
    id: string,
    title: string;
    link: string;
    imgSrc: string;
    releaseDate: string;
}

export interface PeliculaResponse {
    peliculas: ValoresPeliculas[];
}

