var express = require('express');
var router = express.Router();
//var pessoaService = require('services/pessoa.service');

// routes

//router.post('/calculaIterativo/:m/:n', calculaIterativo);
//router.post('/calculaRecursivo/:m/:n', calculaRecursivo);
router.post('/:metodo/:m/:n', calculaProdutorio);

module.exports = router;

function calculaProdutorio(req, res) {
    var metodo = req.params.metodo;
    let m = parseInt(req.params.m);
    let n = parseInt(req.params.n);

    let multiplicacao = 1.0;
    switch (metodo) {
        case 'iterativo':
            multiplicacao = produtorioIterativo(m, n);
            break;
        case 'recursivo':
            multiplicacao = produtorioRecursivo(m, n);
            break;
    }
    res.send(JSON.stringify({ metodo, multiplicacao }));
}

function produtorioRecursivo(m, n) {
    if (m == n)
        return m + (1.0 / m);
    else
        return (m + (1.0 / m)) * produtorioRecursivo(m + 1, n);
}

function produtorioIterativo(m, n) {
    let multiplicacao = 1.0;

    for (let i = m; i <= n; i++)
        multiplicacao = multiplicacao * (i + (1.0 / i));

    return multiplicacao;
}

/*
function calculaIterativo(req, res) {
    let m = parseInt(req.params.m);
    let n = parseInt(req.params.n);

    let multiplicacao = 1.0;

    for (let i = m; i <= n; i++)
        multiplicacao = multiplicacao * (i + (1.0 / i));
    res.send(JSON.stringify({ multiplicacao }));

}

function calculaRecursivo(req, res) {
    let m = parseInt(req.params.m);
    let n = parseInt(req.params.n);

    var multiplicacao = produtorioRecursivo(m, n);

    res.send(JSON.stringify({ multiplicacao }));

}*/