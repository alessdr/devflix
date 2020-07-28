import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="DevFlix Logo"/>
            </Link>

            {/*
            [Componente Normal]
            <ButtonLink href="/cadastro/video" className="ButtonLink">
                Novo Vídeo
            </ButtonLink>
            */}

            [Componente feito com Styled Componente e mesmo sendo um button, o "as" fas ele se comportar como a tag "a"]
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;
