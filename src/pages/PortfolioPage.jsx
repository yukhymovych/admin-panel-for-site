import PortfolioSection from '../page-components/PortfolioSection';
import PortfolioOpenedItem from '../page-components/PortfolioOpenedItem';
import React from 'react';

import {
   Switch,
   Route
} from "react-router-dom";

const PortfolioPage = () => {
   return (
      <Switch>
         <Route exact path="/portfolio/"
            render={() =>
               <PortfolioSection />
            }
         />

         <Route path="/portfolio/:name"
            render={(props) =>
               <PortfolioOpenedItem 
                  general={props}
               />
            }
         />
      </Switch>
   );
}

export default PortfolioPage;
