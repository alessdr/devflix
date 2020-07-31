import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  /* Const para "definir" a estrutura de dados */
  const itemCategoria = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };

  /* Cria o state 'listaCategorias' e a funcao responsavel p/ setar seu valor, atribuindo um [] */
  const [listaCategorias, setListaCategorias] = useState([]);

  /* Cria o state dados e a funcao responsavel p/ setar seu valor, atribuindo itemCategoria */
  const [atributos, setAtributos] = useState(itemCategoria);

  /* Funcao para atualizar a estrutura de dados */
  function setAtributo(chave, valor) {
    setAtributos({
      ...atributos,
      [chave]: valor,
    });
  }

  // Funcao generica utilizada p/ atualizar a estrutura de dados e p/ consequencia os input's,
  // com base no atributo "name"
  function updateCategoriaHandler(event) {
    setAtributo(
      event.target.getAttribute('name'),
      event.target.value,
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
  function handleSubmit(event) {
    /* Para a propagacao do evento */
    event.preventDefault();
    /* Seta as categorias com a lista ja existente '...' e mais o conteudo da var dados */
    setListaCategorias([...listaCategorias, atributos]);
    /* limpar os input's */
    setAtributos(itemCategoria);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (response) => {
      const resposta = await response.json();
      setListaCategorias(resposta);
    });
  }, []);

  return (
    <PageTemplate>
      <h1>
        Cadastro de Categoria:
        {atributos.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        {/* Componentes personalizados */}
        <FormField label="Categoria" type="text" value={atributos.nome} name="nome" onChange={updateCategoriaHandler} />

        <FormField label="Descrição" type="textarea" value={atributos.descricao} name="descricao" onChange={updateCategoriaHandler} />

        <FormField label="Cor" type="color" value={atributos.cor} name="cor" onChange={updateCategoriaHandler} />

        <Button>
          Cadastrar
        </Button>

      </form>

      {listaCategorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {listaCategorias.map((categoria) => (
          <li key={`${categoria.id}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageTemplate>
  );
}

export default CadastroCategoria;
