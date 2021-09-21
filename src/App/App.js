import './App.css';
import Layout from "../hoc/Layout";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Cadastro from '../Pages/cadastronotifica/cadastro';


function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/"> <Cadastro/> </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
