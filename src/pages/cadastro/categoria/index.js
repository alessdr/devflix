import React, { useState } from 'react';
import PageTemplate from '../../../components/PageTemplate'
import FormField from '../../../components/FormField'
import FormTextArea from '../../../components/FormTextArea'
import { Link } from 'react-router-dom';

function CadastroCategoria() {

    /* Const para "definir" a estrutura de dados */
    const itemCategoria = {
        nome: '',
        descricao: '',
        cor: ''
    }
    
    /* Cria o state 'listaCategorias' e a funcao que responsavel por setar seu valor, atribuindo um [] (Array vazio) */
    const [listaCategorias, setListaCategorias] = useState([])
    
    /* Cria o state dados e a funcao que responsavel por setar seu valor, atribuindo a const itemCategoria */
    const [atributos, setAtributos] = useState(itemCategoria);
    

    /* Funcao para atualizar a estrutura de dados */
    function setAtributo(chave, valor) {
        setAtributos({
            ...atributos,
            [chave]: valor
        })
    }

    //Funcao generica utilizada p/ atualizar a estrutura de dados e p/ consequencia os input's, c/ base no atributo "name"
    function updateCategoriaHandler(event) {
        setAtributo(
            event.target.getAttribute('name'), 
            event.target.value
            );
            
        /*
        const { getAttribute, value } = event.target;
        setAtributo(
            getAttribute('name'), 
            value
        );
        */
    }

    /* Funcao para interceptar o "submit" e executar alguma acao */
    function handleSubmit(event){
        /* Para a propagacao do evento */
        event.preventDefault();
        /* Seta as categorias com a lista ja existente '...' e mais o conteudo da var dados */
        setListaCategorias([ ...listaCategorias, atributos]);
        /* limpar os input's */
        setAtributos(itemCategoria)
    } 

    return (
        <PageTemplate>
            <h1>Cadastro de Categoria: {atributos.nome}</h1>

            <form onSubmit={handleSubmit}>
                
                {/* Componentes personalizados */}
                <FormField label="Categoria" type="text" value={atributos.nome} name="nome" onChange={updateCategoriaHandler}/>
                
                <FormTextArea label="Descrição" value={atributos.descricao} name="descricao" onChange={updateCategoriaHandler}/>

                <FormField label="Cor" type="color" value={atributos.cor} name="cor" onChange={updateCategoriaHandler}/>

                <button>Cadastrar</button>

            </form>

            <ul>
                {listaCategorias.map( (categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}> {/* concatena categoria com index */}
                            {categoria.nome}
                        </li>
                    )
                } )}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageTemplate>
    )
}

export default CadastroCategoria;