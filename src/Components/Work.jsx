import ProjectCard from "./ProjectCard";

import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.jpg';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.jpg';
import project5 from '../assets/images/project-5.jpg';
import project6 from '../assets/images/project-6.jpg';

const works = [
  {
    imgSrc: project1,
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://github.com/Krishkumarchhabra25'
  },
  {
    imgSrc: project2,
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: 'https://github.com/Krishkumarchhabra25'
  },
  {
    imgSrc: project3,
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: ''
  },
  {
    imgSrc: project4,
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/Krishkumarchhabra25'
  },
  {
    imgSrc: project5,
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/Krishkumarchhabra25'
  },
  {
    imgSrc: project6,
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/Krishkumarchhabra25'
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
