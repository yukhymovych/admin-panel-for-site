import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './page-components/Header';
import Footer from './page-components/Footer';

import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import AdminPanel from './pages/AdminPanel';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
 


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
         id: 1,
         imgSrc: "img/2.jpg",
         title: "Project 1",
         description: "Short description for this project. Just everal sentences"
      },
      {
         id: 2,
         imgSrc: "img/3.jpg",
         title: "Project 2",
         description: "Short description for this project. Just everal sentences"
      },
      {
         id: 3,
         imgSrc: "img/4.jpg",
         title: "Project 3",
         description: "Short description for this project. Just everal sentences"
      },
      {
         id: 4,
         imgSrc: "img/5.jpg",
         title: "Project 4",
         description: "Short description for this project. Just everal sentences"
      },
   ]);
   const changePortfolio = (newPortfolio) => {
      setPortfolio(newPortfolio);
   }

   const [articles, setArticles] = useState([
      {
         id: 1,
         header: "Name of an article 1",
         summary: "1 Main part of an article in this place for description.",
         date: "24.03.2020",
         text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante diam, porttitor at magna eu, commodo eleifend augue. Phasellus feugiat magna magna, non suscipit libero suscipit et. Nulla luctus lacus sed orci interdum, nec volutpat turpis dignissim. Vivamus id erat venenatis, congue lorem id, mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tempus pretium cursus. Maecenas ullamcorper vestibulum dignissim. Suspendisse a velit id diam tristique maximus eu quis lacus. Donec consectetur id nibh ut sagittis. Ut at orci ut tortor congue tempus. Aliquam placerat quam dolor, non tincidunt justo ultrices ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse facilisis aliquet dui, vel hendrerit felis porttitor quis. Duis aliquet laoreet urna, at scelerisque massa pharetra vitae. Cras scelerisque orci sit amet ligula mattis, eget malesuada est iaculis. Pellentesque tincidunt lobortis ornare. Quisque euismod suscipit metus quis bibendum. Ut nec eros in eros ultrices convallis. Cras at venenatis libero, id vestibulum erat. Aenean augue ex, pretium eget ullamcorper eget, efficitur id eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pulvinar bibendum lectus.",
      },
      {
         id: 2,
         header: "Name of an article 2",
         summary: "2 Main part of an article in this place for description.",
         date: "10.04.2020",
         text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante diam, porttitor at magna eu, commodo eleifend augue. Phasellus feugiat magna magna, non suscipit libero suscipit et. Nulla luctus lacus sed orci interdum, nec volutpat turpis dignissim. Vivamus id erat venenatis, congue lorem id, mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tempus pretium cursus. Maecenas ullamcorper vestibulum dignissim. Suspendisse a velit id diam tristique maximus eu quis lacus. Donec consectetur id nibh ut sagittis. Ut at orci ut tortor congue tempus. Aliquam placerat quam dolor, non tincidunt justo ultrices ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse facilisis aliquet dui, vel hendrerit felis porttitor quis. Duis aliquet laoreet urna, at scelerisque massa pharetra vitae. Cras scelerisque orci sit amet ligula mattis, eget malesuada est iaculis. Pellentesque tincidunt lobortis ornare. Quisque euismod suscipit metus quis bibendum. Ut nec eros in eros ultrices convallis. Cras at venenatis libero, id vestibulum erat. Aenean augue ex, pretium eget ullamcorper eget, efficitur id eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pulvinar bibendum lectus.",
      },
      {
         id: 3,
         header: "Name of an article 3",
         summary: "3 Main part of an article in this place for description.",
         date: "17.04.2020",
         text: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante diam, porttitor at magna eu, commodo eleifend augue. Phasellus feugiat magna magna, non suscipit libero suscipit et. Nulla luctus lacus sed orci interdum, nec volutpat turpis dignissim. Vivamus id erat venenatis, congue lorem id, mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tempus pretium cursus. Maecenas ullamcorper vestibulum dignissim. Suspendisse a velit id diam tristique maximus eu quis lacus. Donec consectetur id nibh ut sagittis. Ut at orci ut tortor congue tempus. Aliquam placerat quam dolor, non tincidunt justo ultrices ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse facilisis aliquet dui, vel hendrerit felis porttitor quis. Duis aliquet laoreet urna, at scelerisque massa pharetra vitae. Cras scelerisque orci sit amet ligula mattis, eget malesuada est iaculis. Pellentesque tincidunt lobortis ornare. Quisque euismod suscipit metus quis bibendum. Ut nec eros in eros ultrices convallis. Cras at venenatis libero, id vestibulum erat. Aenean augue ex, pretium eget ullamcorper eget, efficitur id eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pulvinar bibendum lectus.",
      },
      {
         id: 4,
         header: "Name of an article 4",
         summary: "4 Main part of an article in this place for description.",
         date: "21.04.2020",
         text: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante diam, porttitor at magna eu, commodo eleifend augue. Phasellus feugiat magna magna, non suscipit libero suscipit et. Nulla luctus lacus sed orci interdum, nec volutpat turpis dignissim. Vivamus id erat venenatis, congue lorem id, mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tempus pretium cursus. Maecenas ullamcorper vestibulum dignissim. Suspendisse a velit id diam tristique maximus eu quis lacus. Donec consectetur id nibh ut sagittis. Ut at orci ut tortor congue tempus. Aliquam placerat quam dolor, non tincidunt justo ultrices ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse facilisis aliquet dui, vel hendrerit felis porttitor quis. Duis aliquet laoreet urna, at scelerisque massa pharetra vitae. Cras scelerisque orci sit amet ligula mattis, eget malesuada est iaculis. Pellentesque tincidunt lobortis ornare. Quisque euismod suscipit metus quis bibendum. Ut nec eros in eros ultrices convallis. Cras at venenatis libero, id vestibulum erat. Aenean augue ex, pretium eget ullamcorper eget, efficitur id eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pulvinar bibendum lectus.",
      },
      {
         id: 5,
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

   return (
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

                        articles={articles}
                        changeArticles={changeArticles}

                        additionalInfo={additionalInfo}
                        changeAdditionalInfo={changeAdditionalInfo}
                     />
                  }
               />
            </Switch>

            <Footer 
               footerText={additionalInfo.footerText}
            />
         </Router>
      </div>
   );
}
 
export default App;