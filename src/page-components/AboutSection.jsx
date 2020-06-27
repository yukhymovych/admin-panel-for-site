import React from 'react';
import { useSelector } from 'react-redux';

const AboutSection = () => {
   const store = useSelector(store => store);

   return (
      <section className="section about section--darker">
         <div className="wrapper about__container">
            <div className="about__item">
               <img src="img/1.jpg" alt=""/>
            </div>
            <div className="about__item">
               <h2>{store.about.aboutHeader}</h2>
               <p>{store.about.aboutText}</p>
            </div>
         </div>
      </section>
   );
}

export default AboutSection;
