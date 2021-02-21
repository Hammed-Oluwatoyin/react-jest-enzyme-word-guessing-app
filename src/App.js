import React , {Component } from 'react';

import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats'
import { connect } from 'react-redux';
import Input from './Input';
import { getSecretWord } from './actions';

 export class UnconnectedApp extends Component {

  /**
   * @method componentDidMount
   * @returns {undefined}
   */

  componentDidMount(){
     //get the secret word
     this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container">
     <h1>Jotto</h1>
     <div>The secret word is <b>{this.props.secretWord}</b></div>
        <Congrats success={this.props.success} />
        <Input/>
        <GuessedWords guessedWords = {this.props.guessedWords} />
      </div>
       
      
    );
  }
}

const mapStateToProps = (state) => {
 const {success, guessedWords, secretWord} = state;
 return {success, guessedWords, secretWord};

}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
