import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'fernando@google.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      // propiedades computadas de objetos, toma el un value y lo usa como una key para crear o hacer referencia en un objeto
      [name]: value,
    });
  };

  // 1- use efect se llama cuando el componente esta listo y si no tiene el segundo parametro se llama cada vez que el componente se vuelve a dibujar
  //   ocea cada que cambia por ejemplo cada que el input modifica el states, esta opcion no es recondable

  //2- cuando se le pasa un arreglo vacio esto quiere decir que el useEffect solo se va llamar una unica vez cuando el componente es montado

  //3- cuando se le pasa un arreglo con un argumento el useEffect se disparara cada vez que el elemento cambie

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('formState changed!');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed!');
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === 'strider2' && <Message />}
    </>
  );
};
