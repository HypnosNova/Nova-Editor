import * as ActionTypes from './ActionTypes.js';
export default (state = { language: "en" }, action) => {
	const {
		language
	} = action;
	console.log(language, action)
	switch (action.type) {
		case ActionTypes.CHANGE_LANGUAGE:
			return {
				...state,
				language,
			};
		default:
			return state;
	}
}