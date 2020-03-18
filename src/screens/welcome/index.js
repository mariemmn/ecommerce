import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  getSize,
} from '../../common/ResponsiveUI';

class Welcome extends Component {
  renderItem = item => {
    return (
      <View
        style={{
          width: wp('100%'),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={item.img} style={{width: 50, height: 50}} />
        <Text>{item.description}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {/**Slider Section */}
        <View style={{height: hp('70%'), backgroundColor: 'yellow'}}>
          <SafeAreaView style={styles.container}>
            <FlatList
              horizontal={true}
              data={Slider}
              renderItem={({item}) => this.renderItem(item)}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </View>
        {/**Slider Nav Section */}
        <View>
          <Text style={styles.text}>Slider NAV Section</Text>
        </View>
        {/**Buttons Section */}
        <View>
          <Text style={styles.text}>Buttons Section</Text>
        </View>
        {/**Link Section */}
        <View>
          <Text style={styles.text}>Link Section</Text>
        </View>
      </View>
    );
  }
}
const Slider = [
  {
    id: '1',
    img: {uri: 'https://reactnative.dev/img/tiny_logo.png'},
    title: 'Bienvenue sur Rakuten!',
    description:
      "Vous êtes payé lorsque vous achetez!Obtenez jusqu'à 40% de remise $ dans 2500 magasins.",
  },
  {
    id: '2',
    img: {uri: 'https://reactnative.dev/img/tiny_logo.png'},
    title: '',
    description:
      'Boutique à vos magasins préférés,tout comme vous le faites toujours.',
  },
  {
    id: '3',
    img: {uri: 'https://reactnative.dev/img/tiny_logo.png'},
    title: '',
    description: 'Acheter à vos boutiques préférées pour obtenir une remise',
  },
  {
    id: '4',
    img: {uri: 'https://reactnative.dev/img/tiny_logo.png'},
    title: '',
    description:
      'Nous allons vous envoyer un chèque  chaque trimestre avec votre Cash Back!',
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: getSize(20),
  },
});
export default Welcome;
