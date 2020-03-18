import React, {Component} from 'react';
import LaunchScreen from './common/LaunchScreen';
import Welcome from './screens/welcome';
class Root extends Component {
  render() {
    //return <LaunchScreen loading={false} />;
    return <Welcome />;
  }
}

export default Root;
