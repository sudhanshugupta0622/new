import express from 'express'
import {homeController} from '../controller/homcontoller.js'

const router = express.Router()

router.get('/',homeController)

export default router