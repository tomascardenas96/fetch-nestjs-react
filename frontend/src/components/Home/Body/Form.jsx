import React from "react";
import useNewUser from "../../../hooks/useNewUser";

function Form() {
  const { submitHandler, changeHandler } = useNewUser();

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" onChange={changeHandler} />

      <label htmlFor="lastname">Apellido</label>
      <input type="text" name="lastname" onChange={changeHandler} />

      <label htmlFor="address">Direccion</label>
      <input type="text" name="address" onChange={changeHandler} />

      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Form;
