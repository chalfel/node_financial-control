const { Router } = require('express');
const routes = Router();

const EntryController = require('./app/controllers/EntryController');

routes.get('/entry',  EntryController.index);
routes.post('/entry', EntryController.store);
routes.get('/entry:id', EntryController.search);
routes.post('/entry:id', EntryController.delete);
routes.put('/entry', EntryController.update);

module.exports = routes;