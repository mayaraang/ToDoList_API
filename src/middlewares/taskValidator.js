const { body } = require('express-validator')

const validateTask = [
  body('title')
    .notEmpty().withMessage('O título é obrigatório.')
    .isString().withMessage('O título deve ser um texto.'),
  
  body('description')
    .optional()
    .isString().withMessage('A descrição deve ser um texto.'),

  body('completed')
    .optional()
    .isBoolean().withMessage('O campo completed deve ser um valor booleano.')
]

module.exports = { validateTask }