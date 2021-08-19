import React from "react"
import "./Menu_Horizontal.css"

export default function Menu(){
    return (
        <div>
            <div className="Menu">
                <nav className="navMenu">
                    <ul>
                        <li><a href = "#inicio"> Nosso Canal </a></li>
                        <li><a href = "#cursos"> Cursos </a></li>
                        <li><a href = "#contatos"> Contatos </a></li>
                        <li><a href = "#parceiros"> Parceiros </a></li>
                        <li><a href = "#missao"> Missão </a></li>
                        <li><a href = "#sobre"> Sobre </a></li>
                    </ul>
                </nav>

                <section id="inicio">
                    <h1>Nosso Canal</h1>

                    <aside className="aside">
                        <a href="#inicio" id="inicio2">Canal</a>
                        <a href="#cursos" id="cursos2">Cursos</a>
                        <a href="#contatos" id="contatos2">Contatos</a>
                        <a href="#parceiros" id="parceiros2">Pareceiros</a>
                        <a href="#missao" id="missao2">Missão</a>
                        <a href="#sobre" id="sobre2">Sobre</a>
                    </aside>

                </section>

                <section id="cursos">
                    <h1>cursos</h1>
                </section>
                
                <section id="contatos">
                    <h1>Contatos</h1>
                </section>
                
                <section id="parceiros">
                    <h1>Parceiros</h1>
                </section>
                
                <section id="missao">
                    <h1>Missão</h1>
                </section>
                
                <section id="sobre">
                    <h1>Sobre</h1>
                </section>
                
                <a className = "irTopo" href=".menu">Topo</a>
                <a className = "irInicio" href="#inicio">Nosso Canal</a>                            
                <a className = "irCursos" href="#cursos">Cursos</a>              
                <a className = "irContatos" href="#contatos">Contatos</a>              
                <a className = "irParceiros" href="#parceiros">Parceiros</a>              
                <a className = "irMissao" href="#missao">Missão</a>              
                <a className = "irSobre" href="#sobre">Sobre</a>  
   
                <footer>
                    <h2>Rodapé</h2>
                </footer>
            </div>

        </div>
    )
    
}