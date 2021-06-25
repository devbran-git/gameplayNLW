import React from 'react'
import {
  View,
  Text,
  Modal,
  ModalProps,
  TouchableWithoutFeedback
} from 'react-native'

import { RectButtonProps, RectButton } from 'react-native-gesture-handler'

import { LinearGradient } from 'expo-linear-gradient'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

type ComponentProps = ModalProps & RectButtonProps

type Props = ComponentProps & {
  title: string
  message: string
  closeGenericAlert: () => void
}

export const GenericAlert = ({ title, message, closeGenericAlert, ...rest }: Props) => {

  const { secondary85, secondary90 } = theme.colors

  return (
    <Modal
      transparent
      animationType='slide'
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeGenericAlert}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <LinearGradient
              style={styles.content}
              colors={[secondary85, secondary90]}
            >
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.message}>{message}</Text>
              <RectButton
                style={styles.button}
                {...rest}
              >
                <Text style={styles.buttonType}>OK</Text>
              </RectButton>
            </LinearGradient>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}