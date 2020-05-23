import React from 'react';

const AboutSection = (props) => {
   return (
      <section className="section about section--darker">
         <div className="wrapper about__container">
            <div className="about__item">
               <img src="img/1.jpg" alt=""/>
            </div>
            <div className="about__item">
               <h2>{props.about.aboutHeader}</h2>
               <p>{props.about.aboutText}</p>
            </div>
         </div>
      </section>
   );
}

export default AboutSection;
