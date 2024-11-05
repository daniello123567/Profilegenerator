import express from 'express'
import TemplateRoute from './routes/Template.js';
import cors from 'cors'
const app = express();
app.use(cors({origin:'*'}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/Template',TemplateRoute);
app.get('/',(req,res)=>{
  res.send('working..')
})
app.listen(3001, ()=>{
  console.log('port don start');
})
