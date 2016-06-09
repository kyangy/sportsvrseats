import { Router } from 'express'

import StripeController from './controllers/Stripe'
import * as UserController from './controllers/User'

// Create the router object
const router = new Router()

// Stripe Routes
router.post('/payment', StripeController.chargeCard)

// User Routes
router.route('/getUsers').get(UserController.getUsers)
router.route('/addUser').post(UserController.addUser)
router.route('/deleteUser').post(UserController.deleteUser)

// Export the router for use
export default router
