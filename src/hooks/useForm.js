import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //   como mantiene en memoria el intial valu puede volver a ser asignado para resetear el formulario
  const onResetForm = () => {
    setFormState(initialForm);
  };

  // se retorna con spreda operator para tener acceso dede aqui a las propiedades del objeto form sin necesidad de desestructurar en el padre
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
