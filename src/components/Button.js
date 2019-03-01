import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // Bellow we are adding contextType property to Button class
  static contextType = LanguageContext; // 👈 this is equal to: Button.contextType = LanguageContext (but, Button.property should be called outside the Button class brackets)
  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className="ui button primary">{text}</button>
  }
}

export default Button;
