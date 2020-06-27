export const ADDITIONAL_INFO_CHANGE_CONTENT = "ADDITIONAL_INFO_CHANGE_CONTENT";

export const setAdditionalInfo = additionalInfo => ({
   type: ADDITIONAL_INFO_CHANGE_CONTENT,
   payload: additionalInfo
});