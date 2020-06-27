export const HERO_CHANGE_CONTENT = "HERO_CHANGE_CONTENT";

export const setHero = hero => ({
   type: HERO_CHANGE_CONTENT,
   payload: hero
});