import React from 'react';

// Al pazar como prop una funcion y ser esta llamada esta siempre tiene una posicion de memoria diferente
// porque su componente padre tuvo una re renderizacion y eso hizo un cambio en la posicion de memoria de la funcion increment y no memoriza una que
// ya no se ocupa
export const ShowIncrement = React.memo(({ increment }) => {
  // nunca es buena practica tenes funciones asi puramente invocadas dentro del componente, siempre con su hook prederiblemente
  console.log(' Me volví a generar :( ');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
