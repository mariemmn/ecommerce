import React, {Component} from 'react';
import {StyleSheet, Image, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  getSize,
} from './ResponsiveUI';
import GradientContainer from './GradientContainer';

class LaunchScreen extends Component {
  render() {
    const {loading} = this.props;
    return (
      <GradientContainer
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colorStart="#98109F"
        colorMiddle="#3E0E88"
        colorEnd="#3E0E88"
        style={styles.container}>
        <Image style={styles.logo} source={require('./assets/imgs/logo.png')} />
        {loading && <ActivityIndicator size="large" color="#ffffff" />}
      </GradientContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'yellow',
  },
  text: {
    fontSize: 20,
    color: 'orange',
  },
  logo: {
    width: '90%',
    height: getSize(80),
    resizeMode: 'contain',
    marginBottom: getSize(15),
  },
});
export default LaunchScreen;
