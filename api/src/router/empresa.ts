import { Router } from 'express'
import { body, param } from 'express-validator'
import {
  getAttendance,
  createAttendance,
  deleteAttendance,
  getAttendanceById,
  updateAttendance,
} from '../handlers/empresa'
import { handleInputErrors } from '../middleware/index'

// create routers
export const router_empresa = Router()

// Routing empresa
router_empresa.get('/', getAttendance)

router_empresa.get(
  '/:id',
  param('id').isInt().withMessage('Invalid ID'),
  handleInputErrors,
  getAttendanceById as any
)

router_empresa.post(
  '/',
  // Validación
  body('student_id').notEmpty().withMessage('student_id required'),
  handleInputErrors,
  createAttendance as any
)

router_empresa.put(
  '/:id',
  param('id').isInt().withMessage('Invalid ID'),
  body('student_id').notEmpty().withMessage('student_id required'),
  handleInputErrors,
  updateAttendance as any
)

router_empresa.delete(
  '/:id',
  param('id').isInt().withMessage('Invalid ID'),
  handleInputErrors,
  deleteAttendance as any
)
