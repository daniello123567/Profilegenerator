import express from 'express'
import TemplateRoute from './routes/Template.js';
import cors from 'cors'
const app = express();
app.use(cors({origin:['https://portgen-frontend.vercel.app/','http://localhost:3000'],methods:["GET","POST","DELETE","PUT","OPTIONS"],allowedHeaders:['Content-Type', 'Authorization']}));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/Template',TemplateRoute);
app.get('/',(req,res)=>{
  res.send('working..')
})
app.listen(3001, ()=>{
  console.log('port don start');
})
