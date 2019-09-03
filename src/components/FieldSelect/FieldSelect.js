import React, { PureComponent } from 'react';
import './FieldSelect.scss';

class FieldSelect extends PureComponent {

    createOptions = (options) => {
        const { placeholder } = this.props;
        let items = [];
        items.push(<option key="empty" value="" disabled>{ placeholder }</option>);
        options.map(({label, value}) => 
            items.push(<option key={value} value={value}>{label}</option>)
        );
        return items;
    }

    render() {
        const { name, options } = this.props;

        return (
            <select 
                key={name} 
                {...this.props}
                className="FieldSelectContainer"
            >
            { this.createOptions(options) }
            </select>
        );
    }
}
FieldSelect.defaultProps = {
    name: 'default',
    value: '',
    placeholder: '',
    options: [],
    onChange: (event) => console.log('event onchange', event, event.target.value)
}

export default FieldSelect;