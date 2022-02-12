import {join} from 'path';

const homeController = async(req,res)=>{
    try{
         console.log(`home:-hello`);
     res.sendFile(join(process.cwd(),'src/views','home.html'))
    //  console.log("path:-")
    }
    catch(err)
    {
        console.log(err)
    }
   
}
export {homeController}