import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

class GradientContainer extends Component {
  render() {
    const {colorStart, colorMiddle, colorEnd, style} = this.props;
    return (
      <LinearGradient
        colors={[colorEnd, colorMiddle, colorStart]}
        style={style}>
        {this.props.children}
      </LinearGradient>
    );
  }
}

export default GradientContainer;
