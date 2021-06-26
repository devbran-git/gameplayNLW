import React from 'react'
import { Text, Animated, Dimensions } from 'react-native'

import { styles } from './styles'

const { width } = Dimensions.get('screen')

export const AnimatedContent = () => {
  const slideText = new Animated.Value(width)

  Animated.timing(
    slideText,
    {
      toValue: 0,
      duration: 600,
      useNativeDriver: false
    }
  ).start()

  return (
    <Animated.View style={[{ left: slideText }]}>
      <Text style={styles.title}>
        Conecte-se {'\n'}
        e organize suas {'\n'}
        jogatinas
      </Text>
      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos
      </Text>
    </Animated.View>
  )
}