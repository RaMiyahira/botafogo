import Logo from "../assets/logoBotafogo.svg";
import Close from "../assets/Close.svg";
import Menu from "../assets/Menu.svg";
import Button from "../components/Button";
import Instagram from "../assets/instagram.svg"
import Libertadores from "../assets/libertadores.png"
import Brasileirao from "../assets/brasileirao.png"
import Carioca from "../assets/carioca.png"
import Facebook from "../assets/facebook.svg"
import Youtube from "../assets/youtube.svg"
import Star from "../assets/blackstar.svg";
import Garrincha from "../assets/garrincha.svg";
import Jairzinho from "../assets/jairzinho.svg";
import Niltonsantos from "../assets/niltonsantos.svg";
import Tuliomaravilha from "../assets/tuliomaravilha.svg";
import Jefferson from "../assets/jefferson.svg";
import Luizhenrique from "../assets/luizhenrique.svg";
import Igorjesus from "../assets/igorjesus.svg";
import Check from "../assets/Check.svg";
import "../styles/hero.css";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/solution.css";
import { useState, useEffect } from "react";


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (

        <>

            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a onClick={() => setShowMobileMenu(false)}
                                    href="#solution">Titulos</a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(false)}
                                    href="#testimonials">Elenco</a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(false)}
                                    href="#pricing">Sócio-Torcedor</a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(false)}
                                    href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center gap-1">
                            <Button text="Já é sócio?" secondary />
                            <Button text="Associe-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)}
                                                href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)}
                                                href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)}
                                                href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)}
                                                href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                    <li>
                                        <a className="reverse-color" href="#">Login</a>
                                    </li>
                                </div>

                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>
            <section id="hero">
                <div className="container content">

                    <h1>
                        Botafogo de Futebol e Regatas.
                        Glória, tradição e paixão..
                    </h1>

                    <p>
                        Acompanhe notícias, jogos, elenco, títulos e tudo sobre o maior campeão do Rio de Janeiro.
                    </p>

                    <div className="flex gap-1">
                        <span>
                            <Button text="Associe-se" />
                        </span>

                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Nossa História</h2>
                        <span className="desktop-only">
                            <h2>
                                Títulos que marcaram gerações
                            </h2>
                        </span>
                    </span>
                    <p>
                        Ao longo de sua trajetória, o <strong>Botafogo</strong> conquistou títulos históricos e revelou alguns dos maiores ídolos do futebol brasileiro.
                    </p>
                </header>
                <section className="even-columns">
                    <div className="card">
                        <span>
                            <img src={Brasileirao} alt="titulos" width={200} height={200} />
                        </span>
                        <div>
                            <h3>
                                Campeonato Brasileiro
                            </h3>
                            <p>
                                O Botafogo conquistou o Campeonato Brasileiro em 1968, 1995 e 2024, marcando seu nome entre os maiores clubes do país.                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Libertadores} alt="titulos" width={200} height={200} />
                        </span>
                        <div>
                            <h3>
                                Copa Libertadores 2024
                            </h3>
                            <p>
                                Em 2024 o Glorioso alcançou o maior feito de sua história ao conquistar pela primeira vez a Copa Libertadores da América.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Carioca} alt="titulos" id="titulos" width={200} height={200} />
                        </span>
                        <div>
                            <h3>
                                Campeonato Carioca
                            </h3>
                            <p>
                                Com dezenas de conquistas estaduais, o Botafogo construiu uma tradição vencedora e se tornou um dos clubes mais respeitados do Rio de Janeiro.
                            </p>
                            <hr />
                        </div>
                    </div>
                </section>
            </section>
            <section id="testimonials">
                <header id="testimonials2">
                    <span>
                        <p className="desktop-only">
                            Ídolos que marcaram época
                        </p>
                        <h2>Lendas do Glorioso</h2>
                    </span>
                    <p>
                        Ao longo de sua história, o Botafogo revelou alguns dos maiores ídolos do futebol brasileiro. Conheça jogadores que ajudaram a construir a tradição e a grandeza do Glorioso.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={Garrincha} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Considerado um dos maiores dribladores da história do futebol, Garrincha encantou o mundo com sua habilidade e ajudou a transformar o Botafogo em uma potência nacional e internacional.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                            </span>
                            <span className="names">
                                <p>Mané Garrincha</p>
                                <p>O Anjo das Pernas Tortas</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Niltonsantos} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Conhecido como a Enciclopédia do Futebol, Nilton Santos revolucionou a posição de lateral e dedicou praticamente toda sua carreira ao Glorioso.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />                            </span>
                            <span className="names">
                                <p>Nilton Santos</p>
                                <p>A Enciclopédia do Futebol</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Jairzinho} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    O Furacão da Copa marcou época com a camisa alvinegra e foi um dos principais nomes da Seleção Brasileira campeã mundial em 1970.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />                            </span>
                            <span className="names">
                                <p>Jairzinho</p>
                                <p>Furacão da Copa</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Tuliomaravilha} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Artilheiro nato e um dos maiores goleadores da história do Botafogo, Túlio Maravilha foi o grande destaque da conquista do Campeonato Brasileiro de 1995, marcando seu nome para sempre na história do clube.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                            </span>
                            <span className="names">
                                <p>Túlio Maravilha</p>
                                <p>Artilheiro do Brasileirão de 1995</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Jefferson} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Ídolo da torcida botafoguense, Jefferson ficou marcado por grandes defesas, liderança e amor ao clube durante uma das épocas mais difíceis da história recente.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />                            </span>
                            <span className="names">
                                <p>Jefferson</p>
                                <p>Muralha Alvinegra</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Luizhenrique} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Destaque da campanha histórica de 2024, Luiz Henrique foi decisivo com gols, assistências e atuações que ajudaram o Botafogo a conquistar títulos importantes.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />                            </span>
                            <span className="names">
                                <p>Luiz Henrique</p>
                                <p>Rei da América 2024</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Igorjesus} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Com raça, entrega e gols importantes, Igor Jesus conquistou rapidamente a torcida e se tornou uma das referências do ataque alvinegro.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />                            </span>
                            <span className="names">
                                <p>Igor Jesus</p>
                                <p>Artilheiro do Glorioso</p>
                            </span>
                        </div>


                    </div>
                </section>
            </section>
            <section id="pricing">
                <header>
                    <p className="desktop-only">Programa Oficial de Sócio-Torcedor</p>
                    <h2>Camisa7</h2>
                    <p className="desktop-only">Faça parte da torcida que move o Glorioso. Tenha acesso a benefícios exclusivos, <br></br>descontos e prioridade na compra de ingressos para acompanhar o Botafogo em todos os momentos.</p>

                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Glorioso</h3>
                            <p>Ideal para quem quer apoiar o clube e aproveitar benefícios exclusivos.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 29,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Entrar para o Glorioso" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Carteirinha digital</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Desconto na loja oficial</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Conteúdo exclusivo</p>
                        </span>
                    </div>
                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>MAIS POPULAR</p>
                        </span>
                        <span className="plan">
                            <h3>Estrela Solitária</h3>
                            <p>A experiência completa para viver o Botafogo de perto.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 79,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Brilhar com o Glorioso" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Prioridade na compra de ingressos</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Desconto maior na loja oficial</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Eventos com o clube</p>
                        </span>
                    </div>
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Lenda Alvinegra</h3>
                            <p>Para o torcedor que quer viver o Botafogo de forma única e exclusiva.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 149,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Torne-se uma Lenda" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Todos os benefícios dos planos anteriores</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Visita guiada ao Estádio Nilton Santos</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Kit especial Camisa 7</p>
                        </span>
                    </div>
                </section>
            </section>
            <section id="contact">
                <header>
                    <p>Fale com o Glorioso</p>
                    <h2>Entre em contato com o Botafogo</h2>
                    <p>
                        Tem alguma dúvida sobre o programa Camisa 7, ingressos, produtos oficiais ou eventos do clube? Entre em contato com nossa equipe e responderemos o mais rápido possível.
                    </p>
                </header>

                <form>
                    <input
                        type="email"
                        placeholder="Seu e-mail"
                    />

                    <input
                        type="text"
                        placeholder="Digite sua mensagem"
                    />

                    <Button text="Enviar" />
                </form>
            </section>
            <footer id="footer">

                <div className="footer-content">

                    <div className="footer-column">
                        <h3>Botafogo</h3>

                        <div className="socials">
                            <img src={Instagram} alt="Instagram" />
                            <img src={Facebook} alt="Facebook" />
                            <img src={Youtube} alt="Youtube" />
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Clube</h3>

                        <a href="#">História</a>
                        <a href="#">Títulos</a>
                        <a href="#">Ídolos</a>
                        <a href="#">Estádio Nilton Santos</a>
                    </div>

                    <div className="footer-column">
                        <h3>Contato</h3>

                        <a href="#">Fale Conosco</a>
                        <a href="#">Ouvidoria</a>
                        <a href="#">Trabalhe Conosco</a>
                        <a href="#">FAQ</a>
                    </div>

                    <div className="footer-column">
                        <h3>Recursos</h3>

                        <a href="#">IOS & Android</a>
                        <a href="#">Teste a Demo</a>
                        <a href="#">Clientes</a>
                        <a href="#">API</a>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>
                        Projeto acadêmico desenvolvido em Programação Web, inspirado no Botafogo de Futebol e Regatas.
                    </p>
                </div>

            </footer>
        </>
    )
}
