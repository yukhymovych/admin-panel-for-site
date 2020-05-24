import React, { useState } from 'react';
import {
   Button, 
   TextField
} from '@material-ui/core';

const APPortfolioItemEdit = (props) => {
   const [editedPortfolioItem, setEditedPortfolioItem] = useState({
      id: props.portfolioItem.id,
      imgSrc: props.portfolioItem.imgSrc,
      title: props.portfolioItem.title,
      description: props.portfolioItem.description
   });

   const handleImg = (src) => {
      setEditedPortfolioItem({
         id: editedPortfolioItem.id,
         imgSrc: src,
         title: editedPortfolioItem.title,
         description: editedPortfolioItem.description
      });
   }

   const handleTitleInput = (e) => {
      setEditedPortfolioItem({
         id: editedPortfolioItem.id,
         imgSrc: editedPortfolioItem.imgSrc,
         title: e.target.value,
         description: editedPortfolioItem.description
      });
   }

   const handleDescriptionInput = (e) => {
      setEditedPortfolioItem({
         id: editedPortfolioItem.id,
         imgSrc: editedPortfolioItem.imgSrc,
         title: editedPortfolioItem.title,
         description: e.target.value
      });
   }

   const saveChanges = (initialPortfolioItem) => {
      let newArray = [...props.portfolio];

      for (let i = 0; i < newArray.length; i++) {
         if (newArray[i].id === initialPortfolioItem.id) {
            newArray.splice(i, 1, editedPortfolioItem);

            props.changePortfolio(newArray);
         }
      }
   }

   return (
      <div className="admin__item">
         <div className="portfolio__imgs">
            <img src="/img/1.jpg" alt="" onClick={ (e) => {handleImg(e.target.getAttribute("src"))} }/>
            <img src="/img/2.jpg" alt="" onClick={ (e) => {handleImg(e.target.getAttribute("src"))} }/>
            <img src="/img/3.jpg" alt="" onClick={ (e) => {handleImg(e.target.getAttribute("src"))} }/>
            <img src="/img/4.jpg" alt="" onClick={ (e) => {handleImg(e.target.getAttribute("src"))} }/>
            <img src="/img/5.jpg" alt="" onClick={ (e) => {handleImg(e.target.getAttribute("src"))} }/>
         </div>
         <TextField
            className="admin__textfield--spacing"
            label="Title"
            rows={2}
            defaultValue={props.portfolioItem.title}
            fullWidth="true"
            variant="outlined"
            onChange={handleTitleInput}
         />
         <TextField
            className="admin__textfield--spacing"
            label="Description"
            rows={4}
            defaultValue={props.portfolioItem.description}
            fullWidth="true"
            variant="outlined"
            onChange={handleDescriptionInput}
         />
         <Button variant="contained" color="primary" onClick={() => saveChanges(props.portfolioItem)}>Save changes</Button>   
      </div>
   );
}

export default APPortfolioItemEdit;
