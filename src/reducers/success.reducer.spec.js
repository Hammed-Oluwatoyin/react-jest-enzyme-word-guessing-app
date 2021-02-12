import {actionTypes} from '../actions';
import successReducer from './success.reducer';

test ('returns default initial state of `false` when no action is passed', ()=>{
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});

test('returns state of true upon recieving an action of type `CORRECT_GUESS' ,()=> {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS})


})

