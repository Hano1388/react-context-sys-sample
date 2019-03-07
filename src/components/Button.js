import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // using Provider
  // Bellow we are adding contextType property to Button class
  // static contextType = LanguageContext; // 👈 this is equal to: Button.contextType = LanguageContext (but, Button.property should be called outside the Button class brackets)

  // Using Consumer
  renderSubmit(value) {
    return value === 'english'? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
        {(value) => this.renderSubmit(value) }
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
