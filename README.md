
[![Typing SVG](https://readme-typing-svg.herokuapp.com?size=30&pause=0&vCenter=true&multiline=true&width=700&height=90&lines=Hola!👋+Soy+ferJen)](https://git.io/typing-svg)

<!-- [![Typing SVG](https://readme-typing-svg.herokuapp.com?size=30&pause=0&vCenter=true&multiline=true&width=700&height=90&lines=Hola!👋+Soy+ferJen)](https://git.io/typing-svg) -->

---
Este es el repo de backend-43345 @Coderhouse 😁

---

## Estructura de archivos de ejercicios

Los ejercicios se encuentran en la carpeta "desafios-entregables" con un archivo en markdown con las instrucciones del ejercicio y un archivo de JavaScript con la resolución.

```
Estructura de Carpetas
├── src
│   ├── desafios-entregables
│   │   ├── 01-desafio.js
│   │   └── 01-desafio.md
```
---

## Pruebas

La aplicación fue probada utilizando Jest, un marco de pruebas de JavaScript. Se realizaron las siguientes pruebas:

**Método addProduct**: Se probó agregando un nuevo producto con todos los campos requeridos y verificando que se agregara a la lista de productos. También se probó agregando un producto con un código repetido, lo que debería arrojar un error.

**Método getProducts**: Se probó llamando al método después de agregar un nuevo producto y verificando que el producto apareciera en la lista de productos.

**Método getProductById**: Se probó llamando al método con un ID de producto existente y verificando que se devolviera el producto correcto. 
También se probó llamando al método con un ID de producto inexistente, lo que debería devolver un error.

Puede ejecutar las pruebas usted mismo instalando las dependencias necesarias con yarn install y luego ejecutando yarn test.