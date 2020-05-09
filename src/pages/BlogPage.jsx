import Blog from '../page-components/Blog';
import PostPage from '../pages/PostPage.jsx';

import React from 'react';

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";

const BlogPage = (props) => {
   return (
     <Router>
         <Switch>
            <Route exact path="/blog/"
               render={() =>
                  <Blog 
                     articles={props.articles}
                     blogBtn={props.blogBtn}
                  />
               }
            />

            <Route path="/blog/:name"
               render={(props2) =>
                  <PostPage 
                     articles={props.articles}
                     general={props2}
                  />
               }
            />
         </Switch>
      </Router>
   );
}

export default BlogPage;
