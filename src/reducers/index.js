import {combineReducers} from 'redux';
import success from './success.reducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';

export default combineReducers({
    success,
    guessedWords,
    secretWord
})