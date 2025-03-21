import { ButtonPrimary } from "./Button";
import logo from "../assets/images/logo.svg"

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Krishkumarchhabra25'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/krishchhabra25/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/KrishChhabra25'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/framesbykrish_/'
    },
   
  ];


const Footer = () => {
  return (
    <section className="section">
       <div className="container">
         <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
              <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
              </h2>

              <ButtonPrimary classes="reveal-up" href="mailto:krishkumarchhabra25@gmail.com" label="Start Project" icon="chevron_right" />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:pl-20">

              <div>
                <p className="mb-2 reveal-up">Sitemap</p>
                <ul>
                  {sitemap.map(({label , href},key)=>(
                     <li key={key}>
                        <a href={href} className="block reveal-up text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                          {label}
                        </a>
                     </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2 reveal-up">Socials</p>
                <ul>
                  {socials.map(({label , href},key)=>(
                     <li key={key}>
                        <a href={href} target="_blank" className="block reveal-up text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                          {label}
                        </a>
                     </li>
                  ))}
                </ul>
              </div>

            </div>
         </div>

         <div className="flex items-center justify-between pt-10 mb-8">
           <a href="/" className=" logo reveal-up">
             <img src={logo} alt="Logo" width={40} height={40} className="" />
           </a>
           <p className="text-zinc-500 text-sm reveal-up">&copy; 2024<span className="text-zinc-200">krishkumarchhabra</span></p>
         </div>
       </div>
    </section>
  )
}

export default Footer
