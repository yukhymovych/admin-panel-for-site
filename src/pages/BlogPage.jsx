import BlogSection from '../page-components/BlogSection';
import BlogOpenedItem from '../page-components/BlogOpenedItem.jsx';

import React from 'react';

import {
   Switch,
   Route
} from "react-router-dom";

const BlogPage = (props) => {
   return (
      <Switch>
         <Route exact path="/blog/"
            render={() =>
               <BlogSection 
                  articles={props.articles}
                  blogBtn={props.blogBtn}
               />
            }
         />

         <Route path="/blog/:name"
            render={(props2) =>
               <BlogOpenedItem 
                  articles={props.articles}
                  general={props2}
               />
            }
         />
      </Switch>
   );
}

export default BlogPage;
