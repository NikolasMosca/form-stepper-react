import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render() {
        const { text, type, onClick } = this.props;

        return (
            <button key={text} className={ "ButtonContainer " + type } onClick={ onClick }>
                { text }
            </button>
        );
    }
}
Button.defaultProps = {
    text: false,
    type: 'default',
    onClick: () => console.log('default click')
 }

export default Button;