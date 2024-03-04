# 🦇 Documentación de la API del Duki :smiling_imp:

Esta API proporciona acceso a canciones del artista Duki. Ofrece dos rutas GET para listar todas las canciones y buscar canciones por su ID (por el momento).
Y contiene 5 rutas solo para el acceso a un administrador (osea yo) 😉


## Endpoints

### Listar todas las canciones del Duki

```
GET /api/songs/
```

Este endpoint devuelve un array JSON que contiene todas las canciones del Duki disponibles en la base de datos.

#### Ejemplo de respuesta:

```json
[
    {
        "_id": "65e3b44b8c102a61dc669263",
        "title": "No vendo trap",
        "artists": "Duki",
        "genre": "TRAP",
        "publication_date": "11 de noviembre de 2016",
        "url": "https://www.youtube.com/watch?v=n1TkIITBujU&ab_channel=Frankzjj%27",
        "__v": 0
    },
    {
        "_id": "65e3b44b8c102a61dc669264",
        "title": "Txdx Violeta",
        "artists": "Duki , Klave",
        "genre": "TRAP",
        "publication_date": "16 de abril de 2017",
        "url": "https://www.youtube.com/watch?v=c0xohYFQS4Y&ab_channel=Klave",
        "__v": 0
    },
    ...
]
```

### Buscar una canción por su ID

```
GET /api/songs/:ID
```

Este endpoint permite buscar una canción específica por su ID. Reemplaza `:ID` con el ID alfanumérico de la canción que deseas buscar.

#### Ejemplo de solicitud:

```
GET /api/songs/65e3b44b8c102a61dc669263
```

#### Ejemplo de respuesta:

```json
{
    "_id": "65e3b44b8c102a61dc669263",
    "title": "No vendo trap",
    "artists": "Duki",
    "genre": "TRAP",
    "publication_date": "11 de noviembre de 2016",
    "url": "https://www.youtube.com/watch?v=n1TkIITBujU&ab_channel=Frankzjj%27",
    "__v": 0
}
```

### Busca las canciones de por año

```
GET /api/year/:año
```
Este endpoint permite buscar todos los lanzamientos que se hicieron en ese año. Reemplaza `:año` con el año que quieras buscar.
#### Ejemplo de solicitud:

```
GET /api/songs/2019
```
```json
{
    "_id": "65e3a530765b845f8614b901",
    "title": "Lebron",
    "artists": "Duki",
    "genre": "Trap",
    "publication_date": "1 de Enero del 2019",
    "url": "https://www.youtube.com/watch?v=zzkf4x1grXY&ab_channel=Duki",
    "__v": 0
}
```

### Busca las canciones que hizo con un artista o mas artistas

```
GET /api/with?ft=[artista/s]
```
Este endpoint permite buscar todas las canciones que tiene duki con ese artista. Reemplaza `[artista/s]` con el artista que quieras buscar.
#### Ejemplo de solicitud:

```
GET /api/with?ft=Khea
```
```json
{
    "_id": "65e39b6d765b845f8614b899",
    "title": "She Don't Give a FO",
    "artists": "Duki , Khea",
    "genre": "Trap",
    "publication_date": "7 de Noviembre de 2017",
    "url": "https://www.youtube.com/watch?v=W0yp3rSfx3I&ab_channel=MUEVARecords",
    "__v": 0
}
```



## Base URL

El base URL de esta API es:

```
https://dukiapi-mongonode-production.up.railway.app/
```

## Notas

- Todos los endpoints devuelven datos en formato JSON.
- Asegúrate de incluir el ID correcto al buscar una canción por su ID. De lo contrario, obtendrás un error.
- Esta documentación puede estar sujeta a cambios según se actualice la API.
- Todavia estoy subiendo todas las canciones, por el momento faltan las mas nuevas.
- Proximamente mas endpoints 🔜.

¡Disfruta utilizando la API del DUKO U KNOW! ✨
