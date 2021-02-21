import {combineReducers} from 'redux';
import success from './success.reducer';
import guessedWords from './guessedWords.reducer';
import secretWord from './secretWord.reducer';

export default combineReducers({
    success,
    guessedWords,
    secretWord
})