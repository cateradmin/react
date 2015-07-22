/**
 * Created by Administrator on 2015/7/20.
 */
import React from 'react';
import styles from './Login.less';
import withStyles from '../../../decorators/withStyles';
import Dispatcher from '../../../core/Dispatcher';
import AppActions from '../../../actions/AppActions';

@withStyles(styles)
class Login{

  login(){
      var username = React.findDOMNode(this.refs.username);
      var password = React.findDOMNode(this.refs.password);
      var data = {username: username, password: password};
      AppActions.login(data);
      //AppActions.login({ username: 'admin', password: 'password'});
  }
  render(){
      return (<div className="Login">
          <div className="Login-container">
              <label className="Login-label">username</label><input type="text" ref="username" /><br />
              <label className="Login-label">password</label><input type="password" ref="password" /><br/>
              <input type="button"value="login" onClick={this.login}/>
          </div>
      </div>);
  }
}

export default Login;
