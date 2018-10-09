import * as ActionTypes from './ActionTypes.js';

export const changeLanguage = (str) => {
	return {
		type: ActionTypes.CHANGE_LANGUAGE,
		language: str
	};
};