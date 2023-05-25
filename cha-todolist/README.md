# To do List 📄

En este ejercicio iremos creando una lista de tareas con REACT

![ezgif com-gif-maker](https://user-images.githubusercontent.com/33903092/131694503-8ca93b45-ff80-4291-9bc6-b590c3c764c1.gif)

## Primera iteración

Instalar las dependencias con `npm i`

Para arrancar el servidor:

```sh
npm run dev
```

## Segunda iteración

Crear un input para poder añadir las tareas a la lista.

💡 Pista: puedes utilizar el evento `onKeyDown` o añadir un botón y utilizar el evento `onClick`

## Tercera iteración

Crear la función que actualize el estado al momento de pulsar `Enter` o con al hacer click en un botón.

💡 Pista: En el estado tendremos las diferentes tareas de la lista, por eso el estado puede ser un array

## Cuarta iteración

Dibujar en el DOM la lista de tareas.

## Bonus

- Añade funcionalidad para poder tachar o eliminar las tareas.
💡 Pista: Para esta iteración el estado debería ser un array de objectos, podría ser algo así:

```js
{
  description: 'Tarea',
  isDone: false,
  _id: 1,
}
```
- Implementa la funcionalidad para remover el elemento de la lista

- Implementa las dos opciones para añadir los elementos, con la tecla `Enter` y con el click de un botón

- Divide el código en componentes