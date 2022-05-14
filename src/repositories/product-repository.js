'use strict';

const mongoose = require('mongoose');

const Product = mongoose.model('Product'); 

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos
exports.get = async() => {
    const res = await Product.find({ active: true }, 'title price slug');
    return res;
}

// 2.8. Listando um Produto pelo slug
exports.getBySlug = async(slug) => {
    const res = await Product.findOne({ slug: slug, active: true }, 'title description price slug tags');
    return res;
}

// 2.9. Listando um Produto pelo Id
exports.getById = async(id) => {
    const res = await Product.findById(id);
    return res;
}

// 2.10. Listando os Produtos de uma tag
exports.getByTag = async(tag) => {
    const res = await Product.find({ tags: tag, active: true }, 'title description price slug tags');
    return res;
}

// POST - Create -> Criar um recurso (req)

// 2.6. Criando um Produto
exports.create = async(data) => {
    var product = new Product(data);
    await product.save();
}

// PUT - Update -> Atualizar um recurso (req)

// 2.11. Atualizando um produto
exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

// 2.12. Excluindo um produto
exports.delete = async(id) => {
    await Product
        .findOneAndRemove(id);
}