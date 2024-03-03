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
