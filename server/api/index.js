import { Router } from 'express'

import StripeController from './controllers/Stripe'

// Create the router object
const router = Router()

// Add the payment route
router.post('/payment', StripeController.chargeCard)

// Export the router for use
export default router
