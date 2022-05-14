'use strict';

// importar 
const mongoose = require('mongoose'); 

const Product = mongoose.model('Product'); 

const ValidationContract = require('../validators/fluent-validator'); 

const repository = require('../repositories/product-repository'); 

// POST - Create -> Criar um recurso (req)

// 2.6. Criando um Produto
exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O title deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.slug, 3, 'O slug deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.description, 3, 'O description deve conter pelo menos 3 caracteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body)
        res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
        
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos
exports.get = async(req, res, nex) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}


// 2.8. Listando um Produto pelo Slug
exports.getBySlug = async(req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

// 2.9. Listando um Produto pelo Id
exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

// 2.10. Listando os Produtos de uma Tag
exports.getByTag = async(req, res, next) => {
    try {
        const data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

// PUT - Update -> Atualizar um recurso (req)

// 2.11. Atualizando um produto
exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({ message: 'Produto atualizado com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}


// DELETE - Delete -> Excluir um recurso (req)

// 2.12. Excluindo um produto
exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({ message: 'Produto removido com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}