'use strict';

const mongoose = require('mongoose'); // importar o mongoose

const Product = mongoose.model('Product'); // importar o Product, mongoose.model

const ValidationContract = require('../validators/fluent-validator'); // importar o  fluent-validator.js

const repository = require('../repositories/product-repository'); // importar o product-repository

// POST - Create -> Criar um recurso (req)

// 2.6. Criando um Produto (√)
exports.post = (req, res, next) => {

    let constract = new ValidationContract();
    constract.hasMinLen(req.body.title, 3, 'O "title" deve conter pelo menos 3 caracteres');
    constract.hasMinLen(req.body.slug, 3, 'O "slug" deve conter pelo menos 3 caracteres');
    constract.hasMinLen(req.body.description, 3, 'O "description" deve conter pelo menos 3 caracteres');

    // Se os dados forem inváligos
    if (!constract.isValid()) {
        res.status(400).send(constract.errors()).end();
        return;
    }

    repository.create(req.body)
        .then(x => {
            res.status(201).send({ 
                message: 'Produto cadastrado com sucesso!'
            });
        })
        .catch(err => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar ao produto!',
                data: err
            });
    });
}

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos (√)
exports.get = (req, res, next) => {
    repository.get()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.8. Listando um Produto pelo (√)
exports.getBySlug = (req, res, next) => {
    repository.getBySlug(req.params.slug)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.9. Listando um Produto pelo Id (√)
exports.getById = (req, res, next) => {
    repository.getById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// 2.10. Listando os Produtos de uma tag (√)
exports.getByTag = (req, res, next) => {
    repository.getByTag(req.params.tag)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

// PUT - Update -> Atualizar um recurso (req)

// 2.11. Atualizando um produto (√)
exports.put = (req, res, next) => {
    repository.update(req.params.id, req.body)
        .then(x => {
            res.status(200).send({ message: 'Produto atualizado com sucesso!' });
        })
        .catch(err => {
            res.status(400).send({ message: 'Falha ao atualizar produto!', data: err });
        });
}

// DELETE - Delete -> Excluir um recurso (req)

// 2.12. Excluindo um produto (√)
exports.delete = (req, res, next) => {
    repository.delete(req.body.id)
        .then(x => {
            res.status(200).send({ 
                message: 'Produto removido com sucesso!' 
            });
        }).catch(err => {
            res.status(400).send({ 
                message: 'Falha ao remover produto!', 
                data: err 
            });
        });
}