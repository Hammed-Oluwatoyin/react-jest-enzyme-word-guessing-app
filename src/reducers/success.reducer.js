import { actionTypes} from '../actions';

/**
 * @function successReducer
 * @param {array} -Array of guessed words.
 * @params {object} action to be reduced.
 * @returns {boolean} - new success state.
 *  */

 export default (state=false, action ) => {
    switch(action.type) {
        case(actionTypes.CORRECT_GUESS):
        {return true}
    default:
       { return state}
    }
 }