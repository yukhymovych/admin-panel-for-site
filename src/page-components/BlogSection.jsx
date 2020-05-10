import React from 'react';
import { Link } from "react-router-dom";

const Blog = (props) => {
   return (
      <section className="section blog section--darker">
         <div className="wrapper">
            <h2>Blog</h2>
            <div className="blog__container">
               {
                  props.articles.map((item) => {
                     return(
                        <div className="blog__item">
                           <h3>{item.header}</h3>
                           <p className="blog__item-date">{item.date}</p>
                           <p className="blog__item-description">{item.summary}</p>
                           <Link className="link blog__item-link" to={"/blog/" + item.header}>Read More</Link>
                        </div>
                     )
                  })
               }
            </div>
            <a className="link section__btn" href="/blog">{props.blogBtn}</a>
         </div>
      </section>
   );
}

export default Blog;
