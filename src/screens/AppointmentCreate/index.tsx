import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import Background from '../../components/Background'
import { Header } from '../../components/Header/index'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildIcon } from '../../components/GuildIcon'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

export const AppointmentCreate = () => {

  const [category, setCategory] = useState('')

  return (
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
        setCategory={setCategory}
        categorySelected={category}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {
              <GuildIcon />
              /* <View style={styles.image} /> */
            }

            <View style={styles.selectBody}>
              <Text style={styles.label}>
                Selecione um servidor
              </Text>
            </View>

            <Feather
              name='chevron-right'
              color={theme.colors.heading}
              size={24}
            />
          </View>
        </RectButton>
      </View>
    </Background>
  )
}