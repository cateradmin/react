/**
 * Created by Administrator on 2015/7/17.
 */
import React from 'react';
import styles from './MyInput.less';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class MyInput{
  render(){
    return <div><label>username</label><input type="text" /></div>;
  }
}

export default MyInput;
