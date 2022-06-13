import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const decrement = (value = 1) => {
    // if ( counter === 0 ) return;

    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

// tener cuidado porque los eventos se parasan implitamente como argumento si una funcion tiene valor por defecto
// y no se le pasa alguna valor por defecto este parasa el valor del evento
