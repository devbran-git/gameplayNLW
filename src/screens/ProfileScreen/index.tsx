import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  Platform,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { RectButton } from 'react-native-gesture-handler'

import { Header } from '../../components/Header/index'
import { Background } from '../../components/Background'
import { GenericAlert } from '../../components/GenericAlert'

import { useRoute } from '@react-navigation/core'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'

import { styles } from './styles'
import { useAuth } from '../../hooks/auth'

import TurnOffImg from '../../assets/turn-off.svg'

export const ProfileScreen = () => {
  const { user } = useAuth()
  const route = useRoute()

  const [appointment, setAppointment] = useState([])
  const gamerBio = 'Lendário por natureza. O céu é o limite!'

  const loadAppointments = async () => {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const storage = response ? JSON.parse(response) : []

    setAppointment(storage)
  }

  useEffect(() => {
    loadAppointments()
  }, [])

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <ScrollView>

          <Header title="Perfil" />

          <View style={styles.content}>
            <Image
              style={styles.avatar}
              source={{ uri: user.avatar }}
              resizeMode='cover'
            />

            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={user.username}
            />

            <View style={styles.horizontalDisplay}>
              <View>
                <Text style={styles.label}>Team</Text>
                <TextInput
                  style={styles.horizontalInput}
                  editable={false}
                  value={'Lendários'}
                />
              </View>

              <View>
                <Text style={styles.label}>Agendamentos</Text>
                <TextInput
                  style={styles.horizontalInput}
                  editable={false}
                  value={String(appointment.length)}
                />
              </View>
            </View>

            <Text style={styles.label}>GamerBio</Text>
            <TextInput
              style={styles.textArea}
              value={gamerBio}
            />


            <RectButton style={styles.containerButton}>
              <View style={styles.iconWrapper}>
                <TurnOffImg />
              </View>

              <Text style={styles.titleButton}>Sair</Text>
            </RectButton>
          </View>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  )
}