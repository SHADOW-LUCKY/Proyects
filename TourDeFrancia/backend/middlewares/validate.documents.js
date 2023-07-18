import {validationResult} from 'express-validator';
/* funciones para optimizar el codigo */
const validate = (req, res, next) => {
      /* validar los datos */
   /* inicializar los errores */
   const errors = validationResult(req)
   /* validar si hay errores */
   if (!errors.isEmpty()) {
      return res.status(400).json(errors)
   }
   /* si funciono continuar con el resto de codigo */
   next()
}

export default validate