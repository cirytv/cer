import { Router } from 'express'
import { body, param } from 'express-validator'
import {
  getAffiliates,
  addAffiliate,
  deleteAffiliate,
  getAffiliateById,
  updateAffiliate,
} from '../handlers/affiliate'
import { handleInputErrors } from '../middleware/index'

// create routers
export const router_affiliates = Router()

// Routing affiliates
router_affiliates.get('/', getAffiliates)

router_affiliates.get(
  '/:id',
  param('id').isInt().withMessage('Invalid ID'),
  getAffiliateById as any
)

router_affiliates.post('/', addAffiliate as any)

router_affiliates.put(
  '/:id',
  param('id').isInt().withMessage('Not Valid ID'),
  handleInputErrors,
  updateAffiliate as any
)

router_affiliates.delete(
  '/:id',
  param('id').isInt().withMessage('Not Valid ID'),
  handleInputErrors,
  deleteAffiliate as any
)
