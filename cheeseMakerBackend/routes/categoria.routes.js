const { Router } = require('express');
const { check } = require('express-validator');

const { validateDocuments} = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.jwt.js');
const { isAdminRole } = require('../middlewares/validate.role.js');

const { findCategoryById } = require('../helpers/db.validators.js');

const { postCategoria, getCategorias, getCategoria, putCategoria, delCategoria
      } = require('../controllers/categoria.controllers.js');

const router = Router();

/**
 * localhost/api/categorias
 */

// Crear categoria - private - cualquier persona con un token válido
router.post('/', [ 
   validateJWT, 
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validateDocuments
], postCategoria );

//  GetAll categories - public
router.get('/', getCategorias );

// Get categoria by id - public
router.get('/:id',[
      check('id', 'No es un id de Mongo válido').isMongoId(),
      check('id').custom( findCategoryById ),
      validateDocuments,
  ], getCategoria );

// update - private - anyone with a valid token
router.put('/:id',[
      validateJWT,
      check('nombre','El nombre es obligatorio').not().isEmpty(),
      check('id').custom( findCategoryById ),
      validateDocuments
  ], putCategoria );


  // Delete a category - Admin
router.delete('/:id',[
      validateJWT,
      isAdminRole,
      check('id', 'No es un id de Mongo válido').isMongoId(),
      check('id').custom( findCategoryById ),
      validateDocuments,
  ], delCategoria);


module.exports = router;