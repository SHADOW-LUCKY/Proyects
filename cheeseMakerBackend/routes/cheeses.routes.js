const { Router } = require('express');
const { check } = require('express-validator');

const { validateDocuments} = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.jwt.js');
const { isAdminRole } = require('../middlewares/validate.role.js');

const {getCheeses, postCheese, putCheese, deleteCheese} = require('../controllers/cheese.controllers.js');

const router = Router();

router.get('/', getCheeses);
router.post('/', [
    validateJWT,
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validateDocuments 
], postCheese);
router.put('/:id',[
    validateJWT,
    validateDocuments
], putCheese);
router.delete('/:id',[
    validateJWT,
    check('id', 'no es id valido').isMongoId(),
    isAdminRole,
    validateDocuments
], deleteCheese);

module.exports = router;