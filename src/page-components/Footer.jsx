import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
   const store = useSelector(store => store);

   return (
      <footer>
         <div className="wrapper">
            <p>{store.additionalInfo.footerText}</p>
         </div>
      </footer>
   );
}

export default Footer;
