import React from 'react'
import { View, Image, ImageStyle } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { StyleProp } from 'react-native'

type Props = {
  urlImage: string
  customStyle: StyleProp<ImageStyle>
}

export const Avatar = ({ urlImage, customStyle }: Props) => {

  const { secondary50, secondary70 } = theme.colors

  return (
    <View style={styles.container}>
      <LinearGradient
        style={[styles.container, customStyle]}
        colors={[secondary50, secondary70]}
      >
        <Image
          style={styles.avatar}
          source={{ uri: urlImage }}
          resizeMode='cover'
        />
      </LinearGradient>
    </View>
  )
}
