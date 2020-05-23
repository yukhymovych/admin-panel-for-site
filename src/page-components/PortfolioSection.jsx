import React from 'react';
import { Link } from "react-router-dom";

const PortfolioSection = (props) => {
   const showBtn = () => {
      if (props.showBtn === true) {
         return (
            <Link className="link section__btn centered-btn" to="/portfolio">{props.portfolioBtn}</Link>
         );
      }
   }

   return (
      <section className="section portfolio">
         <div className="wrapper">
            <h2>Portfolio</h2>
            <div className="portfolio__container">
               {
                  props.portfolio.map((item) => {
                     return(
                        <Link className="portfolio__item"  to={"/portfolio/" + item.title}>
                           <img src={item.imgSrc} alt="" />
                           <h3>{item.title}</h3>
                           <p>{item.description}</p>
                        </Link>
                     )
                  })
               }
            </div>
            {showBtn()}
         </div>
      </section>
   );
}

export default PortfolioSection;
