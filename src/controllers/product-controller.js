'use strict';

const mongoose = require('mongoose'); // importar o mongoose

const Product = mongoose.model('Product'); // importar o Product, mongoose.model

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos
exports.get = (req, res, next) => {
    
    // buscar todos os produtos
    Product.find({ active: true }, 'title price slug')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

// 2.8. Listando um Produto pelo slug
exports.getBySlug = (req, res, next) => {
    
    Product.findOne({ slug: req.params.slug, active: true }, 'title description price slug tags')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

// 2.9. Listando um Produto pelo Id
exports.getById = (req, res, next) => {
    
    Product.findById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

// 2.10. Listando os Produtos de uma tag
exports.getByTag = (req, res, next) => {
    
    Product.find({ tags: req.params.tag, active: true }, 'title description price slug tags')
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

// PUT - Update -> Atualizar um recurso (req)

// 2.11. Atualizando um produto

exports.put = (req, res, next) => {

    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
        }).then(x => {
            res.status(200).send({ 
                message: 'Produto atualizado com sucesso!' 
            });
        }).catch(err => {
            res.status(400).send({ 
                message: 'Falha ao atualizar produto!', 
                data: err 
            });
        });
}

// POST - Create -> Criar um recurso (req)

exports.post = (req, res, next) => {
    /**
     * var product = new Product();
     * product.title = req.body.title;
     **/
    var product = new Product(req.body); // criar instancia do product
    product.save()
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

// PUT - Update -> Atualizar um recurso (req)
/*
exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ 
        id: id,
        item: req.body
    });
}; 
*/

// DELETE - Delete -> Excluir um recurso (req)

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
}; 
