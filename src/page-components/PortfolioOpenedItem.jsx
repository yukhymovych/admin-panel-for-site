import React from 'react';

const PortfolioOpenedItem = (props) => {
   return (
      <section className="section post">
         <div className="wrapper">
            {
               props.portfolio.map((item) => {
                  if (item.title === props.general.match.params.name){
                     return(
                        <>
                           <h1 className="portfolio__header">{item.title}</h1>
                           <img className="portfolio__img" src={item.imgSrc} alt=""/>
                           <p className="portfolio__p">{item.description}</p>
                        </>
                     )
                  }
               })
            }
         </div>
      </section>
   );
}

export default PortfolioOpenedItem;
