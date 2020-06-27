import { ABOUT_CHANGE_CONTENT } from './actions';

const defaultState = {
   aboutHeader: "About our agency",
   aboutText: "We are a full-service digital marketing and web design and development agency that was founded in 2007. Our team members are devoted to delivering remarkable ROI to every client, and our dedication to results is evident in everything we do, including how we speak. Internally, we refer to our clients as “investors” since they invest their resources into us the same way they would a financial investment. We hold ourselves accountable for ensuring their investment brings a positive return."
};

export const aboutReducer = (state = defaultState, action) => {
   if (action.type === ABOUT_CHANGE_CONTENT) {
      return action.payload;
   } 
   
   return state;
};