
# ONE FOR ALL TV


Aplicacion movil para ver peliculas y series en ingles subtitulado a cualquier idioma, incluido español, tambien se incluye chromecast para enviar contenido a la TV. Es un proyecto unicamente educativo, no se utiliza ninguna pelicula ni serie unicamente utiliza una API externa para recoger los datos. En ningun momento se distribuye ningun contenido con copyright  ya que como he mencionado es unicamente educativo.


## Autor

- [@jesusdefelipe17](https://twitter.com/JesusDeFelipe17)


## Documentation

[Documentation](https://linktodocumentation)


## Referencias APIS

 APIS Utilizadas : 
 - [THE MOVIE DATABASE](https://developers.themoviedb.org/3/getting-started/introduction)
 - [2EMBED](https://www.2embed.ru/)


#### Get informacion de las Peliculas

```http
 GET https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=es-ES
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `movie_id` | `string` | **Required**. Numero de pelicula de TMDB |

De esta manera recuperas los datos de una pelicula

#### Get Video Pelicula

```http
 GET https://www.2embed.ru/embed/tmdb/movie?id=TMDB-ID
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `TMDB-ID` | `string` | **Required**. Numero de pelicula de TMDB |

De esta manera recuperas la pelicula para visualizarla



#### Get informacion de las Series

```http
 GET https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}/episode/{episode_number}?api_key=<<api_key>>&language=en-US
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `tv_id` | `string` | **Required**. Numero de serie de TMDB |
| `season_number` | `string` | **Required**. Numero de temporada de TMDB |
| `episode_number` | `string` | **Required**. Numero de episodio de TMDB |

De esta manera recuperas los datos de una serie

#### Get Video Serie

```http
 GET https://www.2embed.ru/embed/tmdb/tv?id=TMDB-ID&s=SEASON-NUMBER&e=EPISODE-NUMBER
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `TMDB-ID` | `string` | **Required**. Numero de serie de TMDB |
| `SEASON-NUMBER` | `string` | **Required**. Numero de temporada de TMDB |
| `EPISODE-NUMBER` | `string` | **Required**. Numero de episodio de TMDB |

De esta manera recuperas la serie para visualizarla

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

