import React, {Component} from 'react';
import {store} from './store';
import {Provider} from 'react-redux';
import LaunchScreen from './common/LaunchScreen';
import App from './App';
import {YellowBox} from 'react-native';
class Root extends Component {
  state = {
    store: null,
    storeCreated: false,
  };
  componentDidMount() {
    YellowBox.ignoreWarnings([
      'Warning: componentWillReceiveProps',
      'componentWillMount',
      'componentWillReceiveProps has been renamed',
      'Require cycle',
      'DrawerLayoutAndroid drawerPosition',
    ]);
    this.setState({store});
    setTimeout(() => {
      this.setState({storeCreated: true});
    }, 3000);
  }
  render() {
    return this.state.storeCreated === false ? (
      <LaunchScreen loading={true} />
    ) : (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}
export default Root;
