import React, { useState } from "react";

function useNewUser() {
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    address: "",
  });

  async function submitHandler(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      const data = await response.json();

      if (data.error) {
        alert("Error");
        throw new Error("Ocurrio un error");
      }

      alert("Registro exitoso!");
    } catch (err) {}
  }

  function changeHandler(event) {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  return { submitHandler, changeHandler };
}

export default useNewUser;
