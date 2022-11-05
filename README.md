# _Proyecto BebidasNow_

En este proyecto creamos un ecommerce que tendrá como objetivo la venta de productos aplicado a cualquier modelo de negocio.

## Correr el proyecto localmente

$ git clone https://github.com/yoelysfigueredopadron/react-bebidas-now.git $ cd react-bebidas-now $ npm install $ npm start

Una vez instaladas todas las dependencias del proyecto desde package.json se deberá crear la estructura de la base de datos en la nube con el servicio Firebase https://console.firebase.google.com/

Debe crear una colección con el nombre products en el cual se agregaran los documentos con los campos (id, name, price, category, img, stock, description). Los id serán creados como una cadena de texto única para identificar cada registro dentro de la colección, los campos name, category, img y description serán te tipo string mientras que price y stock serán de tipo number. A continucación mostramos un ejemplo de un objeto del documento.

{ id: '0AozTLp4bQ94q4q7tMrn', name: 'Agua Pellegrino', price: 800, category: 'sin-alcohol', img: '/images/agua-pellegrino.jpg', stock: 10, description: 'Se agregará una descripción referente al producto.' }

Otra colección que se deberá crear es categories las cual va a contener 3 documentos con 3 campos puediendo agregar más a futuro de necesitar escalar la aplicación. Los nombres de los campos con sus valor label, order y slug.

El campo laver nos representa la etiqueta del contenido que se mostrará dentro de cada botón en el Navbar en lo que a categorias respecta, slug es la categoría en si que será usada para determinar el filtro por categoria además de rutear la navegación en la aplicación al momento te aplicar los filtros. El campo order es utilizado para ordernar la visualización de los botones de filtros en el Navbar.

- Ejemplo de los campos en un documento de categories

| Key   | Value               |
| ----- | ------------------- |
| label | Bebidas sin alcohol |
| order | 2                   |
| slug  | sin-alcohol         |

## License

MIT

**Free Software, Hell Yeah!**
