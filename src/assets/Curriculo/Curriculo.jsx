import React from "react";

import "./Curriculo.css";
import data from "./Curriculo.json";


function Curriculo() {
    return (

        <>

            < section >
                <h2>resumo</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborums</p>
            </section >

            <section>
                <h2>academico</h2>
                <ul><b>(2010)</b>(esino medio,escola estadual joao vicente de queiroz)</ul>


            </section>

            <section>
                <h2>proficional</h2>
                <li>(2012)<b>(tecnicas de seguranca no trabalho)</b></li>
                <li><b>(2014)</b>(recepcionista)</li>
                <li><b>(2023)</b> (operador de motoniveladora)</li>


            </section>

        </>
    )
}
export default Curriculo;