import React, { PureComponent } from 'react';
import './Slide.scss';

class Slide extends PureComponent {

    //Set Status for animation up and down 
    setStatus = (currentIndex, page) => {
        if(currentIndex === page) return 'show'; 
        if(currentIndex > page) return 'hide';
        return ''; 
    }

    render() {
        const {text, size, form, currentIndex, page} = this.props;

        return (
            <div className={ "SlideContainer " + this.setStatus(currentIndex, page) }>
                <div>
                    <h3 className={size}>{ text }</h3>
                    <div>
                        { form }
                    </div>
                </div>
            </div>
        );
    }
}
Slide.defaultProps = {
    text: "Default Text",
    size: "Normal",
    form: <div></div>,
    currentIndex: false,
    page: false
 }

export default Slide;