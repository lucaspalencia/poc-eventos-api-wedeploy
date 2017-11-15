import { Router } from 'express'
import service from './services/auth'

const router = new Router()

router.get('/', service.authenticate)

export default router
