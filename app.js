import express from 'express'
import TemplateRoute from './routes/Template.js';
import cors from 'cors'
const app = express();
const whitelist = ['https://portgen-frontend.vercel.app','http://localhost:3000'];
const corsOptions = {
  origin:(origin,callback)=>{
    if(whitelist.includes(origin)||!origin){
      callback(null,true)
    }else{
      callback(new Error('CORS NOT ALLOWED'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/Template',TemplateRoute);
app.get('/',(req,res)=>{
  res.send('working..')
})
app.listen(3001, ()=>{
  console.log('port don start');
})
