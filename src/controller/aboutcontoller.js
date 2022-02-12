import {join} from 'path';

const aboutController = (req,res)=>{
    console.log(`about:-${join(process.cwd(),'views','about.html')}`);
   res.sendFile(join(process.cwd(),'src/views','about.html'))
}
export {aboutController}