import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  getSize,
} from '../../common/ResponsiveUI';
import GradientContainer from '../../common/GradientContainer';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
class Subscription extends Component {
  render() {
    const colors = ['#0836C1', '#1D63DC', '#2F7AE5', '#3E88EF', '#439CEF'];
    const BtnPrimary = props => {
      return (
        <TouchableOpacity style={[styles.btnContainer, styles.primary]}>
          <Text style={styles.primaryText}>{props.text}</Text>
        </TouchableOpacity>
      );
    };
    const BtnSecondary = props => {
      return (
        <TouchableOpacity style={[styles.btnContainer, styles.secondary]}>
          {props.type === 'f' ? (
            <Icon
              name="facebook"
              size={20}
              color="#4267b2"
              style={styles.btnIcon}
            />
          ) : (
            <Icon
              name="google"
              size={20}
              color="#FF6666"
              style={styles.btnIcon}
            />
          )}
          <Text style={styles.secondaryText}>{props.text}</Text>
        </TouchableOpacity>
      );
    };
    const Bar = props => {
      return (
        <View
          style={[
            styles.barContainer,
            props.isLarge ? styles.barLarge : styles.barSmall,
          ]}
        />
      );
    };
    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          {/**Gradient Section*/}
          <GradientContainer
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}
            colors={colors}
            style={styles.gradientContainer}>
            <Text style={styles.gradientText}>
              Inscrivez-vous maintenant et obtenez une prime de $10*.
            </Text>
          </GradientContainer>

          {/**Inputs Section*/}
          <View style={styles.inputContainer}>
            <Input placeholder="Courriel" />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Mot de passe(8+ caractères)"
              secureTextEntry={true}
            />
            <View style={styles.notifContainer}>
              <Text style={[styles.notification, styles.standard]}>
                Force du mot de passe:
              </Text>
              {/*<Text
                style={[styles.notification, styles.court]}>
                Trop court
              </Text>
              <Text
                style={[styles.notification, styles.correct]}>
                Correct
              </Text>
              <Text
                style={[styles.notification, styles.faible]}>
                Faible
              </Text>*/}
              <Text style={[styles.notification, styles.fort]}>Fort</Text>
              <IconIon
                name="ios-information-circle-outline"
                size={20}
                color="rgba(0,0,0,0.5)"
                style={styles.notifIcon}
              />
            </View>
          </View>

          {/**Buttons Section*/}
          <BtnPrimary text="Joindre maintenant" />
          <View style={styles.ouContainer}>
            <Bar isLarge={false} />
            <Text style={styles.ouText}>ou</Text>
            <Bar isLarge={false} />
          </View>
          <BtnSecondary text="Continuer avec Google" type="g" />
          <BtnSecondary text="Continuer avec Facebook" type="f" />

          {/**Footer text Section*/}
          <Text style={styles.footerRegion}>Région actuelle:</Text>
          <TouchableOpacity
            style={styles.langContainer}
            onPress={() => console.log('_____Change language USED____')}>
            <Text style={styles.langText}>Rakuten United States</Text>
          </TouchableOpacity>
          <Bar isLarge={true} />

          <Text style={styles.policyText}>
            Pour vous qualifier à un bonus de bienvenue,vous devez être un
            nouveau membre et effectuer un achat éligible totalisant au moins
            vingt-cinq dollars (25$) dans un délai de quatre-vingt-dix (90)
            jours après avoir rejoint Rakuten.
          </Text>
          <Text style={styles.acceptText}>
            En devenant membre,vous acceptez nos
          </Text>
          <TouchableOpacity>
            <Text style={[styles.policyLink, styles.footerMarginTop]}>
              Conditions
            </Text>
            <Text style={[styles.policyLink, styles.footerMarginBottom]}>
              Confidentialité et sécurité
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  gradientContainer: {
    marginBottom: getSize(25),
  },
  gradientText: {
    padding: getSize(20),
    textAlign: 'center',
    fontSize: getSize(18),
    color: '#ffffff',
  },
  inputContainer: {
    width: wp('100%'),
    marginBottom: getSize(35),
  },
  notifContainer: {
    flexDirection: 'row',
  },
  notification: {
    paddingTop: getSize(15),
    paddingLeft: getSize(15),
    paddingRight: getSize(5),
  },
  standard: {
    color: 'rgba(0,0,0,0.7)',
  },
  court: {
    color: 'rgba(0,0,0,0.5)',
  },
  correct: {
    color: '#F48031',
  },
  faible: {
    color: '#d23334',
  },
  fort: {
    color: '#1791D4',
  },
  notifIcon: {
    paddingTop: getSize(15),
    paddingLeft: getSize(5),
    paddingRight: getSize(5),
    fontWeight: 'bold',
  },
  ouContainer: {
    flexDirection: 'row',
    marginTop: getSize(10),
    marginBottom: getSize(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ouText: {
    fontSize: getSize(16),
    paddingBottom: getSize(2),
    color: 'rgba(0,0,0,0.5)',
  },
  footerRegion: {
    marginTop: getSize(10),
    fontSize: getSize(16),
    color: 'rgba(0,0,0,0.7)',
  },
  langContainer: {
    marginTop: getSize(10),
  },
  langText: {
    color: '#1791D4',
    fontWeight: '700',
    marginBottom: getSize(20),
  },
  policyText: {
    fontSize: getSize(17),
    color: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    margin: getSize(20),
    lineHeight: getSize(20),
  },
  acceptText: {
    fontSize: getSize(17),
    color: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
  },
  policyLink: {
    fontSize: getSize(16),
    color: '#1791D4',
    fontWeight: '700',
    textAlign: 'center',
  },
  footerMarginTop: {
    marginTop: getSize(10),
  },
  footerMarginBottom: {
    marginBottom: getSize(20),
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getSize(50),
    height: getSize(50),
    width: wp('90%'),
    padding: getSize(10),
    margin: getSize(5),
  },
  primary: {
    backgroundColor: '#EC5051',
  },
  secondary: {
    borderWidth: getSize(1),
    flexDirection: 'row',
  },
  primaryText: {
    textAlign: 'center',
    fontSize: getSize(17),
    color: '#ffffff',
  },
  secondaryText: {
    textAlign: 'center',
    fontSize: getSize(16),
  },
  btnIcon: {
    marginRight: getSize(20),
  },
  barContainer: {
    height: getSize(1.2),
    borderRadius: getSize(5),
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginLeft: getSize(10),
    marginRight: getSize(10),
  },
  barLarge: {
    width: wp('90%'),
  },
  barSmall: {
    width: getSize(20),
  },
});
export default Subscription;
