import { ADDITIONAL_INFO_CHANGE_CONTENT } from './actions';

const defaultState = {
   headerLogoText: "DemoSite & Admin",
   footerText: "© 2020 DemoSite & Admin. All Rights Reserved",
   portfolioBtn: "See all projects",
   blogBtn: "Another articles"
};

export const additionalInfoReducer = (state = defaultState, action) => {
   if (action.type === ADDITIONAL_INFO_CHANGE_CONTENT) {
      return action.payload;
   } 
   
   return state;
};