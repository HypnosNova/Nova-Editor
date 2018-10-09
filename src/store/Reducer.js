import { combineReducers } from 'redux';
import EditorReducer from './../components/Editor/Reducer';
import SideToolbarReducer from './../components/SideToolbar/Reducer';

const reducer = combineReducers({
    sideToolbar: SideToolbarReducer,
    editor: EditorReducer

});

export default reducer;