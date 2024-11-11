import { Router } from 'express'
import { body, param } from 'express-validator'
import {
  getPropietarios,
  createPropietario,
  deletePropietario,
  getPropietarioById,
  updatePropietario,
} from '../handlers/propietario'
import { handleInputErrors } from '../middleware/index'

// create routers
export const router_propietarios = Router()

// Routing propietarios
router_propietarios.get('/', getPropietarios)

router_propietarios.get(
  '/:id',
  param('id').isInt().withMessage('Invalid ID'),
  handleInputErrors,
  getPropietarioById as any
)

router_propietarios.post(
  '/',
  // Validación
  body('name').notEmpty().withMessage('name required'),
  body('age')
    .isNumeric()
    .withMessage('Invalid age')
    .notEmpty()
    .withMessage('Propietario age required')
    .custom((value) => value > 0)
    .withMessage('Invalid age'),
  handleInputErrors,
  createPropietario as any
)

router_propietarios.put(
  '/:id',
  param('id').isInt().withMessage('Not Valid ID'),
  body('name').notEmpty().withMessage('Propietario name cant be empty'),
  body('age')
    .isNumeric()
    .withMessage('Valor no válido')
    .notEmpty()
    .withMessage('Product Price Cant Be Empty')
    .custom((value) => value > 0)
    .withMessage('Invalid age'),
  handleInputErrors,
  updatePropietario as any
)

router_propietarios.delete(
  '/:id',
  param('id').isInt().withMessage('Not Valid ID'),
  handleInputErrors,
  deletePropietario as any
)
