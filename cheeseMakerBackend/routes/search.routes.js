const { Router } = require('express');
const { search } = require('../controllers/search.controllers.js');

const router = Router();


router.get('/:coleccion/:criterio', search )




module.exports = router;