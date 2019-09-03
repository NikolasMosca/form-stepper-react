import React, { PureComponent } from 'react';
import './RightSide.scss';

class RightSide extends PureComponent {

    //Set status 
    setStatus = (active, page) => {
        if(active === page) return 'active';
        if(active > page) return 'checked';
        return '';
    }

    //Create dot element with class active if the page correspond to the active page
    renderDot = (active, page) => {
        return <div key={page} className={ "PaginationItem " + this.setStatus(active, page) }>
            <div></div>
        </div>;
    }

    //Create dots
    createDots = (active, pages) => {
        let items = [];
        for(let page = 1; page <= pages; page++) {
            items.push(this.renderDot(active, page));
        }
        return items;
    }

    render() {
        const { active, pages } = this.props;

        return (
            <div className="RightSideContainer">
                <div className="PaginationContainer">
                    { this.createDots(active, pages) }
                </div>
            </div>
        );
    }
}
RightSide.defaultProps = {
    active: 1,
    pages: 1
 }

export default RightSide;