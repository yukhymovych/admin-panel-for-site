import Hero from '../page-components/Hero';
import About from '../page-components/About';
import Portfolio from '../page-components/Portfolio';
import Blog from '../page-components/Blog';

import React from 'react';

const HomePage = (props) => {
   return(
      <>
         <Hero 
            header={props.header}
            subheader={props.subheader}
         />
         <About 
            about={props.about}
         />
         <Portfolio 
            portfolioBtn={props.portfolioBtn}
         />
         <Blog 
            articles={props.articles}
            blogBtn={props.blogBtn}
            // setPostData={props.setPostData}
         />
      </>
   );
}

export default HomePage;
