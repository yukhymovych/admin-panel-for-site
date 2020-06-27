import React, { useState } from 'react';
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


const App = () => {
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
               
               <Header />

               <Switch>
                  <Route exact path="/" 
                     render={() => 
                        <HomePage 
                           showBtn={true}
                        />
                     }
                  />

                  <Route path="/portfolio"
                     render={() =>
                        <PortfolioPage />
                     }
                  />

                  <Route path="/blog" 
                     render={() =>
                        <BlogPage />
                     }
                  />

                  <Route path="/admin" 
                     render={() => 
                        <AdminPanel 
                           changeTheme={changeTheme}
                           darkThemeSwitcher={theme.switcher}
                        />
                     }
                  />
               </Switch>

               <Footer />

            </Router>
         </div>
      </ThemeProvider>
   );
}

export default App;