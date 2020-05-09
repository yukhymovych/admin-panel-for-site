import React from 'react';

import {
   Button, 
   TextField
} from '@material-ui/core';

const AdminPanelPostEditPage = (props) => {

   const saveChanges = (article) => {
      let newArray = props.articles;
      let newArticle = {
         id: article.id,
         header: document.getElementById("articleTitle").value,
         summary: document.getElementById("articleSummary").value,
         date: document.getElementById("articleDate").value,
         text: document.getElementById("articleText").value,
      };

      for (let i = 0; i < newArray.length; i++) {
         if (newArray[i].id === article.id) {
            newArray.splice(i, 1, newArticle);

            props.changeArticles(newArray);
         }
      }
   }

   return (
      <div className="admin__item">
         {
            props.articles.map((item) => {
               if (item.header === props.general.match.params.name){
                  return(
                     <>
                        <TextField
                           id="articleTitle"
                           label="Title"
                           rows={2}
                           defaultValue={item.header}
                           fullWidth="true"
                           variant="outlined"
                        />
                        <TextField
                           id="articleSummary"
                           label="Summary"
                           rows={4}
                           defaultValue={item.summary}
                           fullWidth="true"
                           variant="outlined"
                        />
                        <TextField
                           id="articleDate"
                           label="Date"
                           rows={2}
                           defaultValue={item.date}
                           fullWidth="true"
                           variant="outlined"
                        />
                        <TextField
                           id="articleText"
                           label="Text"
                           multiline
                           rows={15}
                           defaultValue={item.text}
                           fullWidth="true"
                           variant="outlined"
                        />
                        <Button variant="contained" color="primary" onClick={() => saveChanges(item)}>Save changes</Button>
                     </>
                  )
               }
            })
         }
      </div>
   );
}

export default AdminPanelPostEditPage;
