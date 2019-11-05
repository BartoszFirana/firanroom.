import React, { Component } from 'react';
import mobileLogo from '../images/mobile_logo_firanroom.svg';
import mobileLogotype from '../images/mobile_logotype_firanroom.svg';

class MobileLogo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className='mobile__logo'>
                    <img className={this.props.toggle ? ('topcontainer__mobile--logo logo__animation--one') : ('topcontainer__mobile--logo back__animation--one')} src={mobileLogo} alt="Logo firanroom" />
                    <img className={this.props.toggle ? ('topcontainer__mobile--logo logo__animation--two') : ('topcontainer__mobile--logo back__animation--two')} src={mobileLogotype} alt="Logo firanroom" />
                </div>
            </>
        );
    }
}

export default MobileLogo;