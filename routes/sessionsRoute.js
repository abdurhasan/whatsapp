import { Router } from 'express'
import sessionValidator from './../middlewares/sessionValidator.js'
import * as controller from './../controllers/sessionsController.js'

const router = Router()

router.get('/find/:id', sessionValidator, controller.find)

router.get('/status/:id', sessionValidator, controller.status)

router.get('/add/:id', controller.add)

router.delete('/delete/:id', sessionValidator, controller.del)

export default router
