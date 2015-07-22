/**
 * Created by Administrator on 2015/7/17.
 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import withStyles from '../../../decorators/withStyles';
import styles from './Navigation.less';

@withStyles(styles)
class Navigation {

    static propTypes = {
        className: PropTypes.string
    };

    render(){
        return (
            <div className={classNames(this.props.className, 'Navigation')}>
                <span>
                    <img src={require('./icon_user.png')} />
                    <label>admin</label>
                    <img src={require('./arrow.gif')} />
                </span>
                <span>
                    <img src={require('./icon_help.png')} />
                    <label>help</label>
                    <img src={require('./arrow.gif')} />
                </span>
            </div>
        );
    }
}

export default Navigation;

