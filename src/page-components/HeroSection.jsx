import React from 'react';
import { useSelector } from 'react-redux';

const HeroSection = () => {
   const store = useSelector(store => store);
   
   return (
      <section className="section hero">
         <div className="wrapper">
            <h1>{store.hero.homeHeader}</h1>
            <p>{store.hero.homeSubheader}</p>
         </div>
      </section>
   );
}

export default HeroSection;
