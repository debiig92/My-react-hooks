import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  //1- use callback es parecido a use memo pero este se utiliza para memorizar pocisione en memoria de funciones
  //2- retorna una funcion ejecutable, que solo ve vuelce a ejecutar cuando su dependencia cambia, similar a un useEffect
  //3- si la funcion no se pasa como un callback esta va a memorizar el valor que tiene lo cual no lo que se quiere por eso es mejor que se le pase un callback para que esta conozca el state
  //4 el c ahce referencia a su valor actual en el sate
  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  //se puede conbinar con el use effect y decir que se llame solo cuando cambia el la funcion padre, porque de
  // lo contrario crearia un look infinito de cambio lla que la funcion que llama es la misma dependencia que esucha
  useEffect(() => {
    // incrementFather();
  }, [incrementFather]);

  // const incrementFather = () => {
  //     setCounter( counter + 1);
  // }

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
