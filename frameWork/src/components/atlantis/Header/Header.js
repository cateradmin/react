/**
 * Created by Administrator on 2015/7/17.
 */
import React from 'react';
import styles from './Header.less';
import withStyles from '../../../decorators/withStyles';
import Navigation from '../Navigation';

@withStyles(styles)
class Header {
    render(){
        return (
            <div className="Header">
                <div className="Header-container">
                    <img className="Header-brand" src={require('./atlantis_logo.png')} />
                    <Navigation className="Header-nav" />
                </div>
            </div>
        );
    }
}

export default Header;
