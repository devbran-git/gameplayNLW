import React, { useState } from 'react'
import {
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import uuid from 'react-native-uuid'

import { Guilds } from '../Guilds'
import { Button } from '../../components/Button'
import { GuildProps } from '../../components/Guild'
import { TextArea } from '../../components/TextArea'
import { Header } from '../../components/Header/index'
import { GuildIcon } from '../../components/GuildIcon'
import { ModalView } from '../../components/ModalView'
import { SmallInput } from '../../components/SmallInput'
import { Background } from '../../components/Background'
import { GenericAlert } from '../../components/GenericAlert'
import { CategorySelect } from '../../components/CategorySelect'

import { COLLECTION_APPOINTMENTS } from '../../configs/database'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

export const AppointmentCreate = () => {

  const { navigate } = useNavigation()

  const [category, setCategory] = useState('')

  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [description, setDescription] = useState('')

  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [genericAlert, setGenericAlert] = useState(() => false)

  const handleOpenGuilds = () => {
    setOpenGuildsModal(true)
  }

  const handleCloseModal = () => {
    setOpenGuildsModal(false)
  }

  const handleGuildSelect = (guildSelect: GuildProps) => {
    setGuild(guildSelect)
    setOpenGuildsModal(false)
  }

  const handleCategorySelect = (categoryId: string) => {
    setCategory(categoryId)
  }

  const handleCloseAlert = () => setGenericAlert(!genericAlert)

  const handleSave = async () => {

    if (!category) {
      setGenericAlert(!genericAlert)
      setTitle('Oops!')
      setMessage('Você precisa selecionar uma categoria.')
      return
    }

    if (!guild.name) {
      setGenericAlert(!genericAlert)
      setTitle('Oops!')
      setMessage('Selecione um servidor.')
      return
    }


    if (!day || !month) {
      setGenericAlert(!genericAlert)
      setTitle('Oops!')
      setMessage('Insira dia e mês.')
      return
    }

    if (!hour || !minute) {
      setGenericAlert(!genericAlert)
      setTitle('Oops!')
      setMessage('Insira o horário.')
      return
    }

    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigate('Home');
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <Background>
          <Header
            title='Agendar partida'
          />

          <Text style={[
            styles.label,
            { marginLeft: 24, marginTop: 24, marginBottom: 18 }
          ]}>
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>

                {guild.icon ?
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                  :
                  <View style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ?
                      guild.name
                      :
                      'Selecione um servidor'}
                  </Text>

                </View>

                <Feather
                  name='chevron-right'
                  color={theme.colors.heading}
                  size={24}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setDay}
                  />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMonth}
                  />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setHour}
                  />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMinute}
                  />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                Descrição
              </Text>

              <Text style={styles.charactersLimit}>
                Max 100 caracteres
              </Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />

            <View style={styles.footer}>
              <Button
                title='Agendar'
                onPress={handleSave}
              />
            </View>

          </View>
        </Background>
      </ScrollView>

      <ModalView
        visible={openGuildsModal} closeModal={handleCloseModal}
      >
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>

      <GenericAlert
        visible={genericAlert}
        title={title}
        message={message}
        closeGenericAlert={handleCloseAlert}
      />
    </KeyboardAvoidingView>
  )
}