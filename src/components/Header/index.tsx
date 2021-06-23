import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'

import { LinearGradient } from 'expo-linear-gradient'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

type Props = {
  title: string
  action?: ReactNode
}

export const Header = ({
  title,
  action
}: Props) => {

  const { goBack } = useNavigation()

  const { secondary40, secondary100, heading } = theme.colors

  const handleBack = () => goBack()

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleBack} >
        <Feather
          name='arrow-left'
          size={24}
          color={heading}
        />
      </BorderlessButton>

      <Text style={styles.title} >
        {title}
      </Text>

      {action &&
        <View>
          {action}
        </View>
      }

    </LinearGradient>
  )
}