import React, { useState } from 'react';

import {
   Button, 
   TextField
} from '@material-ui/core';

const APBlogItemEdit = (props) => {
   const [editedArticle, setEditedArticle] = useState({
      id: props.article.id,
      header: props.article.header,
      summary: props.article.summary,
      date: props.article.date,
      text: props.article.text
   });

   const handleTitleInput = (e) => {
      setEditedArticle({
         id: editedArticle.id,
         header: e.target.value,
         summary: editedArticle.summary,
         date: editedArticle.date,
         text: editedArticle.text
      });
   }

   const handleSummaryInput = (e) => {
      setEditedArticle({
         id: editedArticle.id,
         header: editedArticle.header,
         summary: e.target.value,
         date: editedArticle.date,
         text: editedArticle.text
      });
   }

   const handleDateInput = (e) => {
      setEditedArticle({
         id: editedArticle.id,
         header: editedArticle.header,
         summary: editedArticle.summary,
         date: e.target.value,
         text: editedArticle.text
      });
   }

   const handleTextInput = (e) => {
      setEditedArticle({
         id: editedArticle.id,
         header: editedArticle.header,
         summary: editedArticle.summary,
         date: editedArticle.date,
         text: e.target.value
      });
   }

   const saveChanges = (initialArticle) => {
      let newArray = [...props.articles];

      for (let i = 0; i < newArray.length; i++) {
         if (newArray[i].id === initialArticle.id) {
            newArray.splice(i, 1, editedArticle);

            props.changeArticles(newArray);
         }
      }
   }

   return (
      <div className="admin__item">
         <>
            <TextField
               label="Title"
               rows={2}
               defaultValue={props.article.header}
               fullWidth="true"
               variant="outlined"
               onChange={handleTitleInput}
            />
            <TextField
               label="Summary"
               rows={4}
               defaultValue={props.article.summary}
               fullWidth="true"
               variant="outlined"
               onChange={handleSummaryInput}
            />
            <TextField
               label="Date"
               rows={2}
               defaultValue={props.article.date}
               fullWidth="true"
               variant="outlined"
               onChange={handleDateInput}
            />
            <TextField
               label="Text"
               multiline
               rows={15}
               defaultValue={props.article.text}
               fullWidth="true"
               variant="outlined"
               onChange={handleTextInput}
            />
            <Button variant="contained" color="primary" onClick={() => saveChanges(props.article)}>Save changes</Button>
         </>
      </div>
   );
}

export default APBlogItemEdit;
