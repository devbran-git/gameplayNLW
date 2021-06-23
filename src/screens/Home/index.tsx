import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CategorySelect } from '../../components/CategorySelect'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Profile } from '../../components/Profile'

import { styles } from './styles'
import { Appointment } from '../../components/Appointment'
import Background from '../../components/Background'

const appointments = [
  {
    id: '1',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 14:20h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },
  {
    id: '2',
    guild: {
      id: '2',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },
  {
    id: '3',
    guild: {
      id: '3',
      name: 'Spartans',
      icon: null,
      owner: false
    },
    category: '1',
    date: '23/06 às 10:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },
  {
    id: '4',
    guild: {
      id: '4',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '23/06 às 22:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },
  {
    id: '5',
    guild: {
      id: '5',
      name: 'Glorious Fury',
      icon: null,
      owner: false
    },
    category: '1',
    date: '24/06 às 15:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },
  {
    id: '6',
    guild: {
      id: '6',
      name: 'Spartans',
      icon: null,
      owner: false
    },
    category: '1',
    date: '24/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },
]

export const Home = () => {

  const { navigate } = useNavigation()

  const [category, setCategory] = useState('')

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  const handleAppointmentDetails = () => navigate('AppointmentDetails')
  const handleAppointmentCreate = () => navigate('AppointmentCreate')

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

        <View style={styles.content}>
          <ListHeader
            title='Partidas agendadas'
            subtitle='Total 6'
          />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={handleAppointmentDetails}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  )
}
