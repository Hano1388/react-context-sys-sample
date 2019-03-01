import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // Bellow we are adding contextType property to Button class
  static contextType = LanguageContext; // 👈 this is equal to: Button.contextType = LanguageContext (but, Button.property should be called outside the Button class brackets)
  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>
  }
}

export default Button;
