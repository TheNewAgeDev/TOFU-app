import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import expoConstants from 'expo-constants'

export const wp = widthPercentageToDP
export const hp = heightPercentageToDP
export const Constants = expoConstants

export const setOpacity = (color, opacity) => {
  const intValue = Math.round(opacity / 100 * 255)
  const hexValue = intValue.toString(16)

  const opacityRes = hexValue.padStart(2, '0').toUpperCase()
  return `${color}${opacityRes}`
}
