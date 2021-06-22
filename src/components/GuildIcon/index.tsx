import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'

export const GuildIcon = () => {

  const uri = 'http://pm1.narvii.com/6427/1aa160baa0c1d44c5b3350999ef2b66abba6be41_00.jpg'

  return (
    <Image
      style={styles.image}
      source={{ uri }}
      resizeMode='cover'
    />
  )
}
