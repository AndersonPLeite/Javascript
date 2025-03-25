import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="menu-navegacao">
        <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
            <li className="cadastro"><a href="#cadastro" >Cadastre-se</a></li>
        </ul>
    </nav>
  );

};

export default Nav;
