import PortfolioSection from '../page-components/PortfolioSection';
import PortfolioOpenedItem from '../page-components/PortfolioOpenedItem';
import React from 'react';

import {
   Switch,
   Route
} from "react-router-dom";

const PortfolioPage = (props) => {
   return (
      <Switch>
         <Route exact path="/portfolio/"
            render={() =>
               <PortfolioSection 
                  portfolio={props.portfolio}
                  portfolioBtn={props.portfolioBtn}
               />
            }
         />

         <Route path="/portfolio/:name"
            render={(props2) =>
               <PortfolioOpenedItem 
                  portfolio={props.portfolio}
                  general={props2}
               />
            }
         />
      </Switch>
   );
}

export default PortfolioPage;
