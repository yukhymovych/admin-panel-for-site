import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const BlogSection = (props) => {
   const store = useSelector(store => store);

   const showBtn = () => {
      if (props.showBtn) {
         return (
            <Link className="link section__btn" to="/blog">{store.additionalInfo.blogBtn}</Link>
         );
      }
   }

   return (
      <section className="section blog section--darker">
         <div className="wrapper">
            <h2>Blog</h2>
            <div className="blog__container">
               {
                  store.articles.map((item) => {
                     return(
                        <div className="blog__item" key={item.id}>
                           <h3>{item.header}</h3>
                           <p className="blog__item-date">{item.date}</p>
                           <p className="blog__item-description">{item.summary}</p>
                           <Link className="link blog__item-link" to={"/blog/" + item.header}>Read More</Link>
                        </div>
                     )
                  })
               }
            </div>
            {showBtn()}
         </div>
      </section>
   );
}

export default BlogSection;
