import React from 'react';
import { useSelector } from 'react-redux';

const PortfolioOpenedItem = (props) => {
   const store = useSelector(store => store);

   return (
      <section className="section post">
         <div className="wrapper">
            {
               store.portfolio.map((item) => {
                  if (item.title === props.general.match.params.name){
                     return(
                        <div key={item.id}>
                           <h1 className="portfolio__header">{item.title}</h1>
                           <img className="portfolio__img" src={item.imgSrc} alt=""/>
                           <p className="portfolio__p">{item.description}</p>
                        </div>
                     )
                  }
                  else{ // its needed to avoid some warnings
                     return true;
                  }
               })
            }
         </div>
      </section>
   );
}

export default PortfolioOpenedItem;
