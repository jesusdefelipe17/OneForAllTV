import { valoresPeliculas } from './valoresPeliculas';

export interface pelicula {
    page: number;
    total_results:number;
    total_pages:number;
    results:valoresPeliculas[];
}
