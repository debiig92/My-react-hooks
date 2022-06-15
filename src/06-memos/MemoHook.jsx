import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos...');
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);
  // similar a use efect pero lo que este hace es manter una referencia en memoria de lo que se le asigna y solamente cambia si
  // la depedencia que le paso cambiar, si se le pasa una funcion esta debe retornar un valor, si no se le pasa dependencias solo se ejecuta una vez
  // util para tareas pezadas que pueden ser memorizadas despues de la primera vez de carga
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>{' '}
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
