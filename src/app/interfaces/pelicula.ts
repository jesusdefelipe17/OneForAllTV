

export interface ValoresPeliculas {
    id: string,
    title: string;
    link: string;
    imgSrc: string;
    releaseDate: string;
    title2: string;
}

export interface PeliculaResponse {
    peliculas: ValoresPeliculas[];
}

