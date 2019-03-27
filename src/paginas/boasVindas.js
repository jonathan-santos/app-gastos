import React from 'react';

export default class BoasVindas extends React.Component {
    render() {
        return (
            <div>
                <p>Olá</p>

                <p>Bem vindo ao App de controle de gastos</p>

                <p>Este é um App PWA que serve como interface para sua planilha de gastos criada a partir do modelo feito pelo <a href="https://twitter.com/pipocacafeinada">@PipocaCafeinada</a></p>

                <p>Para começar a usar o app siga estes passos:</p>

                <ul>
                    <li>
                        Crie sua planilha pessoal de gastos a partir do <a href="#">modelo</a>
                    </li>
                    <li>
                        Pegue a chave para acesso á sua planilha (<a href="#">passos aqui</a>)
                    </li>
                    <li>
                        Salve a chavev para acesso á sua planilha na página de <a href="#">configurações do app</a> (não se preocupe, a chave é salva no app e não é compartilhada com ninguém ;)
                    </li>
                </ul>

                <p>A partir daí é só começar a usar!</p>
                
                <a href="#">Continuar</a>
            </div>
        );
    }
}