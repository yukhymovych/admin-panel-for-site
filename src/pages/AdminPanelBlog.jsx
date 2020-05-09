import React, { useState } from 'react';
import AdminPanelPostEditPage from './AdminPanelPostEditPage';
import AdminPanelBlogPost from './AdminPanelBlogPost';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";

import { 
   Button,
   TextField
} from '@material-ui/core';


const AdminPanelBlog = (props) => {
   const [articles, setArticles] = useState(props.articles);

   const deleteArticle = (article) => {
      let newArray = [...props.articles];

      for (let i = 0; i < newArray.length; i++) {
         if (newArray[i].id === article.id) {
            newArray.splice(i, 1);

            setArticles(newArray);
            props.changeArticles(newArray);
         }
      }
   }

   const addNewArticle = () => {
      let newArray = [...props.articles];
      let newPost = {
         id: props.articles.length + 1,
         header: document.getElementById("newPostTitle").value,
         summary: document.getElementById("newPostSummary").value,
         date: document.getElementById("newPostDate").value,
         text: document.getElementById("newPostText").value,
      };

      newArray.push(newPost);
      
      setArticles(newArray);
      props.changeArticles(newArray);
   }

   return (
      <Router>
         <Switch>
            <Route exact path="/admin/blog">
               <div className="admin__item">
                  <div className="admin__item-inner">
                     <h3 className="admin__header">Blog</h3>
                     {
                        articles.map((item) => {
                           return (
                              <AdminPanelBlogPost
                                 key={item.id}
                                 item={item}
                                 deleteArticle={deleteArticle}
                              />
                           )
                        })
                     }
                  </div>  
               </div>
               <Link className="link" to="/admin/blog/add-new-post/">
                  <Button variant="contained" color="primary">Add new post</Button>
               </Link>
            </Route>

            <Route path="/admin/blog/add-new-post/">
               <TextField
                  id="newPostTitle"
                  label="Title"
                  fullWidth="true"
                  variant="outlined"
               />
               <br/><br/>
               <TextField
                  id="newPostSummary"
                  label="Summary"
                  fullWidth="true"
                  variant="outlined"
               />
                <br/><br/>
               <TextField
                  id="newPostDate"
                  type="date"
                  fullWidth="true"
                  variant="outlined"
               />
               <br/><br/>
               <TextField
                  id="newPostText"
                  label="Text"
                  fullWidth="true"
                  multiline
                  rows={10}
                  variant="outlined"
               />
               <br/><br/>
               <Button variant="contained" color="primary" onClick={() => addNewArticle()}>Publish post</Button>
            </Route>

            <Route path="/admin/blog/:name"
               render={(props2) =>
                  <AdminPanelPostEditPage 
                     articles={props.articles}
                     changeArticles={props.changeArticles}
                     general={props2}
                  />
               }
            />
         </Switch>
      </Router>
   );
}

export default AdminPanelBlog;
