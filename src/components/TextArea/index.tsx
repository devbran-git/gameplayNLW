import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { styles } from './styles'

type Props = TextInputProps

export const TextArea = ({ ...rest }: Props) => {
  return (
    <TextInput
      style={styles.container}
      {...rest}
    />
  )
}