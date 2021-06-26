import React from 'react'
import { View, Alert, Animated } from 'react-native'

import { AnimatedImage } from './AnimatedImage'
import { AnimatedContent } from './AnimatedContent'
import { Background } from '../../components/Background'
import { ButtonIcon } from '../../components/ButtonIcon'

import { useAuth } from '../../hooks/auth'

import { styles } from './styles'

export const SignIn = () => {
  const { loading, signIn } = useAuth()

  const fadingButton = new Animated.Value(0)

  const handleSignIn = async () => {
    try {
      await signIn()
    } catch (error) {
      Alert.alert(error)
    }
  }

  setTimeout(() => {
    Animated.timing(
      fadingButton,
      {
        toValue: 1,
        duration: 600,
        useNativeDriver: false
      }
    ).start()
  }, 1200)


  return (
    <Background>
      <View style={styles.container}>

        <AnimatedImage />

        <View style={styles.content}>
          <AnimatedContent />

          <Animated.View style={{ opacity: fadingButton }}>
            <ButtonIcon
              title='Entrar com Discord'
              activeOpacity={0.7}
              onPress={handleSignIn}
              loading={loading}
            />
          </Animated.View>
        </View>
      </View>
    </Background>
  )
}