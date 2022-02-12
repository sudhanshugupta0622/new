import express from 'express'
//import home from '../controller/homcontoller.js'
import {aboutController} from '../controller/aboutcontoller.js'
const routerAbout= express.Router()

routerAbout.get('/about',aboutController)

export default routerAbout