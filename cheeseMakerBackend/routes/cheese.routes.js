const { Router } = require('express');
const { check } = require('express-validator');


const { validateDocuments} = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.jwt.js');
const { isAdminRole } = require('../middlewares/validate.role.js');

const { 
        getCheeses, getCheese, postCheese, putCheese, deleteCheese
        } = require('../controllers/cheese.controllers.js');

const { findCategoryById, findCheeseById } = require('../helpers/db.validators.js');


const router = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
router.get('/', getCheeses );

// Obtener una categoria por id - publico
 router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( findCheeseById ),
    validateDocuments,
], getCheese ); 

// Crear categoria - privado - cualquier persona con un token válido
 router.post('/', [ 
    validateJWT,
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('categoria','No es un id de Mongo').isMongoId(),
    check('categoria').custom( findCategoryById ),
    validateDocuments
], postCheese ); 

// Actualizar - privado - cualquiera con token válido
 router.put('/:id',[
    validateJWT,
    // check('categoria','No es un id de Mongo').isMongoId(),
    check('id').custom( findCheeseById ),
    validateDocuments
], putCheese ); 

// Borrar una categoria - Admin
 router.delete('/:id',[
    validateJWT,
    isAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( findCheeseById ),
    validateDocuments,
], deleteCheese); 


module.exports = router;