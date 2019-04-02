import React from 'react';

export default class Principal extends React.Component {
    constructor() {
        super();
        this.state = {
            balancoTotal: 0,
            investimentoTotal: 0,
            meses: []
        };
    }

    componentDidMount() {
        this.receberInformacoes();
    }

    receberInformacoes() {
        this.setState({
            ...this.state,
            meses: [
                {
                    nome: 'Janeiro',
                    entradaTotal: 0,
                    saidaTotal: 0
                },
                {
                    nome: 'Fevereiro',
                    entradaTotal: 0,
                    saidaTotal: 0
                }
            ]
        })
    }

    render() {
        return (
            <div>
                <div className="principal">
                    <p>{this.state.balancoTotal}</p>
                    <p>De Balanço total</p>
                    <p>{this.state.investimentoTotal}</p>
                    <p>De investimento total</p>
                </div>

                {this.state.meses.map((mes) => (
                    <div key={mes.nome}>
                        <h2>{mes.nome}</h2>
                        <p>+ {mes.entradaTotal}</p>
                        <p>- {mes.saidaTotal}</p>
                        <a href='#'>Detalhes</a>
                    </div>
                ))}
            </div>
        );
    }
}