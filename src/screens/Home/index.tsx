import React, { useState, useCallback } from 'react'
import { View, FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Profile } from '../../components/Profile'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { ListHeader } from '../../components/ListHeader'
import { Appointment, AppointmentProps } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { CategorySelect } from '../../components/CategorySelect'

import { styles } from './styles'

import { COLLECTION_APPOINTMENTS } from '../../configs/database'
import { Load } from '../../components/Load'

export const Home = () => {
  const { navigate } = useNavigation()

  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigate('AppointmentDetails', { guildSelected });
  }

  function handleAppointmentCreate() {
    navigate('AppointmentCreate');
  }

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const storage: AppointmentProps[] = response ? JSON.parse(response) : []

    if (category) {
      setAppointments(storage.filter(item => item.category === category))
    } else {
      setAppointments(storage)
    }

    setLoading(false)
  }

  useFocusEffect(useCallback(() => {
    loadAppointments()
  }, [category]))

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        {loading ?
          <Load />
          :
          <View style={styles.content}>
            <ListHeader
              title='Partidas agendadas'
              subtitle={`Total ${appointments.length}`}
            />

            <FlatList
              style={styles.matches}
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleAppointmentDetails(item)}
                />
              )}
              contentContainerStyle={{ paddingBottom: 40 }}
              ItemSeparatorComponent={() => <ListDivider customStyle={styles.listDivider} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        }

      </View>
    </Background>
  )
}
