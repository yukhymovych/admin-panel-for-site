import BlogSection from '../page-components/BlogSection';
import BlogOpenedItem from '../page-components/BlogOpenedItem.jsx';

import React from 'react';
import { useSelector } from 'react-redux';

import {
   Switch,
   Route
} from "react-router-dom";

const BlogPage = () => {
   const store = useSelector(store => store);

   return (
      <Switch>
         <Route exact path="/blog/"
            render={() =>
               <BlogSection 
                  blogBtn={store.additionalInfo.blogBtn}
               />
            }
         />

         <Route path="/blog/:name"
            render={(props2) =>
               <BlogOpenedItem 
                  general={props2}
               />
            }
         />
      </Switch>
   );
}

export default BlogPage;
