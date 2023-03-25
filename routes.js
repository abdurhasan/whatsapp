import { Router } from 'express'
import sessionsRoute from './routes/sessionsRoute.js'
import chatsRoute from './routes/chatsRoute.js'
import groupsRoute from './routes/groupsRoute.js'
import response from './response.js'

const router = Router()

router.use('/whatsapp/sessions', sessionsRoute)
router.use('/whatsapp/chats', chatsRoute)
router.use('/whatsapp/groups', groupsRoute)

router.all('/whatsapp/*', (req, res) => {
    console.log(req.url)
    
    response(res, 404, false, 'The requested url cannot be found.')
})

export default router
