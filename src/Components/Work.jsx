import ProjectCard from "./ProjectCard";

import project1 from '../assets/images/arohimediaproject.png';
import project2 from '../assets/images/clickezy.png';
import project3 from '../assets/images/Screenshot 2025-01-08 154602.png';
import project4 from '../assets/images/odishataikondoweb.png';
import project5 from '../assets/images/Screenshot 2025-01-08 160630.png';
import project6 from '../assets/images/fullstackecommerce.png';
import project7 from '../assets/images/wemakedevsclone.png';
import project8 from '../assets/images/eccomerce.png';
import project9 from '../assets/images/spotifyclone.png';

const works = [
  {
    imgSrc: project1,
    title: 'Aarohi media App',
    tags: ['React', 'gsap', 'Tailwind css' , 'Redux'],
    projectLink: 'https://aarohimediatest.netlify.app/#/'
  },
  {
    imgSrc: project2,
    title: 'Clickezy Web App',
    tags: ['Nextjs', 'Tailwindcss' , 'Redux'],
    projectLink: 'https://clickezy-frontend.vercel.app/'
  },
  {
    imgSrc: project3,
    title: 'Heads App',
    tags: ['Swift', 'Swift Ui' , 'Avf Foundation' , 'GeoLocation'],
    projectLink: 'https://github.com/Krishkumarchhabra25'
  },
  {
    imgSrc: project4,
    title: 'odishataekwondo',
    tags: ['React', 'Redux' ,'Tailwindcss'],
    projectLink: 'https://odishataekwondoassociation.com/#/'
  },
  {
    imgSrc: project5,
    title: 'Wallpaper App',
    tags: ['React Native', 'Download feature'],
    projectLink: 'https://github.com/Krishkumarchhabra25'
  },
  { 
    imgSrc: project6,
    title: 'FullStack Projets',
    tags: ['React js', 'Tailwind css' , 'Prisma' , 'mongoDB'],
    projectLink: 'https://github.com/Krishkumarchhabra25/Pratice-EcommerceWebsite'
  },
  {
    imgSrc: project7,
    title: 'wemakedevlopers',
    tags: ['React js', 'Development'],
    projectLink: 'https://github.com/Krishkumarchhabra25/wemakedevlopers'
  },
  {
    imgSrc: project8,
    title: 'Eccomerce',
    tags: ['React js', 'MongoDb' , 'Prisma' , 'SupaBase'],
    projectLink: 'https://shopping-shop-krish.vercel.app/'
  },
  {
    imgSrc: project9,
    title: 'Spotify Clone',
    tags: ['React js', 'MongoDb' , 'Prisma' , 'SupaBase'],
    projectLink: 'https://spotifymusic-krish.vercel.app/'
  },
];


const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
         <h2 className="headline-2 mb-8 reveal-up">
           My Portfolio highlights
         </h2>

         <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">

           {
            works.map(({imgSrc,title, tags, projectLink} , key)=>(
                <ProjectCard  key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up" />
            ))
           }
         </div>
      </div>
    </section>
  )
}

export default Work
