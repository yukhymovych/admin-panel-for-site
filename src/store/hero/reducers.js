import { HERO_CHANGE_CONTENT } from './actions';

const defaultState = {
   homeHeader: "Digital Marketing & Web Design Agency",
   homeSubheader: "We design attention-grabbing, user-friendly websites and launch innovative, results-driven marketing campaigns that maximize business growth."
};

export const heroReducer = (state = defaultState, action) => {
   if (action.type === HERO_CHANGE_CONTENT) {
      return action.payload;
   } 
   
   return state;
};