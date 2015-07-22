/**
 * Created by Administrator on 2015/7/17.
 */
import React, {PropTypes} from 'react';
import styles from './Password.less';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class Password{

  static propTypes = {
    path: PropTypes.string.isRequired
  };
  componentDidMount(){
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps){
    console.log("shouldComponentUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  render(){
    return <div><label>username</label><input type="password" /></div>;
  }
}

export default MyInput;
