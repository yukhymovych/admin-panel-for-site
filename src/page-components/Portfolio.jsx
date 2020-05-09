import React from 'react';

const Portfolio = (props) => {
   return (
      <section className="section portfolio">
         <div className="wrapper">
            <h2>Portfolio</h2>
            <div className="portfolio__container">
               <div className="portfolio__item">
                  <img src="img/2.jpg" alt="" />
                  <h3>Project 1</h3>
                  <p>Short description for this project. Just everal sentences.</p>
               </div>
               <div className="portfolio__item">
                  <img src="img/3.jpg" alt="" />
                  <h3>Project 2</h3>
                  <p>Short description for this project. Just everal sentences.</p>
               </div>
               <div className="portfolio__item">
                  <img src="img/4.jpg" alt="" />
                  <h3>Project 3</h3>
                  <p>Short description for this project. Just everal sentences.</p>
               </div>
               <div className="portfolio__item">
                  <img src="img/5.jpg" alt="" />
                  <h3>Project 4</h3>
                  <p>Short description for this project. Just everal sentences.</p>
               </div>
            </div>
            <a className="link section__btn centered-btn" href="/">{props.portfolioBtn}</a>
         </div>
      </section>
   );
}

export default Portfolio;
