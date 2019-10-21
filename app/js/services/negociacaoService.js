System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, negociacaoService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            negociacaoService = class negociacaoService {
                obterNegociacoes(handles) {
                    return fetch('http://localhost:8080/dados')
                        .then(res => handles(res))
                        .then(res => res.json())
                        .then((dados) => dados.map(dado => new index_1.Negociacao(new Date(), dado.vezes, dado.montante))).catch(err => {
                        console.log(err);
                        throw new Error('!!! Não Foi Possivel Importar as Negociações !!!');
                    });
                }
            };
            exports_1("negociacaoService", negociacaoService);
        }
    };
});
