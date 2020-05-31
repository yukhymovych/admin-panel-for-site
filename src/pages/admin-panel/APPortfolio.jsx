import React, { useState } from 'react';
import APPortfolioItemEdit from './APPortfolioItemEdit';
import APPortfolioItem from './APPortfolioItem';
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


const APPortfolio = (props) => {
   const [portfolio, setPortfolio] = useState(props.portfolio);
   const [portfolioItem, setPortfolioItem] = useState(0);
   const [newPortfolio, setNewPortfolio] = useState({
      id: createId(),
      imgSrc: "",
      title: "",
      description: ""
   });

   const handleImgSrcInput = (src) => {
      setNewPortfolio({
         id: newPortfolio.id,
         imgSrc: src,
         title: newPortfolio.title,
         description: newPortfolio.description
      });
   }

   const handleTitleInput = (e) => {
      setNewPortfolio({
         id: newPortfolio.id,
         imgSrc: newPortfolio.imgSrc,
         title: e.target.value,
         description: newPortfolio.description
      });
   }

   const handleDescriptionInput = (e) => {
      setNewPortfolio({
         id: newPortfolio.id,
         imgSrc: newPortfolio.imgSrc,
         title: newPortfolio.title,
         description: e.target.value
      });
   }

   const deletePortfolioItem = (portfolio) => {
      let newArray = [...props.portfolio];

      for (let i = 0; i < newArray.length; i++) {
         if (newArray[i].id === portfolio.id) {
            newArray.splice(i, 1);

            setPortfolio(newArray);
            props.changePortfolio(newArray);
         }
      }
   }

   const addNewPortfolioItem = () => {
      let newArray = [...props.portfolio];

      newArray.push(newPortfolio);
      
      setPortfolio(newArray);
      props.changePortfolio(newArray);
   }

   const callEditingPortfolioItem = (itemId) => {
      portfolio.map((item) => {
         if(item.id === itemId) {
            setPortfolioItem(item);
         }
      });
   }

   return (
      <Switch>
         <Route exact path="/admin/portfolio">
            <div className="admin__item">
               <div className="admin__item-inner">
                  <h3 className="admin__header">Portfolio</h3>
                  {
                     portfolio.map((item) => {
                        return (
                           <APPortfolioItem
                              key={item.id}
                              item={item}
                              deletePortfolioItem={deletePortfolioItem}
                              callEditingPortfolioItem={callEditingPortfolioItem}
                           />
                        )
                     })
                  }
               </div>  
            </div>
            <Link className="link" to="/admin/portfolio/add-new-portfolio/">
               <Button variant="contained" color="primary">Add new portfolio</Button>
            </Link>
         </Route>

         <Route path="/admin/portfolio/add-new-portfolio/">
            <div className="portfolio__imgs">
               <img src="/img/1.jpg" alt="" onClick={ (e) => {handleImgSrcInput(e.target.getAttribute("src"))} }/>
               <img src="/img/2.jpg" alt="" onClick={ (e) => {handleImgSrcInput(e.target.getAttribute("src"))} }/>
               <img src="/img/3.jpg" alt="" onClick={ (e) => {handleImgSrcInput(e.target.getAttribute("src"))} }/>
               <img src="/img/4.jpg" alt="" onClick={ (e) => {handleImgSrcInput(e.target.getAttribute("src"))} }/>
               <img src="/img/5.jpg" alt="" onClick={ (e) => {handleImgSrcInput(e.target.getAttribute("src"))} }/>
            </div>
            <br/><br/>
            <TextField
               label="Title"
               fullWidth="true"
               variant="outlined"
               onChange={handleTitleInput}
            />
               <br/><br/>
            <TextField
               label="Description"
               fullWidth="true"
               variant="outlined"
               onChange={handleDescriptionInput}
            />
            <br/><br/>
            <Button variant="contained" color="primary" onClick={() => addNewPortfolioItem()}>Publish portfolio</Button>
         </Route>

         <Route path="/admin/portfolio/:id"
            render={() =>
               <APPortfolioItemEdit 
                  portfolio={props.portfolio}
                  portfolioItem={portfolioItem}
                  changePortfolio={props.changePortfolio}
               />
            }
         />
      </Switch>
   );
}

export default APPortfolio;
