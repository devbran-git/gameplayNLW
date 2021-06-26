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

import TurnOffImg from '../../assets/turn-off.svg'

import { styles } from './styles'
import { useAuth } from '../../hooks/auth'

import { COLLECTION_APPOINTMENTS } from '../../configs/database'

export const ProfileScreen = () => {
  const { user } = useAuth()

  const [appointment, setAppointment] = useState([])
  const [gamerBio, setGamerBio] = useState('')

  const loadAppointments = async () => {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const storage = response ? JSON.parse(response) : []

    setAppointment(storage)
  }

  const handleBio = async (bio: string) => {
    setGamerBio(bio)

    await AsyncStorage.setItem('@gameplay:gamerbio', gamerBio)
  }

  const loadGamerBio = async () => {
    const storageBio = await AsyncStorage.getItem('@gameplay:gamerbio')
    setGamerBio(String(storageBio))
  }

  useEffect(() => {
    loadGamerBio()
  }, [])

  useEffect(() => {
    loadAppointments()
  }, [])

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>

        <Background>

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
              multiline
              style={styles.textArea}
              value={gamerBio}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={(t) => handleBio(t)}
              maxLength={100}
            />

            <RectButton style={styles.containerButton}>
              <View style={styles.iconWrapper}>
                <TurnOffImg />
              </View>
              <Text style={styles.titleButton}>Sair</Text>
            </RectButton>

          </View>
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}