import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  getSize,
} from '../../common/ResponsiveUI';

class Welcome extends Component {
  state = {
    selected: 1,
  };
  _setSelected = id => {
    this.setState({selected: id});
  };
  _onSliderItemChange = e => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;
    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    this._setSelected(pageNum + 1);
  };
  renderItem = item => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.img} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text
          style={[
            styles.itemDescription,
            item.title === '' ? styles.itemDescLarge : styles.itemDescRegular,
          ]}>
          {item.description}
        </Text>
      </View>
    );
  };
  render() {
    const {selected} = this.state;
    const BtnPrimary = props => {
      return (
        <TouchableOpacity style={[styles.btn, styles.primary]}>
          <Text style={[styles.btnText, styles.textPrimary]}>{props.text}</Text>
        </TouchableOpacity>
      );
    };
    const BtnSecondary = props => {
      return (
        <TouchableOpacity style={[styles.btn, styles.secondary]}>
          <Text style={styles.btnText}>{props.text}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.container}>
        {/**Slider Section */}
        <View style={styles.sliderWrapper}>
          <SafeAreaView style={styles.sliderContainer}>
            <FlatList
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              data={Slider}
              extraData={selected}
              renderItem={({item}) => this.renderItem(item)}
              keyExtractor={item => item.id}
              onMomentumScrollEnd={this._onSliderItemChange}
            />
            {/**Slider Nav Section */}
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              data={Slider}
              renderItem={({item}) => (
                <View
                  style={[
                    styles.navItem,
                    item.id == selected
                      ? styles.navItemActive
                      : styles.navItemInactive,
                  ]}
                />
              )}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </View>
        {/**Tooltip*/}
        <View style={styles.tooltipContainer}>
          <View style={styles.tooltipRect}>
            <Text style={styles.tooltipText}>
              Inscrivez-vous maintenant et obtenez une prime de $10*.
            </Text>
          </View>
          <View style={styles.tooltipTriangle} />
        </View>

        {/**Buttons Section */}
        <View style={styles.btnContainer}>
          <BtnSecondary text="Se connecter" />
          <BtnPrimary text="Joindre maintenant" />
        </View>

        {/**Link Section */}
        <TouchableOpacity>
          <Text style={styles.link}>Pas pour l'instant</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const Slider = [
  {
    id: '1',
    img: require('../../common/assets/imgs/filledlogo.png'),
    title: 'Bienvenue sur Rakuten!',
    description:
      "Vous êtes payé lorsque vous achetez!Obtenez jusqu'à 40% de remise $ dans 2500 magasins.",
  },
  {
    id: '2',
    img: require('../../common/assets/imgs/Slider2.png'),
    title: '',
    description:
      'Boutique à vos magasins préférés,tout comme vous le faites toujours.',
  },
  {
    id: '3',
    img: require('../../common/assets/imgs/Slider3.png'),
    title: '',
    description: 'Acheter à vos boutiques préférées pour obtenir une remise',
  },
  {
    id: '4',
    img: require('../../common/assets/imgs/moneyBag.png'),
    title: '',
    description:
      'Nous allons vous envoyer un chèque  chaque trimestre avec votre Cash Back!',
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  sliderWrapper: {
    height: hp('70%'),
  },
  sliderContainer: {
    flex: 1,
    alignItems: 'center',
  },
  itemContainer: {
    width: wp('100%'),
    height: hp('70%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: '90%',
    height: getSize(120),
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: getSize(25),
    color: 'rgba(0,0,0,0.8)',
  },
  itemDescription: {
    fontFamily: 'quicksandItalic',
    textAlign: 'center',
    margin: getSize(10),
  },
  itemDescRegular: {
    fontSize: getSize(17),
    color: 'rgba(0,0,0,0.9)',
  },
  itemDescLarge: {
    fontSize: getSize(22),
    color: 'rgba(0,0,0,1)',
  },
  navItem: {
    alignSelf: 'flex-end',
    height: getSize(8),
    width: getSize(8),
    margin: getSize(2),
    borderRadius: getSize(5),
  },
  navItemActive: {
    backgroundColor: '#252525',
  },
  navItemInactive: {
    backgroundColor: '#B8B8B8',
  },
  tooltipContainer: {
    marginTop: getSize(30),
    alignItems: 'flex-end',
  },
  tooltipRect: {
    backgroundColor: '#1791D4',
    borderRadius: getSize(2),
  },
  tooltipText: {
    fontSize: getSize(10),
    color: '#ffffff',
    padding: getSize(5),
  },
  tooltipTriangle: {
    marginTop: getSize(-0.5),
    marginRight: getSize(20),
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: getSize(4),
    borderRightWidth: getSize(4),
    borderBottomWidth: getSize(4),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#1791D4',
    transform: [{rotate: '180deg'}],
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getSize(50),
    height: getSize(50),
    width: wp('47%'),
    padding: getSize(10),
    margin: getSize(2),
  },
  primary: {
    backgroundColor: '#EC5051',
  },
  secondary: {
    borderWidth: getSize(1),
  },
  btnText: {
    textAlign: 'center',
    fontSize: getSize(14),
  },
  textPrimary: {
    color: '#ffffff',
  },
  link: {
    color: '#1791D4',
    marginTop: getSize(10),
  },
});
export default Welcome;
