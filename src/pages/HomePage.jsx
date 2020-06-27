import Hero from '../page-components/HeroSection';
import AboutSection from '../page-components/AboutSection';
import PortfolioSection from '../page-components/PortfolioSection';
import BlogSection from '../page-components/BlogSection';

import React from 'react';

const HomePage = (props) => {
   return(
      <>
         <Hero />
         <AboutSection />
         <PortfolioSection showBtn={props.showBtn} />
         <BlogSection showBtn={props.showBtn} />
      </>
   );
}

export default HomePage;
