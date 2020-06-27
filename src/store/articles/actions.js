export const ARTICLES_CHANGE_CONTENT = "ARTICLES_CHANGE_CONTENT";

export const setArticles = articles => ({
   type: ARTICLES_CHANGE_CONTENT,
   payload: articles
});