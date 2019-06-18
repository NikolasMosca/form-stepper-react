import React, { Component } from 'react';
import './FieldText.scss';

class FieldText extends Component {
    render() {
        const { name, type } = this.props;

        return (
            <input 
                key={name} 
                {...this.props}
                className="FieldTextContainer"
            />
        );
    }
}
FieldText.defaultProps = {
    name: 'default',
    value: '',
    placeholder: '',
    onChange: (event) => console.log('event onchange', event, event.target.value)
}

export default FieldText;