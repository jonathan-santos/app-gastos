import React from 'react';

export default class mes extends React.Component {
    constructor() {
        super();
        this.state = {
            entrada: 0,
            saidas: []
        };
    }

    componentDidMount() {
        this.retornarDadosMes();
    }

    retornarDadosMes() {
        this.setState({
            ...this.state,
            entrada: 500,
            saida: [{
                nome: "Comida",
                valor: 1000
            }]
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.match.params.mes}</h1>

                <h2>Entrada</h2>
                <p>{this.state.entrada}</p>

                <h2>Saída</h2>
                {this.state.saidas.map((saida) => (
                    <p>{saida.nome}: {saida.valor}</p>
                ))}
            </div>
        );
    }
}