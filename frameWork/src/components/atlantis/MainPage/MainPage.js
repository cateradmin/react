/**
 * Created by Administrator on 2015/7/17.
 */
import React, { PropTypes } from 'react';
import styles from './MainPage.less';
import Header from '../Header';
import withStyles from '../../../decorators/withStyles';
import Login from '../Login';
import AppStore from '../../../stores/AppStore';

@withStyles(styles)
class MainPage extends React.Component {
  static propTypes = {
    isLogin: PropTypes.bool.isRequired
  };

    constructor(props){
        super(props);
        this.state = {isLogin: false};
    }
  componentDidMount() {
    AppStore.onChange(this.hasLogin.bind(this));
  }

  componentWillUnmount() {
    AppStore.off(this.hasLogin)
  }

  render (){
      if (!this.state.isLogin){
          return <Login />;
      } else {
          return (
              <div>
                  <Header  />
                  <div>This is middle</div>
                  <div>This is bottom</div>
              </div>);
      }
  }

  hasLogin(event){
      this.setState({isLogin: true});
  }
}

export default MainPage;
