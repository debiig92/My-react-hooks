import React from 'react';
// import { memo } from 'react';
// memo es un metodo que ayuda a memorizar los componentes, solo se recomienda utilizar si el componente es muy grabde
// evita que un componente se vuelva a redibujar si su padre tuvo un cambio de state
//react realmente no hace el redibujado pero lo que si hace es ejecutar  logica que el componente tenga
// en vite es necesario importar React para que lo reconozca
export const Small = React.memo(({ value }) => {
  console.log(' Me volví a dibujar :( ');

  return <small>{value}</small>;
});
