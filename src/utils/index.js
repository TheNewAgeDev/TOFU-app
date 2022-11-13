import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import expoConstants from 'expo-constants'

export const wp = widthPercentageToDP
export const hp = heightPercentageToDP
export const Constants = expoConstants

export const VALID_EMAIL = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

export const setOpacity = (color, opacity) => {
  const intValue = Math.round(opacity / 100 * 255)
  const hexValue = intValue.toString(16)

  const opacityRes = hexValue.padStart(2, '0').toUpperCase()
  return `${color}${opacityRes}`
}
