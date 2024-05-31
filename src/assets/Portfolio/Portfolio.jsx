import React from "react";

import "./Portfolio.css";

import imagem from "../avatarciuk.jpeg"

function Portfolio() {

    const Portfolios = [
        {
            link: "https://avatarciuk.com.br",
            image: "../../assets/avatarciuk.jpeg",
            title: "Site Do Ciuk"
        },

        
    ]
    return (
        <main>


            {
                Portfolios.map(item => (
                    <div className="item-portfolio">
                        <img id="foto" src={imagem} alt="" />
                        <a href={item.link} target="black">
                            <p>{item.title}</p>
                        </a>
                    </div>
                ))
            }
        </main>
    )
}


export default Portfolio;