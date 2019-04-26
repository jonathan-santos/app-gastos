import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Principal from './paginas/principal.jsx';
import BoasVindas from './paginas/boasVindas.jsx';
import Configuracoes from './paginas/configuracoes.jsx';
import Mes from './paginas/mes.jsx';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <h1 className="navbar-brand mb-0">App Gastos</h1>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/configuracoes">Configurações</Link>
                            </li>
                        </ul>
                    </div>

                    <Link className="botao-novo-gasto btn btn-primary font-weight-bold" to="/novo-gasto">+</Link>
                </nav>

                
                <Switch>
                    <Route exact path='/' component={Principal} />
                    <Route exact path='/boas-vindas' component={BoasVindas} />
                    <Route exact path='/configuracoes' component={Configuracoes} />
                    <Route path='/:ano/:mes' component={Mes} />
                </Switch>
            </BrowserRouter>
        );
    }
}
