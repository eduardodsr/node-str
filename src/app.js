'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const config = require('./config');

const app = express(); // Criar um servidor Web

const router = express.Router(); // Criar as Rotas

// Connecta ao banco
mongoose.connect(config.connectionString);

// Conecta ao banco
// mongoose.connect('mongodb+srv://admin:admin@cluster0.1qi3y.mongodb.net/banco?retryWrites=true&w=majority');

// Conecta ao banco MongoDB - Docker
// mongoose.connect('mongodb://docker:mongopw@localhost:55007');

// Carrega os Models
const Product = require('./models/product-model');
const Customer = require('./models/customer-model');
const Order = require('./models/order-model');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route'); 

// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '5mb' })); // limite JSON ate 5Mb

app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);


module.exports = app; //  exportar o modulo app

