'use strict';

const express = require('express'); 

const router = express.Router();  

// Rota Principal

// GET - Read (Ler) - Recuperar um recurso (req) ou uma coleção de recursos
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
}); 

module.exports = router; //  exportar o modulo router
