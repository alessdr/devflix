import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
//import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="DevFlix Logo"/>
            </a>

            [Componente Normal]
            <ButtonLink href="/" className="ButtonLink">
                Novo Vídeo
            </ButtonLink>

            {/*\
            [Componente feito com Styled Componente e mesmo sendo um button, o "as" fas ele se comportar como a tag "a"]
            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
            \*/}
        </nav>
    );
}

export default Menu;
