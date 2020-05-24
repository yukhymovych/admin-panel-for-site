import React, { useState } from 'react';
import './App.css';

import Header from './page-components/Header';
import Footer from './page-components/Footer';

import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import AdminPanel from './pages/AdminPanel';

import { createId } from './logic/func.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   body {
      background: ${props => props.theme.mode === 'dark' ? '#17171A' : 'white'};
      color: ${props => props.theme.mode === 'dark' ? '#d7d7d7' : '#17171A'};
   }
   .section--darker{
      background-color: ${props => props.theme.mode === 'dark' ? '#1f1f22' : 'rgb(245, 245, 245)'};
   }
   .section__btn{
      border: 3px solid ${props => props.theme.mode === 'dark' ? 'white' : '#17171A'};
      color: ${props => props.theme.mode === 'dark' ? 'white' : '#17171A'};
   }
   .section__btn:hover{
      background-color: ${props => props.theme.mode === 'dark' ? 'white' : '#17171A'};
      color: ${props => props.theme.mode === 'dark' ? '#17171A' : 'white'};
   }
   h1, h2, h3, p, 
   .header__logo, 
   header nav ul li a,
   .blog__item-link,
   .admin__link,
   .post__date{
      color: ${props => props.theme.mode === 'dark' ? '#d7d7d7' : '#17171A'};
   }
   .admin__wrapper{
      background: ${props => props.theme.mode === 'dark' ? '#17171A' : 'white'};
   }
   .admin__sidebar{
      border: 1px solid ${props => props.theme.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'};
   }
   .admin__link:hover{
      background-color: rgba(0,0,0,0.05);
   }
   .blog__item{
      background-color: ${props => props.theme.mode === 'dark' ? '#17171A' : 'white'};
   }
   header{
      background: ${props => props.theme.mode === 'dark' ? '#17171A' : 'white'};
   }
   .MuiInputBase-input, .MuiFormLabel-root{
      color: ${props => props.theme.mode === 'dark' ? '#d7d7d7' : 'initial'} !important;
   }
   .MuiOutlinedInput-notchedOutline{
      border-color: ${props => props.theme.mode === 'dark' ? '#d7d7d7' : 'silver'} !important;
   }
   .admin__portfolio-item,
   .admin__blog-item{
      border-bottom: 1px solid ${props => props.theme.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'} ;
   }
`;


function App() {
   const [hero, setHero] = useState({
      homeHeader: "Some Big Header For Hero Section",
      homeSubheader: "Here should be text that describe some features and other stuff about this beautiful website.",
   });
   const changeHero = (newHero) => {
      setHero(newHero);
   }

   const [about, setAbout] = useState({
      aboutHeader: "Another text for 'About'",
      aboutText: "Here should be text that describe some features and other stuff about this beautiful website. Here should be text that describe some features and other stuff about this beautiful website. Here should be text that describe some features and other stuff about this beautiful website."
   });
   const changeAbout = (newAbout) => {
      setAbout(newAbout);
   }

   const [portfolio, setPortfolio] = useState([
      {
         id: createId(),
         imgSrc: "/img/2.jpg",
         title: "Project 1",
         description: "Short description for this project. Just everal sentences"
      },
      {
         id: createId(),
         imgSrc: "/img/3.jpg",
         title: "Project 2",
         description: "Short description for this project. Just everal sentences"
      },
      {
         id: createId(),
         imgSrc: "/img/4.jpg",
         title: "Project 3",
         description: "Short description for this project. Just everal sentences"
      },
      {
         id: createId(),
         imgSrc: "/img/5.jpg",
         title: "Project 4",
         description: "Short description for this project. Just everal sentences"
      },
   ]);
   const changePortfolio = (newPortfolio) => {
      setPortfolio(newPortfolio);
   }

   const [articles, setArticles] = useState([
      {
         id: createId(),
         header: "Name of an article 1",
         summary: "1 Main part of an article in this place for description.",
         date: "24.03.2020",
         text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante diam, porttitor at magna eu, commodo eleifend augue. Phasellus feugiat magna magna, non suscipit libero suscipit et. Nulla luctus lacus sed orci interdum, nec volutpat turpis dignissim. Vivamus id erat venenatis, congue lorem id, mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tempus pretium cursus. Maecenas ullamcorper vestibulum dignissim. Suspendisse a velit id diam tristique maximus eu quis lacus. Donec consectetur id nibh ut sagittis. Ut at orci ut tortor congue tempus. Aliquam placerat quam dolor, non tincidunt justo ultrices ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse facilisis aliquet dui, vel hendrerit felis porttitor quis. Duis aliquet laoreet urna, at scelerisque massa pharetra vitae. Cras scelerisque orci sit amet ligula mattis, eget malesuada est iaculis. Pellentesque tincidunt lobortis ornare. Quisque euismod suscipit metus quis bibendum. Ut nec eros in eros ultrices convallis. Cras at venenatis libero, id vestibulum erat. Aenean augue ex, pretium eget ullamcorper eget, efficitur id eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pulvinar bibendum lectus.",
      },
      {
         id: createId(),
         header: "Name of an article 2",
         summary: "2 Main part of an article in this place for description.",
         date: "10.04.2020",
         text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante diam, porttitor at magna eu, commodo eleifend augue. Phasellus feugiat magna magna, non suscipit libero suscipit et. Nulla luctus lacus sed orci interdum, nec volutpat turpis dignissim. Vivamus id erat venenatis, congue lorem id, mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tempus pretium cursus. Maecenas ullamcorper vestibulum dignissim. Suspendisse a velit id diam tristique maximus eu quis lacus. Donec consectetur id nibh ut sagittis. Ut at orci ut tortor congue tempus. Aliquam placerat quam dolor, non tincidunt justo ultrices ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse facilisis aliquet dui, vel hendrerit felis porttitor quis. Duis aliquet laoreet urna, at scelerisque massa pharetra vitae. Cras scelerisque orci sit amet ligula mattis, eget malesuada est iaculis. Pellentesque tincidunt lobortis ornare. Quisque euismod suscipit metus quis bibendum. Ut nec eros in eros ultrices convallis. Cras at venenatis libero, id vestibulum erat. Aenean augue ex, pretium eget ullamcorper eget, efficitur id eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pulvinar bibendum lectus.",
      },
      {
         id: createId(),
         header: "Name of an article 3",
         summary: "3 Main part of an article in this place for description.",
         date: "17.04.2020",
         text: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante diam, porttitor at magna eu, commodo eleifend augue. Phasellus feugiat magna magna, non suscipit libero suscipit et. Nulla luctus lacus sed orci interdum, nec volutpat turpis dignissim. Vivamus id erat venenatis, congue lorem id, mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tempus pretium cursus. Maecenas ullamcorper vestibulum dignissim. Suspendisse a velit id diam tristique maximus eu quis lacus. Donec consectetur id nibh ut sagittis. Ut at orci ut tortor congue tempus. Aliquam placerat quam dolor, non tincidunt justo ultrices ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse facilisis aliquet dui, vel hendrerit felis porttitor quis. Duis aliquet laoreet urna, at scelerisque massa pharetra vitae. Cras scelerisque orci sit amet ligula mattis, eget malesuada est iaculis. Pellentesque tincidunt lobortis ornare. Quisque euismod suscipit metus quis bibendum. Ut nec eros in eros ultrices convallis. Cras at venenatis libero, id vestibulum erat. Aenean augue ex, pretium eget ullamcorper eget, efficitur id eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pulvinar bibendum lectus.",
      },
      {
         id: createId(),
         header: "Name of an article 4",
         summary: "4 Main part of an article in this place for description.",
         date: "21.04.2020",
         text: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante diam, porttitor at magna eu, commodo eleifend augue. Phasellus feugiat magna magna, non suscipit libero suscipit et. Nulla luctus lacus sed orci interdum, nec volutpat turpis dignissim. Vivamus id erat venenatis, congue lorem id, mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tempus pretium cursus. Maecenas ullamcorper vestibulum dignissim. Suspendisse a velit id diam tristique maximus eu quis lacus. Donec consectetur id nibh ut sagittis. Ut at orci ut tortor congue tempus. Aliquam placerat quam dolor, non tincidunt justo ultrices ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse facilisis aliquet dui, vel hendrerit felis porttitor quis. Duis aliquet laoreet urna, at scelerisque massa pharetra vitae. Cras scelerisque orci sit amet ligula mattis, eget malesuada est iaculis. Pellentesque tincidunt lobortis ornare. Quisque euismod suscipit metus quis bibendum. Ut nec eros in eros ultrices convallis. Cras at venenatis libero, id vestibulum erat. Aenean augue ex, pretium eget ullamcorper eget, efficitur id eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pulvinar bibendum lectus.",
      },
      {
         id: createId(),
         header: "Name of an article 5",
         summary: "5 Main part of an article in this place for description.",
         date: "28.04.2020",
         text: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante diam, porttitor at magna eu, commodo eleifend augue. Phasellus feugiat magna magna, non suscipit libero suscipit et. Nulla luctus lacus sed orci interdum, nec volutpat turpis dignissim. Vivamus id erat venenatis, congue lorem id, mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tempus pretium cursus. Maecenas ullamcorper vestibulum dignissim. Suspendisse a velit id diam tristique maximus eu quis lacus. Donec consectetur id nibh ut sagittis. Ut at orci ut tortor congue tempus. Aliquam placerat quam dolor, non tincidunt justo ultrices ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse facilisis aliquet dui, vel hendrerit felis porttitor quis. Duis aliquet laoreet urna, at scelerisque massa pharetra vitae. Cras scelerisque orci sit amet ligula mattis, eget malesuada est iaculis. Pellentesque tincidunt lobortis ornare. Quisque euismod suscipit metus quis bibendum. Ut nec eros in eros ultrices convallis. Cras at venenatis libero, id vestibulum erat. Aenean augue ex, pretium eget ullamcorper eget, efficitur id eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pulvinar bibendum lectus.",
      }
   ]);
   const changeArticles = (newArticles) => {
      setArticles(newArticles);
   }
   const articlesForHome = () => {
      return articles.slice(0, 3);
   }

   const [additionalInfo, setAdditionalInfo] = useState({
      headerLogoText: "DemoSite & Admin",
      footerText: "© 2020 DemoSite & Admin. All Rights Reserved",
      portfolioBtn: "See all projects",
      blogBtn: "Another articles"
   });
   const changeAdditionalInfo = (newAdditionalInfo) => {
      setAdditionalInfo(newAdditionalInfo);
   }
   
   const [theme, setTheme] = useState({ 
      mode: 'light',
      switcher: false
    });
   const changeTheme = (checker) => {
      if (checker === true) {
         setTheme({ 
            mode: 'dark',
            switcher: true
         });
      }
      else {
         setTheme({ 
            mode: 'light',
            switcher: false
         });
      }
   }

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <div className="App">
            <Router>
               <Header 
                  headerLogoText={additionalInfo.headerLogoText}
               />

               <Switch>
                  <Route exact path="/" 
                     render={() => 
                        <HomePage 
                           header={hero.homeHeader}
                           subheader={hero.homeSubheader}

                           about={about}

                           portfolio={portfolio}
                           portfolioBtn={additionalInfo.portfolioBtn}

                           articles={articlesForHome()}
                           blogBtn={additionalInfo.blogBtn}
                           showBtn={true}
                        />
                     }
                  />

                  <Route path="/portfolio"
                     render={() =>
                        <PortfolioPage
                           portfolio={portfolio}
                           portfolioBtn={additionalInfo.portfolioBtn}
                        />
                     }
                  />

                  <Route path="/blog" 
                     render={() =>
                        <BlogPage 
                           articles={articles}
                           blogBtn={additionalInfo.blogBtn}
                        />
                     }
                  />

                  <Route path="/admin" 
                     render={() => 
                        <AdminPanel 
                           hero={hero}
                           changeHero={changeHero}
                           
                           about={about}
                           changeAbout={changeAbout}

                           portfolio={portfolio}
                           changePortfolio={changePortfolio}

                           articles={articles}
                           changeArticles={changeArticles}

                           additionalInfo={additionalInfo}
                           changeAdditionalInfo={changeAdditionalInfo}

                           changeTheme={changeTheme}
                           darkThemeSwitcher={theme.switcher}
                        />
                     }
                  />
               </Switch>

               <Footer 
                  footerText={additionalInfo.footerText}
               />
            </Router>
         </div>
      </ThemeProvider>
   );
}
 
export default App;