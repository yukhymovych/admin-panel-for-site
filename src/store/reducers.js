import { combineReducers } from "redux";
import { aboutReducer } from "./about/reducers";
import { additionalInfoReducer } from "./additionalInfo/reducers";
import { articlesReducer } from "./articles/reducers";
import { heroReducer } from "./hero/reducers";
import { portfolioReducer } from "./portfolio/reducers";

export default combineReducers({
   about: aboutReducer,
   additionalInfo: additionalInfoReducer,
   articles: articlesReducer,
   hero: heroReducer,
   portfolio: portfolioReducer
});