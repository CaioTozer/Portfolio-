import React from "react";
import './MyProjects.css'

const MyProjects = () => {
    return (
        <div className="MyProjects">
            <div className="projeto">
                <div className="folder">
                    <h3 className="proj">My Projects</h3>
                </div>
                <p className="repositorio">
                    <a href="https://github.com/CaioTozer?tab=repositories" target="blank">Ver Todos</a>
                </p>
            </div>
            <div className="projetos">
                <div className="caixa">
                    <h4><a href="https://rocketflix-psi.vercel.app/" target="blank" className="site1">Rockeflix</a></h4>
                    <p>Em dúvida do que assistir? esse site pode te ajudar com isso, basta clicar no botão que a aplicações trás
                        dicas de filme, com o cartaz e descrição.
                    </p>
                    <p className="lang">JavaScript</p>
                </div>
                <div className="caixa">
                    <h4><a href="https://rocket-coffee-jet.vercel.app/" target="blank" className="site2">RocketCoffee</a></h4>
                    <p>Site fictício para fazer pedidos de café.</p>
                    <p className="lang">JavaScrip</p>
                </div>
                <div className="caixa">
                    <h4><a href="https://pag-login-one.vercel.app/" target="blank" className="site3">Camp.in</a></h4>
                    <p>Página fictícia de Login, para uma aplicação de acampamento.</p>
                    <p className="lang">HTML</p>
                </div>
                <div className="caixa">
                    <h4><a href="https://switch-theme-eight.vercel.app/" target="blank" className="site4">Switch Theme</a></h4>
                    <p>botão pra alterar o tema do plano de fundo.</p>
                    <p className="lang">JavaScrip</p>
                </div>
            </div>
        </div>
    )
}

export default MyProjects