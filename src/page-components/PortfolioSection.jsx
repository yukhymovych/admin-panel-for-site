import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const PortfolioSection = (props) => {
   const store = useSelector(store => store);

   const showBtn = () => {
      if (props.showBtn === true) {
         return (
            <Link className="link section__btn centered-btn" to="/portfolio">{store.additionalInfo.portfolioBtn}</Link>
         );
      }
   }

   return (
      <section className="section portfolio">
         <div className="wrapper">
            <h2>Portfolio</h2>
            <div className="portfolio__container">
               {
                  store.portfolio.map((item) => {
                     return(
                        <Link className="portfolio__item"  to={"/portfolio/" + item.title} key={item.id}>
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
