import express from 'express'
//import env from './env'
import router from './src/route/homerouter.js'
import routerAbout from './src/route/aboutrouter.js'
//import "./src/public/css/pg.css"
//import {join} from 'path'
import path from 'path'
const port = 8000
const app= express()
const __dirname = path.resolve();

//app.use(express.json())
app.use('/static',express.static(path.join(__dirname,'./src/public')));
//app.use(express.static(path.join(__dirname ,'./src/public')));
console.log(path.join(process.cwd(),'public'))
//app.use( express.static(path.join(__dirname,'public')));

app.use('/',router)
app.use('/',routerAbout)

app.listen(port,async()=>{
    try{
        console.log(`server is running at :http://localhost:${port}`);
    }catch(err)
    {
        console.log(err);
    }
})