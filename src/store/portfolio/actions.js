export const PORTFOLIO_CHANGE_CONTENT = "PORTFOLIO_CHANGE_CONTENT";

export const setPortfolio = portfolio => ({
   type: PORTFOLIO_CHANGE_CONTENT,
   payload: portfolio
});