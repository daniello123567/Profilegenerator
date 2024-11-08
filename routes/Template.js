import express from 'express'
import fetch from 'node-fetch';
import ReturnNextjsFiles from '../utils/Files.js';
import { NameCanBeAlias } from '../utils/utils.js';
const TemplateRoute = express.Router()
TemplateRoute.route('/')
   .post(async (req, res) => {
    const { ImageUrl,NamesofUser,workofuser,Heromsg,Herosummary,Email,Skills,Projects } = req.body;

    if(!ImageUrl||!NamesofUser||!workofuser||!Heromsg||!Email||!Skills||!Projects)res.status(400).send('incomplete info')
    const processedName = String(NamesofUser).split(' ').join('-');

    const files = ReturnNextjsFiles(ImageUrl,NamesofUser,workofuser,Heromsg,Herosummary,Email,Skills,Projects);
    const aliase = await NameCanBeAlias(processedName);

    const Deploy = async ()=>{
      try {
    const response = await fetch("https://api.vercel.com/v13/deployments",{
    method:"POST",
    headers:{
      "Authorization":`Bearer cDdJr8A0iejkRn9UECLTvwJS`,
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      alias:[`${aliase}`],
      public:true,
      name:`${processedName.toLowerCase()}`,
      files:files,
      projectSettings:{
        framework:"nextjs"
      }
    })
   })
   const data = await response.json();

   return data.project.id
  } catch (error) {
  console.error(error)
  }
}
res.json({message:"working on it"});
let projectid = await Deploy();
const CheckRedyState = async()=>{
  const response = await fetch(`https://api.vercel.com/v13/projects/${projectid}`,{
   method:'GET',
   headers:{
     "Authorization":'Bearer cDdJr8A0iejkRn9UECLTvwJS',
     "Content-Type":'application/json'
   }
  });
  const project = await response.json();
  return project.targets.production.readyState.toString()
}
const ResolveWhenReadyState = async ()=>{
  return new Promise(async (resolve,reject)=>{
    const checkingForBuild = setInterval(async ()=>{
      let readyState = CheckRedyState();
      if(await readyState==='READY'){
        clearInterval(checkingForBuild);
        res.json({yournewurl:aliase,status:'ok'})
      }else{
        console.log(await readyState);
        res.json({message:"still building..."})
      }
    },2000);


  })
}

ResolveWhenReadyState()


  });

export default TemplateRoute;
