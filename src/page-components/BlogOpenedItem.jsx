import React from 'react';
import { useSelector } from 'react-redux';

const BlogOpenedItem = (props) => {
   const store = useSelector(store => store);

   return (
      <section className="section post">
         <div className="wrapper">
            {
               store.articles.map((item) => {
                  if (item.header === props.general.match.params.name){
                     return(
                        <div key={item.id}>
                           <h1>{item.header}</h1>
                           <span className="post__date">{item.date}</span>
                           <p>{item.text}</p>
                        </div>
                     )
                  }
                  else{ // its needed to avoid some warnings
                     return true;
                  }
               })
            }
         </div>
      </section>
   );
}

export default BlogOpenedItem;
