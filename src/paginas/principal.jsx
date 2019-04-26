import React from 'react';
import { Link } from 'react-router-dom';
import '../css/principal.css';

export default class Principal extends React.Component {
    constructor() {
        super();
        this.state = {
            balancoTotal: 1000,
            investimentoTotal: 100,
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
                    entradaTotal: 950,
                    saidaTotal: 800
                },
                {
                    nome: 'Fevereiro',
                    entradaTotal: 960,
                    saidaTotal: 700
                },
                {
                    nome: 'Março',
                    entradaTotal: 960,
                    saidaTotal: 700
                },
                {
                    nome: 'Abril',
                    entradaTotal: 960,
                    saidaTotal: 700
                },
                {
                    nome: 'Maio',
                    entradaTotal: 960,
                    saidaTotal: 700
                },
                {
                    nome: 'Junho',
                    entradaTotal: 960,
                    saidaTotal: 700
                },
                {
                    nome: 'Julho',
                    entradaTotal: 960,
                    saidaTotal: 700
                },
                {
                    nome: 'Agosto',
                    entradaTotal: 960,
                    saidaTotal: 700
                },
                {
                    nome: 'Setembro',
                    entradaTotal: 960,
                    saidaTotal: 700
                }
            ]
        })
    }

    render() {
        return (
            <div className="tela-principal">
                <div className="resumo">
                    <p className="balanco-total">{this.state.balancoTotal}</p>
                    <p>De Balanço total</p>
                    <p className="investimento-total">{this.state.investimentoTotal}</p>
                    <p>De investimento total</p>
                </div>

                <div className="meses d-flex flex-wrap justify-content-start">
                    {this.state.meses.map((mes) => (
                        <div className="mes flex-fill" key={mes.nome}>
                            <h2 className="nome">{mes.nome}</h2>
                            <p className="entrada-total text-success">+ {mes.entradaTotal}</p>
                            <p className="saida-total text-danger">- {mes.saidaTotal}</p>
                            <Link className="ver-detalhes btn btn-outline-light" to={'/2019/' + mes.nome}>Ver detalhes</Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}