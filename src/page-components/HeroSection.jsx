import React from 'react';

const HeroSection = (props) => {
   return (
      <section className="section hero">
         <div className="wrapper">
            <h1>{props.header}</h1>
            <p>{props.subheader}</p>
         </div>
      </section>
   );
}

export default HeroSection;
