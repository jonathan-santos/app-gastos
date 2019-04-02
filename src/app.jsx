import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Principal from './paginas/principal.jsx';
import BoasVindas from './paginas/boasVindas.jsx';
import Configuracoes from './paginas/configuracoes.jsx';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Principal} />
                    <Route exact path='/boas-vindas' component={BoasVindas} />
                    <Route exact path='/configuracoes' component={Configuracoes} />
                </Switch>
            </BrowserRouter>
        );
    }
}
