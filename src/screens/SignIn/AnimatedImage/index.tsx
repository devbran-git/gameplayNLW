import React from 'react'
import { Animated, Dimensions } from 'react-native'

import IllustrationImg from '../../../assets/illustration.png'

import { styles } from './styles'

const { width } = Dimensions.get('screen')

export const AnimatedImage = () => {
  const slideImage = new Animated.Value(width)

  Animated.timing(
    slideImage,
    {
      toValue: 0,
      duration: 600,
      useNativeDriver: false
    }
  ).start()

  return (
    <Animated.Image
      source={IllustrationImg}
      style={[styles.image, { right: slideImage }]}
      resizeMode='stretch'
    />
  )
}