
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Righteous&size=25&pause=400&color=FF029C&multiline=true&width=680&height=150&lines=Hola!+%F0%9F%91%8B+Soy+ferJen)](https://git.io/typing-svg)

# Desafío Entregable - Proceso de Testing
## Clases con ECMAScript y ECMAScript avanzado

---
Este ejercicio consiste en crear una instancia de la clase ProductManager y realizar algunas pruebas para evaluar su correcto funcionamiento.

- Se creará una instancia de la clase “ProductManager”
- Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
- Se llamará al método “addProduct” con los campos:

        title: “producto prueba”
        description:”Este es un producto prueba”
        price:200,
        thumbnail:”Sin imagen”
        code:”abc123”,
        stock:25

- El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
- Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
- Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
- Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo


## Ejecución de las pruebas

Para ejecutar las pruebas, siga los siguientes pasos:

Clone el repositorio a su máquina local.
Abra la terminal y navegue hasta la carpeta del proyecto.
Ejecute el comando npm install para instalar las dependencias necesarias.
Ejecute el comando npm test para ejecutar las pruebas.

## Conclusiones
Al finalizar la ejecución de las pruebas, se debería obtener una salida similar a la siguiente:

sql
Copy code
PASS  ./test/productManager.test.js
  ProductManager
    ✓ should create an instance of ProductManager (5 ms)
    ✓ should return an empty array when calling getProducts (2 ms)
    ✓ should add a product to the list (2 ms)
    ✓ should not add a product with a repeated code (1 ms)
    ✓ should return the added product when calling getProductById (1 ms)
    ✓ should throw an error when calling getProductById with a non-existent id (1 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Esto indica que todas las pruebas han sido aprobadas satisfactoriamente y que la clase ProductManager funciona correctamente.