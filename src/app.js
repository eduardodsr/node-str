'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // Criar um servidor Web

const router = express.Router(); // Criar as Rotas

// Conecta ao banco
mongoose.connect('mongodb+srv://admin:admin@cluster0.1qi3y.mongodb.net/banco?retryWrites=true&w=majority');
// mongoose.connect('mongodb://docker:mongopw@localhost:55007');


// Carrega os Models
const Product = require('./models/product-model');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app; //  exportar o modulo app