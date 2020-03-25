import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  getSize,
} from '../../../common/ResponsiveUI';

class Categories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.container}>Categories Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: getSize(24),
  },
});
export default Categories;
