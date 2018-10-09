import { createStore } from 'redux';
import reducer from './Reducer.js';

const initValues = {
	sideToolbar: {
		"editorType": "none"
	},
	editor: {
		"language": "zh"
	}
};

const store = createStore(reducer, initValues);

export default store;
