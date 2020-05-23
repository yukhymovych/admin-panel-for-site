import Hero from '../page-components/HeroSection';
import AboutSection from '../page-components/AboutSection';
import PortfolioSection from '../page-components/PortfolioSection';
import BlogSection from '../page-components/BlogSection';

import React from 'react';

const HomePage = (props) => {
   return(
      <>
         <Hero 
            header={props.header}
            subheader={props.subheader}
         />
         <AboutSection 
            about={props.about}
         />
         <PortfolioSection
            portfolio={props.portfolio}
            portfolioBtn={props.portfolioBtn}
            showBtn={props.showBtn}
         />
         <BlogSection 
            articles={props.articles}
            blogBtn={props.blogBtn}
            showBtn={props.showBtn}
         />
      </>
   );
}

export default HomePage;
