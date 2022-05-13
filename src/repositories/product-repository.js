'use strict';
const mongoose = require('mongoose');

const Product = mongoose.model('Product'); // importar o Model, ele faz o acesso aos dados

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos

// 2.7. Listando os Produtos (√)
exports.get = () => {
    return Product.find({ active: true }, 'title price slug');
}

// 2.8. Listando um Produto pelo slug (√)
exports.getBySlug = (slug) => {
    return Product.findOne({ slug: slug, active: true }, 'title description price slug tags');
}

// 2.9. Listando um Produto pelo (√)
exports.getById = (id) => {
    return Product.findById(id);
}

// 2.10. Listando os Produtos de uma tag (√)
exports.getByTag = (tag) => {
    return Product.find({ tags: tag, active: true }, 'title description price slug tags')
}

// POST - Create -> Criar um recurso (req)

// 2.6. Criando um Produto (√)
exports.create = (data) => {
    var product = new Product(data); // criar instancia do product
    return product.save();
}

// PUT - Update -> Atualizar um recurso (req)

// 2.11. Atualizando um produto (√)
exports.update = (id, data) => {
    return Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

// 2.12. Excluindo um produto (√)
exports.delete = (id) => {
    return Product
        .findOneAndRemove(req.body.id);
}

/*
exports.get = async() => {
    const res = await Product.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
            slug: slug,
            active: true
        }, 'title description price slug tags');
    return res;
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id);
    return res;
}

exports.getByTag = async(tag) => {
    const res = Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags');
    return res;
}

exports.create = async(data) => {
    var product = new Product(data);
    await product.save();
}

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

exports.delete = async(id) => {
    await Product
        .findOneAndRemove(id);
}
*/