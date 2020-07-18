import React, { useState } from 'react';
import APBlogItemEdit from './APBlogItemEdit';
import APBlogItem from './APBlogItem';
import {
   Switch,
   Route,
   Link
} from "react-router-dom";

import { createId } from '../../logic/func.js';

import { 
   Button,
   TextField
} from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { setArticles} from '../../store/articles/actions';


const APBlog = () => {
   const store = useSelector(store => store);
   const dispatch = useDispatch();

   const [articles, setTempArticles] = useState(store.articles);
   const [article, setTempArticle] = useState(0);
   const [newArticle, setNewArticle] = useState({
      id: createId(),
      header: "",
      summary: "",
      date: "",
      text: ""
   });

   const handleTitleInput = (e) => {
      setNewArticle({
         id: newArticle.id,
         header: e.target.value,
         summary: newArticle.summary,
         date: newArticle.date,
         text: newArticle.text
      });
   }

   const handleSummaryInput = (e) => {
      setNewArticle({
         id: newArticle.id,
         header: newArticle.header,
         summary: e.target.value,
         date: newArticle.date,
         text: newArticle.text
      });
   }

   const handleDateInput = (e) => {
      setNewArticle({
         id: newArticle.id,
         header: newArticle.header,
         summary: newArticle.summary,
         date: e.target.value,
         text: newArticle.text
      });
   }

   const handleTextInput = (e) => {
      setNewArticle({
         id: newArticle.id,
         header: newArticle.header,
         summary: newArticle.summary,
         date: newArticle.date,
         text: e.target.value
      });
   }

   const deleteArticle = (article) => {
      let newArray = [...store.articles];

      for (let i = 0; i < newArray.length; i++) {
         if (newArray[i].id === article.id) {
            newArray.splice(i, 1);

            setTempArticles(newArray);
            dispatch(setArticles(newArray));
         }
      }
      
   }

   const addNewArticle = () => {
      let newArray = [...store.articles];

      newArray.push(newArticle);
      
      setTempArticles(newArray);
      dispatch(setArticles(newArray));
   }

   const callEditingArticle = (articleId) => {
      articles.map((item) => {
         if(item.id === articleId) {
            setTempArticle(item);
            return 0;
         }
         else{
            return 0;
         }
      });
   }

   const changeArticles = (updatedArticles) => {
      setTempArticles(updatedArticles);
      dispatch(setArticles(updatedArticles));
   }

   return (
      <Switch>
         <Route exact path="/admin/blog">
            <div className="admin__item">
               <div className="admin__item-inner">
                  <h3 className="admin__header">Blog</h3>
                  {
                     articles.map((item) => {
                        return (
                           <APBlogItem
                              key={item.id}
                              item={item}
                              deleteArticle={deleteArticle}
                              callEditingArticle={callEditingArticle}
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
               label="Title"
               fullWidth={true}
               variant="outlined"
               onChange={handleTitleInput}
            />
            <br/><br/>
            <TextField
               label="Summary"
               fullWidth={true}
               variant="outlined"
               onChange={handleSummaryInput}
            />
               <br/><br/>
            <TextField
               type="date"
               fullWidth={true}
               variant="outlined"
               onChange={handleDateInput}
            />
            <br/><br/>
            <TextField
               label="Text"
               fullWidth={true}
               multiline
               rows={10}
               variant="outlined"
               onChange={handleTextInput}
            />
            <br/><br/>
            <Button variant="contained" color="primary" onClick={() => addNewArticle()}>Publish post</Button>
         </Route>

         <Route path="/admin/blog/:id"
            render={() =>
               <APBlogItemEdit 
                  articles={store.articles}
                  article={article}
                  changeArticles={changeArticles}
               />
            }
         />
      </Switch>
   );
}

export default APBlog;
