import service from './service'
import { Router } from 'express'

const router = new Router()

router.get('/:id?', service.find)
router.post('/create', service.create)
router.put('/update/:id', service.update)
router.delete('/delete/:id', service.remove)

export default router