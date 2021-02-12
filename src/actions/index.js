export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS'
};

/**
 * @function correctGuess 
 * @returns {object} - Action with type `CORRECT_GUESS`
 */

 export function correctGuess(){
     return {type: actionTypes.CORRECT_GUESS}
 }