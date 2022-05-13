'use strict';

const express = require('express'); 
const router = express.Router();  
const controller = require('../controllers/product-controller');

router.get('/', controller.get);            // GET - Read -> Ler um recurso (req)
router.get('/:slug', controller.getBySlug);     // 2.8. Listando um Produto pelo slug
router.get('/admin/:id', controller.getById);   // 2.9. Listando um Produto pelo Id
router.get('/tags/:tag', controller.getByTag);   // 2.10. Listando os Produtos de uma tag
router.post('/', controller.post);          // POST - Create -> Criar um recurso (req)
router.put('/:id', controller.put);         // PUT -  Update -> Atualizar um recurso (req)
router.delete('/', controller.delete);      // DELETE - Delete -> Excluir um recurso (req)

module.exports = router;                    //  exportar o modulo router