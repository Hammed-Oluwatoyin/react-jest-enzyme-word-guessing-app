import {actionTypes} from '../actions';
import guessedWordsReducer from './guessedWords.reducer';

let array = [{guessedWord: 'olive', letterMatchCount:'1'},
                {guessedWord: 'trays', letterMatchCount:'3'},
                {guessedWord: 'trade', letterMatchCount:'3'}]

test ('returns default initial state of `empty array` when no action is passed', ()=>{
    const newState = guessedWordsReducer(undefined, []);
    expect(newState).toEqual([]);
});

test('returns state of `array of objects` upon recieving an action of type `SET_SECRET_WORD' ,()=> {
    const newState = guessedWordsReducer([...array] , {type: actionTypes.GUESS_WORD, payload:{guessedWord: 'train', letterMatchCount:'5'}} )
    expect(newState).toEqual([...array, {guessedWord: 'train', letterMatchCount:'5'} ]);
});