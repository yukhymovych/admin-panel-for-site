import React, { useState, useRef } from 'react';
import APPortfolio from './admin-panel/APPortfolio';
import APBlog from './admin-panel/APBlog';
import {
   Switch,
   Route,
   Link
} from "react-router-dom";

import {
   Button, 
   TextField,
   Switch as Switcher
} from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { setAbout } from '../store/about/actions';
import { setAdditionalInfo } from '../store/additionalInfo/actions';
import { setHero } from '../store/hero/actions';


const AdminPanel = (props) => {
   const store = useSelector(store => store);
   const dispatch = useDispatch();

   const homeHeroHeader = useRef();
   const homeHeroSubheader = useRef();
   const aboutHeader = useRef();
   const aboutText = useRef();
   const headerLogoText = useRef();
   const footerText = useRef();
   const portfolioBtn = useRef();
   const blogBtn = useRef();

   const [darkMode, setMode] = useState({
      state: props.darkThemeSwitcher
   });

   const handleChange = (event) => {
      setMode({ state: event.target.checked });
      props.changeTheme(event.target.checked);
   };

   const saveHero = () => {
      let newHero = {
         homeHeader: homeHeroHeader.current.childNodes[1].childNodes[0].value,
         homeSubheader: homeHeroSubheader.current.childNodes[1].childNodes[0].value,
      };

      dispatch(setHero(newHero));
   }

   const saveAbout = () => {
      let newAbout = {
         aboutHeader: aboutHeader.current.childNodes[1].childNodes[0].value,
         aboutText: aboutText.current.childNodes[1].childNodes[0].value
      };

      dispatch(setAbout(newAbout));
   }

   const saveAdditionalInfo = () => {
      let newAdditionalInfo = {
         headerLogoText: headerLogoText.current.childNodes[1].childNodes[0].value,
         footerText: footerText.current.childNodes[1].childNodes[0].value,
         portfolioBtn: portfolioBtn.current.childNodes[1].childNodes[0].value,
         blogBtn: blogBtn.current.childNodes[1].childNodes[0].value
      };

      dispatch(setAdditionalInfo(newAdditionalInfo));
   }

   return (
      <div className="wrapper admin__wrapper">
         <div className="admin__sidebar">
            <p className="admin__naming">Admin Panel</p>
            <Switcher
               checked={darkMode.state}
               onChange={handleChange}
               color="primary"
               name="darkModeSwitcher"
               inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span className="admin__dark-mode">Dark mode</span>
            <Link className="link admin__link" to="/admin/hero">Hero</Link>
            <Link className="link admin__link" to="/admin/about">About</Link>
            <Link className="link admin__link" to="/admin/portfolio">Portfolio</Link>
            <Link className="link admin__link" to="/admin/blog">Blog</Link>
            <Link className="link admin__link" to="/admin/additional">Additional</Link>
         </div>
         <div className="admin__main">
            <Switch>
               <Route exact path="/admin">
                  <div className="admin__item">
                     <h2 className="h2">Welcome to demo admin panel</h2>
                     <p className="p">Click on tabs at left sidebar to move to needed website section for content editing.</p>
                  </div>
               </Route>
               
               <Route path="/admin/hero">
                  <div className="admin__item">
                     <div className="admin__item-inner">
                        <h3 className="admin__header">Hero</h3>
                        <TextField
                           ref={homeHeroHeader}
                           label="Header"
                           defaultValue={store.hero.homeHeader}
                           key={1}
                           fullWidth="true"
                           variant="outlined"
                        />
                        <br/><br/>
                        <TextField
                           ref={homeHeroSubheader}
                           label="Subheader"
                           multiline
                           rows={10}
                           defaultValue={store.hero.homeSubheader}
                           key={2}
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
                           ref={aboutHeader}
                           label="Header"
                           defaultValue={store.about.aboutHeader}
                           key={3}
                           fullWidth="true"
                           variant="outlined"
                        />
                        <br/><br/>
                        <TextField
                           ref={aboutText}
                           label="Subheader"
                           multiline
                           rows={10}
                           defaultValue={store.about.aboutText}
                           key={4}
                           fullWidth="true"
                           variant="outlined"
                        />
                        <br/><br/>
                        <Button variant="contained" color="primary" onClick={saveAbout}>Save changes</Button>
                     </div>
                  </div>
               </Route>

               <Route path="/admin/portfolio" 
                  render={() => 
                     <APPortfolio />
                  }
               />

               <Route path="/admin/blog" 
                  render={() => 
                     <APBlog />
                  }
               />

               <Route path="/admin/additional">
                  <div className="admin__item">
                     <div className="admin__item-inner">
                        <h3 className="admin__header">Additional</h3>
                        <TextField
                           ref={headerLogoText}
                           label="Website logo text"
                           defaultValue={store.additionalInfo.headerLogoText}
                           key={5}
                           fullWidth="true"
                           variant="outlined"
                        />
                        <br/><br/>
                        <TextField
                           ref={footerText}
                           label="Footer text"
                           defaultValue={store.additionalInfo.footerText}
                           key={6}
                           fullWidth="true"
                           variant="outlined"
                        />
                        <br/><br/>
                        <TextField
                           ref={portfolioBtn}
                           label="Portfolio button text"
                           defaultValue={store.additionalInfo.portfolioBtn}
                           key={7}
                           variant="outlined"
                        />
                        <br/><br/>
                        <TextField
                           ref={blogBtn}
                           label="Blog button text"
                           defaultValue={store.additionalInfo.blogBtn}
                           key={8}
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
   );
}

export default AdminPanel;
