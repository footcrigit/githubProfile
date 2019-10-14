import {createStore, combineReducers} from 'redux';
import RepoInformation from '../reducer/reporeducer';
import {composeWithDevTools} from 'redux-devtools-extension';
export default () => {
    const store = createStore(combineReducers({RepoAPIResponse:RepoInformation}),composeWithDevTools());
    return store;
};