import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Profile } from '../../components/Profile'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { CategorySelect } from '../../components/CategorySelect'

import { styles } from './styles'

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

  const handleAppointmentCreate = () => navigate('AppointmentCreate')
  const handleAppointmentDetails = () => navigate('AppointmentDetails')

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

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
            style={styles.matches}
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={handleAppointmentDetails}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider customStyle={styles.listDivider} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  )
}
