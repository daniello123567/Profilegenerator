import express from 'express'
import TemplateRoute from './routes/Template.js';
import cors from 'cors'
const app = express();
const whitelist = ['https://portgen-frontend.vercel.app','http://localhost:3000']
const corsOption = {
  origin:(origin,callback)=>{
    if(whitelist.indexOf(origin)!==1){
      callback(null,true)
    }else{
      callback(new Error('sth went wrong'))
    }
  },
  optionsSucessStatus:200
}
app.use(cors(corsOption));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/Template',TemplateRoute);
app.get('/',(req,res)=>{
  res.send('working..')
})
app.listen(3001, ()=>{
  console.log('port don start');
})
