import service from './service'
import { Router } from 'express'

const router = new Router()

router.get('/:id?', service.find)
router.post('/', service.create)
router.put('/:id', service.update)
router.delete('/:id', service.remove)

export default router