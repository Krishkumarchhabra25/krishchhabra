import SkillCard from "./SkillCard";


import swiftUIImage from '../assets/images/swiftui.svg';
import reactImage from '../assets/images/react.svg';
import jsImage from '../assets/images/javascript.svg';
import nodeImage from '../assets/images/nodejs.svg';
import expressImage from '../assets/images/expressjs.svg';
import mongoImage from '../assets/images/mongodb.svg';
import tailwindImage from '../assets/images/tailwindcss.svg';

const skillItem = [
  {
    imgSrc: swiftUIImage,
    label: 'Swift Ui',
    desc: 'SwiftUi',
  },
  {
    imgSrc: reactImage,
    label: 'React Native',
    desc: 'React Native',
  },
  {
    imgSrc: jsImage,
    label: 'JavaScript',
    desc: 'Interaction',
  },
  {
    imgSrc: nodeImage,
    label: 'NodeJS',
    desc: 'Web Server',
  },
  {
    imgSrc: expressImage,
    label: 'ExpressJS',
    desc: 'Node Framework',
  },
  {
    imgSrc: mongoImage,
    label: 'MongoDB',
    desc: 'Database',
  },
  {
    imgSrc: tailwindImage,
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">
         <h2 className="headline-2 reveal-up">
         Essential Tools I use
         </h2>

         <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
         Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications. 
         </p>

         <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
           {
            skillItem.map(({imgSrc,label ,desc}, key)=>(
               <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up" />
            ))
           }
         </div>
      </div>
    </section>
  )
}

export default Skill
