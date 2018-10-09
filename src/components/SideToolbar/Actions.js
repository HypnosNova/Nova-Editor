import * as ActionTypes from './ActionTypes.js';

export const showEditor = (str) => {
	return {
		type: ActionTypes.SHOW_EDITOR,
		editorType: str
	};
};