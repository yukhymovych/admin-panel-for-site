import React from 'react';

const PostPage = (props) => {
   return (
      <section className="section post">
         <div className="wrapper">
            {
               props.articles.map((item) => {
                  if (item.header === props.general.match.params.name){
                     return(
                        <>
                           <h1>{item.header}</h1>
                           <span className="post__date">{item.date}</span>
                           <p>{item.text}</p>
                        </>
                     )
                  }
               })
            }
         </div>
      </section>
   );
}

export default PostPage;
