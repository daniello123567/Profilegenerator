const ReturnNextjsFiles = (UsersImage,NamesOfUser,RoleOfUser,Heromsg,Herosummary,Email,Skills,projects)=>{
   console.log(UsersImage,NamesOfUser,RoleOfUser,Heromsg,Herosummary,Email,Skills,projects,"from files")
  const files = [
    {
    file: 'app/components/Image.tsx',
    data: `import React from "react"
        import Image from "next/image"
        function Imager() {
        const UsersImage = '${UsersImage}';

const CurveArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 82"
      width="70"
      height="82"
      style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)" }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <clipPath id="__lottie_element_214">
          <rect width="70" height="82" x="0" y="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_214)">
        <g
          style={{ display: "block" }}
          transform="matrix(1,0,0,1,-4.425998687744141,-3)"
          opacity="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity="0"
            stroke="rgb(71,71,71)"
            strokeOpacity="1"
            strokeWidth="3"
            d="M69.55899810791016,80.29199981689453 C59.981998443603516,79.9990005493164 50.334999084472656,80.53600311279297 40.854000091552734,79.35600280761719 C31.371999740600586,78.1760025024414 21.7810001373291,75.01899719238281 15.711999893188477,68.72899627685547 C7.603000164031982,60.32600021362305 7.5,47.900001525878906 12.284000396728516,37.827999114990234 C17.066999435424805,27.756000518798828 25.96500015258789,19.542999267578125 34.90599822998047,11.770999908447266"
          />
        </g>
        <g
          style={{ display: "block" }}
          transform="matrix(1,0,0,1,-4.425998687744141,-3)"
          opacity="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity="0"
            stroke="rgb(71,71,71)"
            strokeOpacity="1"
            strokeWidth="3"
            d="M8.925999641418457,11.708000183105469 C19.923999786376953,11.986000061035156 31.384000778198242,12.17199993133545 41.34400177001953,7.5 C36.08000183105469,12.184000015258789 32.439998626708984,18.659000396728516 31.17300033569336,25.59000015258789"
          />
        </g>
      </g>
    </svg>
  );
};

return (
  <div className="w-[14.5625em] pt-[3em] relative   mx-auto h-[14.4375em]">
  <div className="absolute left-[2em] w-[3.98854375em] bottom-[0.5em] h-[5.05208125em]">
  <CurveArrowIcon/>
  </div>
  <p className={"font-geaugu w-max text-[2em] bottom-[-.3em] left-[3em] text-[#474747] font-[700] absolute"}>Yours Truly</p>
  <div className="border-[#474747] mx-auto w-[7.4375em]  rounded-full h-[7.4375em] border-[0.1875em]">
    <Image className="w-full h-full rounded-[inherit] object-cover" alt="image" src={UsersImage} width={700} height={700}/>
  </div>
  </div>
)
}

export default Imager
`
  },
  {
    file:'app/components/Main.tsx',
    data:`import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Main() {
const NameofUser = '${NamesOfUser}';
const WorkofUser = '${RoleOfUser}';
const Heromsg = '${Heromsg}';
const Herosummary = '${Herosummary}';
const src = '${UsersImage}';
;
const Email = 'mailto:${Email}';

const Skills = ${Skills};
const Projects:Array<Project> = ${projects}
type Project = {
id:string|null,
image:string,
ShortDesc:string,
Name:string,
GithubLink:string,
LiveLink:string,
}


const Header = ()=>{
  return ( <div className='w-full bg-[#eff3eb]  px-[1em] flex justify-between  py-[.2em] h-[2.61770625em]'>
    <div className='w-max flex items-center gap-[.4em] h-full '>
      <div className=' h-full w-[2.5em] rounded-md'>
      <Image className='w-full h-full rounded-[inherit] object-cover' alt='image' src={src} width={700} height={700}/>
      </div>
      <div className={'text-[.7rem] text-[#363636] text'}>
        <p>{NameofUser}</p>
        <p>{WorkofUser}</p>
      </div>
    </div>
    <div className='text-[#6D6D6D] md:w-[40%] w-max justify-between font-[400] flex items-center'>
      <Link href="#works">My Works</Link>
      <Link className='w-[10.3239375em] hidden hover:bg-[#fff2d2] transition-all duration-200 hover:border-[#ffd65b] gap-[.3em] md:flex justify-center items-center rounded-[0.25em] border border-[#dbdbdb] h-[3em]' href={Email}>
      <Image className='w-[0.875em] h-[0.875em] ' alt='image' src="https://cdn.prod.website-files.com/660450a4a9bd743720b9e518/662f8508adf84d51ec9cf6fa_bi_chat-text%20(2).png" width={700} height={700}/>
      <p>Send Message</p>
      </Link>
    </div>
  </div>)
}
const Hero = ()=>{
return ( <div id='Home' className='w-full p-[1em] md:flex-row md:justify-between border-b md:items-start border-b-[#dbdbdb] flex justify-center flex-col items-center md:pt-[6.25em] gap-[1em] pt-[4.375em] px-[4%] h-[26.8125em]'>
  <p className='text-[2em] md:w-[68%] lg:w-[60%] md:text-left md:text-[3em] md:leading-[64px] lg:text-[3.5em] lg:leading-[76px] sm:text-[2.375em] sm:leading-[54px] font-[400] text-center text-[#363636] leading-[44px]'>{Heromsg}</p>
<div className='flex md:justify-start md:items-start md:w-[35%] justify-center items-center flex-col gap-[1.5em]'>
  <p className='text-[#6D6D6D] md:text-left sm:text-[1.0625em] sm:leading-[28px] md:text-[1.125em] leading-[24px] text-center'>{Herosummary}</p>
  <Link className='w-[10.3239375em] hover:bg-[#fff2d2]  transition-all duration-200 hover:border-[#ffd65b] bg-[#ffd65b]  gap-[.3em] flex justify-center items-center rounded-[0.25em] border border-[#dbdbdb] h-[3em]' href={Email}>
     <Image className='w-[0.875em]  h-[0.875em] ' alt='image' src="https://cdn.prod.website-files.com/660450a4a9bd743720b9e518/662f8508adf84d51ec9cf6fa_bi_chat-text%20(2).png" width={700} height={700}/>
     <p>Send Message</p>
     </Link>
 </div>
 </div>)
}
const Skill = ({skill}:{skill:string})=>{
return <div className={' text-[1.2em] h-[2em] font-[400] sm:text-[1.5em] flex justify-center items-center font-geaugu w-max '}>{skill}</div>
}
const SkillsComponent = ()=>{
  return (<div style={{backgroundImage:'url("/bro.svg")'}} className='w-full px-[1em] h-max py-[1em]'>
    <div className='flex flex-wrap gap-[1em] justify-center mt-[1em] items-center'>
   <p className={' h-[2.8em] text-[1.2em] sm:text-[1.5em] font-[400] flex justify-center items-center font-geaugu w-max '}>My Skills:</p>

       {Skills.map((skill:string)=>{
        return <Skill key={skill} skill={skill}/>
       })}
       </div>
      </div>)
}
const GithubIcon = ()=>{
return (<svg  className='w-[1.0625em] h-[1.0625em]' viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#dbdbdb" stroke="#dbdbdb"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"> <g fill="#4f627d"> <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"></path> <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"></path> </g> </g></svg>)
}
const Project = ({Name,ShortDesc,image,GithubLink,LiveLink}:{Name:string,ShortDesc:string,image:string,GithubLink:string,LiveLink:string})=>{
return (<div className='h-max group flex flex-col border border-[#dbdbdb] bg-[#dfdfdf] w-full'>
<div className='w-full pt-[1.25em] px-[1.25em] bg-inherit h-[18.03125em]'>
  <div className='w-full group-hover:scale-105 transition-all duration-150 ease-in-out h-full'>
    <Image className='w-full h-full object-cover' alt='image' src={image} width={500} height={500}/>
  </div>
</div>
<div className='w-full z-[999] flex justify-between items-center py-[0.75em] px-[1.25em] bg-white h-[5em]'>
  <div className='h-full flex flex-col justify-between'>
    <p className='text-[#a1a1a1] text-[0.75em]'>{ShortDesc}</p>
    <p className='text-[#363636]'>{Name}</p>
  </div>
  <div className='flex gap-[.5em]'>
  <a target='_blank' rel="noopener noreferrer" href={GithubLink} className='w-[2.5em] h-[2.5em] transition-all duration-150 cursor-pointer flex justify-center items-center hover:border-[#ffd65b] hover:bg-[#ffd65b1f] rounded-full border border-[#dbdbdb]'>
    <GithubIcon/>
  </a>
  <a target='_blank' rel="noopener noreferrer" href={LiveLink} className='w-[2.5em] h-[2.5em] transition-all duration-150 cursor-pointer flex justify-center items-center hover:border-[#ffd65b] hover:bg-[#ffd65b1f] rounded-full border border-[#dbdbdb]'>
  <Image className='w-[1.0625em] object-cover rounded-[inherit] h-[1.0625em]' alt='image' src='https://cdn.prod.website-files.com/660450a4a9bd743720b9e518/661257ad68ca560c90a431ec_home%20icons.png' width={500} height={500}/>

  </a>

  </div>
</div>
</div>)
}
const ProjectsSection = ()=>{
return ( <div id='works' className='border-t pb-[5em] pt-[1em] border-t-[#dbdbdb] px-[3%]'>
  <p className='text-[#6d6d6d] mb-[2em]'>My Work Gallery</p>
  <div className='grid lg:grid-cols-3 place-items-center md:grid-cols-2 grid-cols-1 gap-[1em]'>
   {Projects.map((project:Project)=>{
     return <Project key={project.ShortDesc} Name={project.Name} ShortDesc={project.ShortDesc} GithubLink={project.GithubLink} LiveLink={project.LiveLink} image={project.image} />
   })}
  </div>
</div>)
}
const Footer = ()=>{
return (<div className='w-full border-t border-t-[#dbdbdb] text-[#6d6d6d] text-[0.75em] flex justify-center items-center py-[1.25em]'>
  <p>© {NameofUser}</p>
</div>)
}
return (
  <div className={' font-Neu pt-[1em] w-full  min-h-[100vh]'}>
  <Header/>
  <Hero/>
  <SkillsComponent/>
  <ProjectsSection/>
  <Footer/>
  </div>
)
}

export default Main
`
  },
  {file:'app/globals.css',
    data:`@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
font-family: geaugu;
src: url('https://fonts.gstatic.com/s/gaegu/v17/TuGSUVB6Up9NU573jsw86MY.woff2');
}
@font-face {
font-family: Neu;
src: url('https://cdn.prod.website-files.com/660450a4a9bd743720b9e518/660d5577dbf00cc3c6b628fa_NeueMontreal-Regular.otf');
}
`
  },
  {file:'app/layout.tsx',
    data:`import './globals.css'
export const metadata = {
title: '${NamesOfUser}',
description: 'portfolio page for ${NamesOfUser}',
icons:'${UsersImage}'
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
  <html lang="en">
    <body className='bg-[#eff3eb]'>{children}</body>
  </html>
)
}
`
  },
  {file:'app/page.tsx',
    data:`import React from 'react'
import Image from './components/Image'
import Main from './components/Main'

function page() {
const Introduction = ()=>{
  return (<div style={{backgroundImage:'url("/bro.svg")'}} className='w-full pb-[3em] flex flex-col justify-center items-center h-max bg-white'>
    <Image/>
  </div>)
}
return (
  <>
  <Introduction/>
  <Main/>
  </>
)
}

export default page
`
  },
  {file:'public/bro.svg',
    data:`<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'>
<circle fill='rgb(234, 234, 241)' cx='3' cy='3' r='1.5'/>
</svg>
`},
{file:'package.json',
data:JSON.stringify({
"name": "tiktok-clone",
"version": "0.1.0",
"private": true,
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
},
"dependencies": {
  "next": "14.2.15",
  "react": "^18",
  "react-dom": "^18",
},
"devDependencies": {
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "eslint": "^8.0.0",
  "eslint-config-next": "14.2.15",
  "postcss": "^8",
  "tailwindcss": "^3.4.1",
  "typescript": "^5"
}
}
)
},
{file:'tailwind.config.ts',
data:`import type { Config } from "tailwindcss";

const config: Config = {
content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
  extend: {
    fontFamily:{
      geaugu:['geaugu','sans-serif'],
      Neu:['Neu','sans-serif']
    },
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
    keyframes:{
      blink:{
        '0%':{"background-color":'red'},
        '50%':{"background-color":'white'},
        '100%':{"background-color":'red'},
      },
      marque:{
        '0%': { transform: 'translateX(100%)', opacity: '1' },

        '90%': { opacity: '1' },

        '100%': { transform: 'translateX(-90%)', opacity: '0' }
      },

    },
  animation:{
    'error':'blink 2s linear infinite',
    'marque':'marque 10s linear infinite'
  }
  },
},
plugins: [],
safelist: [
  {
    pattern: /bg-(red|orange|pink|rose|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|stone|neutral|zinc|gray|slate)-(50|100|200|300|400|500|600|700|800|900|950)/,
  },{
    pattern: /from-(red|orange|pink|rose|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|stone|neutral|zinc|gray|slate)-(50|100|200|300|400|500|600|700|800|900|950)/,
  },
  {
    pattern: /via-(red|orange|pink|rose|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|stone|neutral|zinc|gray|slate)-(50|100|200|300|400|500|600|700|800|900|950)/,
  },
  {
    pattern: /to-(red|orange|pink|rose|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|stone|neutral|zinc|gray|slate)-(50|100|200|300|400|500|600|700|800|900|950)/,
  },
  {
    pattern: /bg-gradient-to-(t|tt|tr|r|br|b|bl|l|tl)/,
  },
],

};
export default config;
`
},
{file:'postcss.config.mjs',
data:`/** @type {import('postcss-load-config').Config} */
const config = {
plugins: {
  tailwindcss: {},
},
};

export default config;
`
},
{file:'tsconfig.json',
data:JSON.stringify({
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
)
},
{
file:'next.config.mjs',
data:`/** @type {import('next').NextConfig} */
const nextConfig = {
images:{
  domains:[],
  remotePatterns:[{
    protocol:'https',
    hostname:'**'
  }]
}
};

export default nextConfig;

`
},
{file:'next-env.d.ts',
data:`/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.
`
},
{file:'.eslintrc.json',
data:`{
"extends": ["next/core-web-vitals", "next/typescript"]
}
`
}];
if(UsersImage&&NamesOfUser&&RoleOfUser&&Heromsg&&Herosummary&&Email&&Skills&&projects){
  return files;
}else{
  console.log('incomplete information')
}
}
export default ReturnNextjsFiles;
