import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

//DESAFIO: Transforma este componente em um componente melhor para exibir a pagina 404
const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* 'exact' p/ aceitar apenas rota exata, caso contrario retorna vazio, bom pois ja para a busca qdo acha */}
      <Route path="/" component={Home} exact /> 

      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      {/* qdo nao tem rota seria o 404, ou seja, nao achou a rota pedida */}
      {/* qdo nao tem rota seria o 404, ou seja, nao achou a rota pedida */}
      <Route component={Pagina404} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
