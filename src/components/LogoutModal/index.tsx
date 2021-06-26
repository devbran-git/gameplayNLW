import React from 'react'
import {
  View,
  Text,
  Modal,
  ModalProps,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { useAuth } from '../../hooks/auth'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

type ComponentProps = ModalProps & TouchableOpacityProps

type Props = ComponentProps & {
  closeGenericAlert?: () => void
  handleLogout?: () => void
  setLogoutModal?: () => void
}

export const LogoutModal = ({ ...rest }: Props) => {
  const { singOut } = useAuth()


  const { secondary85, secondary90 } = theme.colors

  return (
    <Modal
      transparent
      animationType='slide'
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <LinearGradient
            style={styles.content}
            colors={[secondary85, secondary90]}
          >
            <Text style={styles.title}>Deseja sair do Game<Text style={styles.redText}>Play</Text>?</Text>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.buttonNo}
                {...rest}
              >
                <View style={styles.borderButton}>
                  <Text style={styles.buttonType}>Não</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonYes}
                onPress={() => singOut()}
              >
                <Text style={styles.buttonType}>Sim</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>
    </Modal>
  )
}