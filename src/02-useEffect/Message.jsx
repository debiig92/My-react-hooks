import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // importante que se crea una funcion de esta forma declarativa para tener accesos a su referencia en memoria y remover el listener
    const onMouseMove = ({ x, y }) => {
      // const coords = { x, y };
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', onMouseMove);
    // El return funciona como un tipo de ngOnDestroy que se dispara cuando el componente se elimina de el dom
    // es util para remover eventListeners
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
