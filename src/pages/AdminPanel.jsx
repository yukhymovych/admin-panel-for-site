import React from 'react';
import AdminPanelBlog from './AdminPanelBlog';
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


const AdminPanel = (props) => {
   const saveHero = () => {
      let newHero = {
         homeHeader: document.getElementById("homeHeroHeader").value,
         homeSubheader: document.getElementById("homeHeroSubheader").value,
      };

      props.changeHero(newHero);
   }

   const saveAbout = () => {
      let newAbout = {
         aboutHeader: document.getElementById("aboutHeader").value,
         aboutText: document.getElementById("aboutText").value
      };

      props.changeAbout(newAbout);
   }

   const saveAdditionalInfo = () => {
      let newAdditionalInfo = {
         headerLogoText: document.getElementById("headerLogoText").value,
         footerText: document.getElementById("footerText").value,
         portfolioBtn: document.getElementById("portfolioBtn").value,
         blogBtn: document.getElementById("blogBtn").value
      };

      props.changeAdditionalInfo(newAdditionalInfo);
   }

   return (
      <Router>
         <div className="wrapper admin__wrapper">
            <div className="admin__sidebar">
               <p className="admin__naming">Admin Panel</p>
               <Link className="link admin__link" to="/admin/hero">Hero</Link>
               <Link className="link admin__link" to="/admin/about">About</Link>
               <Link className="link admin__link" to="/admin/portfolio">Portfolio</Link>
               <Link className="link admin__link" to="/admin/blog">Blog</Link>
               <Link className="link admin__link" to="/admin/additional">Additional</Link>
            </div>
            <div className="admin__main">
               <Switch>
                  <Route exact path="/admin/hero">
                     <div className="admin__item">
                        <div className="admin__item-inner">
                           <h3 className="admin__header">Hero</h3>
                           <TextField
                              id="homeHeroHeader"
                              label="Header"
                              multiline
                              rows={2}
                              defaultValue={props.hero.homeHeader}
                              fullWidth="true"
                              variant="outlined"
                           />
                           <br/><br/>
                           <TextField
                              id="homeHeroSubheader"
                              label="Subheader"
                              multiline
                              rows={4}
                              defaultValue={props.hero.homeSubheader}
                              fullWidth="true"
                              variant="outlined"
                           />
                           <br/><br/>
                           <Button variant="contained" color="primary" onClick={saveHero}>Save changes</Button>
                        </div>
                     </div>
                  </Route>

                  <Route path="/admin/about">
                     <div className="admin__item">
                        <div className="admin__item-inner">
                           <h3 className="admin__header">About</h3>
                           <TextField
                              id="aboutHeader"
                              label="Header"
                              multiline
                              rows={2}
                              defaultValue={props.about.aboutHeader}
                              fullWidth="true"
                              variant="outlined"
                           />
                           <br/><br/>
                           <TextField
                              id="aboutText"
                              label="Subheader"
                              multiline
                              rows={10}
                              defaultValue={props.about.aboutText}
                              fullWidth="true"
                              variant="outlined"
                           />
                           <br/><br/>
                           <Button variant="contained" color="primary" onClick={saveAbout}>Save changes</Button>
                        </div>
                     </div>
                  </Route>

                  <Route path="/admin/portfolio">
                     <div className="admin__item">
                        <div className="admin__item-inner">
                           <h3 className="admin__header">Portfolio</h3>
                           <TextField
                              label="Name"
                              fullWidth="true"
                              variant="outlined"
                           />
                           <br/><br/>
                           <TextField
                              label="Description"
                              fullWidth="true"
                              multiline
                              rows={3}
                              variant="outlined"
                           />
                           <br/><br/>
                           <Button variant="contained" color="primary">Save changes</Button>
                        </div>
                     </div>
                  </Route>

                  <Route path="/admin/blog" 
                     render={() => 
                        <AdminPanelBlog 
                           articles={props.articles}
                           changeArticles={props.changeArticles}
                        />
                     }
                  />

                  <Route path="/admin/additional">
                     <div className="admin__item">
                        <div className="admin__item-inner">
                           <h3 className="admin__header">Additional</h3>
                           <TextField
                              id="headerLogoText"
                              label="Website logo text"
                              defaultValue={props.additionalInfo.headerLogoText}
                              fullWidth="true"
                              variant="outlined"
                           />
                           <br/><br/>
                           <TextField
                              id="footerText"
                              label="Footer text"
                              defaultValue={props.additionalInfo.footerText}
                              fullWidth="true"
                              variant="outlined"
                           />
                           <br/><br/>
                           <TextField
                              id="portfolioBtn"
                              label="Portfolio button text"
                              defaultValue={props.additionalInfo.portfolioBtn}
                              variant="outlined"
                           />
                           <br/><br/>
                           <TextField
                              id="blogBtn"
                              label="Blog button text"
                              defaultValue={props.additionalInfo.blogBtn}
                              variant="outlined"
                           />
                           <br/><br/>
                           <Button variant="contained" color="primary" onClick={saveAdditionalInfo}>Save changes</Button>
                        </div>
                     </div>
                  </Route>
               </Switch>
            </div>
         </div>
      </Router>
   );
}

export default AdminPanel;
