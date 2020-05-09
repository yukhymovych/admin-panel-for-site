import React from 'react';

const Footer = (props) => {
   return (
      <footer>
         <div className="wrapper">
            <p>{props.footerText}</p>
         </div>
      </footer>
   );
}

export default Footer;
