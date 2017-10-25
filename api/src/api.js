import { Router } from 'express'
import service from './service'

const router = new Router()

router.get('/:id?', service.find)
router.post('/', service.create)
router.put('/:id', service.update)
router.delete('/:id', service.remove)

export default router
