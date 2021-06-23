import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { View } from 'react-native'

import { styles } from './styles'

type Props = {
  customStyle?: StyleProp<ViewStyle>
}

export const ListDivider = ({ customStyle }: Props) => {
  return (
    <View style={[styles.container, customStyle]} />
  )
}
