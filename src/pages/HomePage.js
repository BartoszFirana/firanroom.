import React, { Component } from 'react';
import Technology from '../components/Technology'
import '../styles/HomePage.css'
import JSLogo from '../images/javascript_logo.svg'
import ReactLogo from '../images/react_logo.svg'
import NodeLogo from '../images/nodejs_logo.svg'
import IllustratorLogo from '../images/illustrator_logo.svg'
import Phone from '../images/phone.svg'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            theposition: scrolled,
        })
    }

    render() {
        const webContainer = {
            transform: `translate(-50%, 0%)`,
        };

        const webContainerUp = {
            transform: `translate(-50%, -100px)`,
        };

        return (
            <div className="web__page">
                <div className="web__container" style={this.state.theposition > 0 ? webContainerUp : webContainer}>
                    <div className="web__container--about">
                        <h2 className="web_about--title">firanroom. is my first web app</h2>
                        <p className="web_about--paragraph">Jestem szczęśliwy, ponieważ mogę opublikować tą aplikację po kilku miesiącach ciężkiej pracy nad nią. Na ten dość długi czas przełożył się fakt, że jest to moja pierwsza aplikacja napisana w React.JS, a nawet pierwsza duża aplikacja webowa napisana głównie w JavaScript. Projekt firanroom. jest moim projektem doświadczalnym i wykorzystywałem go do realizacji wiedzy pozyskanej w studiowanych przeze mnie kursach i dokumentacjach stąd brak dyscypliny czasowej podczas mojej pracy. Więcej opowiem w zakładce 'blog'.</p>
                    </div>
                    <div className="technology__container">
                        <Technology logo={JSLogo} title="JavaScript" text="JavaScript w tej chwili ma monopol w logice front-endowej. Choć większą część aplikacji pisałem we freamworku React - bez znajomości JavaScriptu nie rozumiałbym na czym to wszystko polega."></Technology>
                        <Technology logo={ReactLogo} title="React.JS" text="Biblioteka React.JS jest na chwilę obecną moim ulubionych freamworkiem JS i cieszę się, że do zbudowania tego serwisu wybrałem właśnie tą technologię. Aplikacja stanowi aż 80% Reacta."></Technology>
                        <Technology logo={NodeLogo} title="Node.JS" text="Od początku mojej nauki odradzano mi dekoncentrowanie się innym stackiem technologicznym, jeżeli jeszcze nie poznałem tego w którym chcę pracować. Nie miałbym jednak satysfakcji bez własnej logiki backendowej na swojej stronie. Użyłem freamworka Express.JS."></Technology>
                        <Technology logo={IllustratorLogo} title="Adobe Illustrator" text="Z wykształcenia jestem grafikiem komputerowym. Dla mnie naturalne było, że moja aplikacja webowa przedstawiająca umiejętności front-endowe musi zawierać również dobrą grafikę komputerową. Pliki SVG przygotowane zostały w Illustratorze przeze mnie."></Technology>
                    </div>
                    <div className="grid__twotemplate">
                        <div className="grid__twotemplate--text grid__item--1"><img src={Phone} alt="phone" /></div>
                        <div className="grid__twotemplate--text grid__item--2">
                            <h3>Coś tam</h3>
                            <p>Z wykształcenia jestem grafikiem komputerowym. Dla mnie naturalne było, że moja aplikacja webowa przedstawiająca umiejętności front-endowe musi zawierać również dobrą grafikę komputerową. Pliki SVG przygotowane zostały w Illustratorze przeze mnie.</p>
                        </div>
                        <div className="grid__twotemplate--text grid__item--3"><img src={Phone} alt="phone" /></div>
                        <div className="grid__twotemplate--text grid__item--4">
                            <h3>Coś tam</h3>
                            <p>Z wykształcenia jestem grafikiem komputerowym. Dla mnie naturalne było, że moja aplikacja webowa przedstawiająca umiejętności front-endowe musi zawierać również dobrą grafikę komputerową. Pliki SVG przygotowane zostały w Illustratorze przeze mnie.</p>
                        </div>
                        <div className="grid__twotemplate--text grid__item--5"><img src={Phone} alt="phone" /></div>
                        <div className="grid__twotemplate--text grid__item--6">
                            <h3>Coś tam</h3>
                            <p>Z wykształcenia jestem grafikiem komputerowym. Dla mnie naturalne było, że moja aplikacja webowa przedstawiająca umiejętności front-endowe musi zawierać również dobrą grafikę komputerową. Pliki SVG przygotowane zostały w Illustratorze przeze mnie.</p>
                        </div>
                        <div className="grid__twotemplate--text grid__item--7"><img src={Phone} alt="phone" /></div>
                        <div className="grid__twotemplate--text grid__item--8">
                            <h3>Coś tam</h3>
                            <p>Z wykształcenia jestem grafikiem komputerowym. Dla mnie naturalne było, że moja aplikacja webowa przedstawiająca umiejętności front-endowe musi zawierać również dobrą grafikę komputerową. Pliki SVG przygotowane zostały w Illustratorze przeze mnie.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;