import { ButtonOutline, ButtonPrimary } from "./Button"

import image4 from '../assets/images/image4.jpg';
import hero2 from '../assets/images/hero2.png';

const Hero = () => {

  return (
    <section className="pt-28 lg:pt-36" id="home">
    <div className="container lg:grid lg:grid-cols-2  items-center lg:gap-10">
      <div>
        <div className="flex items-center gap-3">
          <figure className="img-box w-9 h-9 rounded-lg">
            <img width={40} height={40} src={image4} alt="krish chhabra" className="img-cover" />
          </figure>
          <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0  rounded-full bg-emerald-400 animate-ping"></span>
            </span>
            Available for work
          </div>
        </div>

        <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
          Building Dynamic Website and Native Apps for the Future
        </h2>
        <div className="flex items-center gap-3">
          <ButtonPrimary
            href="https://drive.google.com/file/d/1pfb2ot003IBi1r_C1QO8uvh3KIVY9UUg/view?usp=sharing"
            target="_blank"
            label="Download CV"
            icon="download"
          />
          <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
        </div>
      </div>

      <div className="hidden lg:block">
        <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
          <img width={656} height={800} src={hero2} alt="krish-banner" className="w-full" />
        </figure>
      </div>
    </div>
  </section>
  );
};


export default Hero
