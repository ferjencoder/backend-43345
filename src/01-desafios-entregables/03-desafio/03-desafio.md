

# Servidor con express
---

## Consigna

Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.

### Aspectos a incluir

1. Se deberá utilizar la clase ProductManager que actualmente utilizamos con persistencia de archivos. 

2. Desarrollar un servidor express que, en su archivo app.js importe al archivo de ProductManager que actualmente tenemos.

3. El servidor debe contar con los siguientes endpoints:
    * ruta ‘/products’, la cual debe leer el archivo de productos y devolverlos dentro de un objeto agregar el soporte para recibir por query param el valor ?limit= el cual recibirá un límite de resultados.

4. Si no se recibe query de límite, se devolverán todos los productos.

5. Si se recibe un límite, sólo devolver el número de productos solicitados
    * ruta ‘/products/:pid’, la cual debe recibir por req.params el pid (product Id), y devolver sólo el producto solicitado, en lugar de todos los productos. 

---

## Desafío Entregable - Proceso De Testing


Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.

* Se instalarán las dependencias a partir del comando npm install.

* Se echará a andar el servidor

* Se revisará que el archivo YA CUENTE CON AL MENOS DIEZ PRODUCTOS CREADOS al momento de su entrega, es importante para que los tutores no tengan que crear los productos por sí mismos, y así agilizar el proceso de tu evaluación.

* Se corroborará que el servidor esté corriendo en el puerto 8080.

* Se mandará a llamar desde el navegador a la url http://localhost:8080/products sin query, eso debe devolver todos los 10 productos.

* Se mandará a llamar desde el navegador a la url http://localhost:8080/products?limit=5 , eso debe devolver sólo los primeros 5 de los 10 productos.

* Se mandará a llamar desde el navegador a la url http://localhost:8080/products/2, eso debe devolver sólo el producto con id=2.

* Se mandará a llamar desde el navegador a la url http://localhost:8080/products/34123123, al no existir el id del producto, debe devolver un objeto con un error indicando que el producto no existe.

## Posibles tests

1. Pruebas unitarias para **ProductManager**
- Test **getProducts()** sin un parámetro de límite y asegúrate de que devuelve todos los productos.
- Test **getProducts()** con un parámetro de límite y asegúrate de que devuelve el número correcto de productos.
- Test **addProduct()** con datos válidos y asegúrate de que añade un producto correctamente.
- Test **addProduct()** con datos incompletos y asegúrate de que lanza un error.
- Test **deleteProduct()** con un id válido y asegúrate de que borra el producto.
- Test **deleteProduct()** con un id inválido y asegúrate de que lo maneja correctamente.
- Test **getProductsByCategory()** con una categoría válida y asegúrate de que devuelve los productos correctos.
- Test **getProductsByCategory()** con una categoría inválida y asegúrate de que devuelve una lista vacía.
- Test **getProductById()** con un id válido y asegúrate de que devuelve el producto correcto.
- Test **getProductById()** con un id inválido y asegúrate de que devuelve 'ProductoNo Encontrado'.

2. Pruebas de integración para el **servidor**
- Test GET **/products** sin parámetros de consulta y asegúrate de que devuelve todos los productos.
- Test GET **/products** con el parámetro de consulta de límite y asegúrate de que devuelve el número correcto de productos.
- Test GET **/product/:id** con un id válido y asegúrate de que devuelve el producto correcto.
- Test GET **/product/:id** con un id inválido y asegúrate de que devuelve una respuesta de error.
- Test GET **/products/category/:category** con una categoría válida y asegúrate de que devuelve los productos correctos.
- Test GET **/products/category/:category** con una categoría inválida y asegúrate de que devuelve una lista vacía.