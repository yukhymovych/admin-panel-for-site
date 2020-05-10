import PortfolioSection from '../page-components/PortfolioSection';
import React from 'react';

import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";

const PortfolioPage = (props) => {
   return (
      <>
         <PortfolioSection 
            portfolio={props.portfolio}
            portfolioBtn={props.portfolioBtn}
         />
      </>
   );
}

export default PortfolioPage;
