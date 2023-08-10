import imgLogo from "../../assets/images/logo.svg";
import imgFacebook from "../../assets/images/facebook.svg";
import imgInstagram from "../../assets/images/instagram.svg";
import imgLinkedin from "../../assets/images/linkedin.svg";
import"./style.css";

function Footer() {
return(
//codigo do footer

<footer>
<div className="container rodape">
    <div className="rodape_conteudo">
        <div className="rodape_conteudo_paginas">
            <h2>Páginas</h2>
            <ul>
                <li>Login</li>
                <li>Home</li>
                <li>Listar Serviços</li>
                <li>Cadastrar Cliente</li>
                <li>Cadastrar Desenvolvedor</li>
            </ul>
        </div>
        <img src={imgLogo} alt=""/>
            <div className="rodape_conteudo_contatos">
                <h2>Contatos</h2>
                <div>
                    <a href="#"><img src={imgFacebook} alt=""/></a>
                    <a href="#"><img src={imgInstagram} alt=""/></a>
                    <a href="#"><img src={imgLinkedin} alt=""/></a>
                </div>
                <a href="mailto:">contato@vsconnect.com</a>
            </div>
    </div>
    <p>todos os direitos reservados ©.</p>
</div>
</footer>

)

    
}
export default Footer