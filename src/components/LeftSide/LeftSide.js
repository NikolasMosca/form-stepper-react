import React, { Component } from 'react';
import './LeftSide.scss';
import Logo from '../../assets/images/logo_icon.svg';
import QuestionMark from '../../assets/images/question_mark.png';

class LeftSide extends Component {
    render() {
        const { help } = this.props;
        const title = "WeStudents";

        return (
            <div className="LeftSideContainer">
                <img className="Logo" src={ Logo } alt={title} title={title}/>
                {(help) ? (
                    <div className="HelpContainer">
                        <div className="Dialog">
                            { help }
                        </div>
                        <div className="Title">
                            <div>
                                <img src={QuestionMark} alt="Help" title="Help"/>
                            </div>
                            <div>
                                HELP
                            </div>
                        </div>
                    </div>
                ):(
                    <div></div>
                )}
            </div>
        );
    }
}
LeftSide.defaultProps = {
    help: false
 }

export default LeftSide;