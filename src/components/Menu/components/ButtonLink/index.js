import React from 'react';

function ButtonLink(props) {
    // props => { classNme: "Classe passada", href: "endereco passado", children: "Filho passado (Conteudo)" }
    console.log(props);

    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;
