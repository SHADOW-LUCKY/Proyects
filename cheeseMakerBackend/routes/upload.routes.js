const { Router } = require('express');
const { check } = require('express-validator');

const { validateDocuments } = require('../middlewares/validate.documents');
const { uploadFile } = require('../controllers/upload.controllers');


const router = Router();

router.post( '/', uploadFile );

module.exports = router;