import Hero from '../page-components/Hero';
import Portfolio from '../page-components/Portfolio';

import React from 'react';

const PortfolioPage = (props) => {
   return (
      <>
         <Portfolio 
            portfolioBtn={props.portfolioBtn}
         />
      </>
   );
}

export default PortfolioPage;
