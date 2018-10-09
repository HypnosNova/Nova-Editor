import * as ActionTypes from './ActionTypes.js';
import EDITOR_TYPES from "./editorTypes";
export default (state = EDITOR_TYPES.IDEEDITOR, action) => {
	const {
		editorType
	} = action;
	switch (action.type) {
		case ActionTypes.SHOW_EDITOR:
			return {
				...state,
				editorType,
			};
		default:
			return state;
	}
}