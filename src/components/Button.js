import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // using Provider
  // Bellow we are adding contextType property to Button class
  // static contextType = LanguageContext; // 👈 this is equal to: Button.contextType = LanguageContext (but, Button.property should be called outside the Button class brackets)

  // Using Consumer
  renderSubmit(language) {
    return language === 'english'? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
        {({ language }) => this.renderSubmit(language) }
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    // Using Provider
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    // return <button className="ui button primary">{text}</button>

    // Using Consumer
    return (
      <ColorContext.Consumer>
      { (color) => this.renderButton(color) }
      </ColorContext.Consumer>
    );
  }
}

export default Button;
