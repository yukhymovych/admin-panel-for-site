import { PORTFOLIO_CHANGE_CONTENT } from './actions';
import { createId } from '../../logic/func.js';

const defaultState = [
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
];

export const portfolioReducer = (state = defaultState, action) => {
   if (action.type === PORTFOLIO_CHANGE_CONTENT) {
      return action.payload;
   }
   
   return state;
};