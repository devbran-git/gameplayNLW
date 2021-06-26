import React from 'react'
import { Text, View, Image, ActivityIndicator } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import DiscordImg from '../../assets/discord.png'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

type Props = RectButtonProps & {
  title: string
  loading?: boolean
}

export const ButtonIcon = ({ title, loading, ...rest }: Props) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {loading ?
          <ActivityIndicator
            size='small'
            color={theme.colors.heading}
          />
          :
          title
        }
      </Text>
    </RectButton>
  )
}
