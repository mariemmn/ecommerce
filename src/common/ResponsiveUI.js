import {Platform, Dimensions, PixelRatio} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

/**generate device fit dimension_Width using percentage*/
export const widthPercentageToDP = widthPercent => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

/**generate device fit dimension_height using percentage*/
export const heightPercentageToDP = heightPercent => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

/**generate device fit dimension_height&width using "SAMSUNG J6+|developper device"*/
export const getSize = size => {
  const result = (size * width) / 411;
  return Platform.isPad ? 0.6 * result : result;
};
