import React from "react";

import "./Contato.css";

function Contato() {
  function enviarFormulario() {

  }

  return (
    <>
      <form action="" onSubmit={enviarFormulario}>

        <fieldset>
          <label htmlFor="input-name">Name</label>
          <input type="text" className="input-name" id="input-name" required minLength="2" />
        </fieldset>

        <fieldset>
          <label htmlFor="input-email">Email</label>
          <input type="email" className="input-email" id="input-email" required />
        </fieldset>

        <fieldset>
          <label htmlFor="input-tel">Telefone</label>
          <input type="tel" className="input-tel" id="input-tel" placeholder="(99) 99999-9999" required pattern="^^\(\d{2}\) \d{5}-\d{4}$" maxLength="15" />

        </fieldset>

        <fieldset>
          <label htmlFor="input-msg">Mensagem</label>
          <textarea className="input-msg" id="input-msg" cols="30" rows="10"></textarea>
        </fieldset>

        <center>
          <input type="submit" value="ENVIAR" className="button"/>
        </center>
      </form>


    </>

  )

}

export default Contato;
