import React from 'react'
import {
  View,
  Text,
  FlatList,
  ImageBackground
} from 'react-native'

import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import { Member } from '../../components/Member'
import { Header } from '../../components/Header/index'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { ListDivider } from '../../components/ListDivider'

import BannerImg from '../../assets/banner.png'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

export const AppointmentDetails = () => {

  const members = [
    {
      id: '1',
      username: 'Evandro',
      avatar_url: 'https://github.com/devbran-git.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'offline'
    },
    {
      id: '3',
      username: 'Colby',
      avatar_url: 'https://github.com/colby.png',
      status: 'online'
    },
  ]

  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          <BorderlessButton>
            <Fontisto
              name='share'
              size={20}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        style={styles.banner}
        source={BannerImg}
      >
        <View style={styles.bannerContent} >
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader
        title='Jogadores'
        subtitle='Total 3'
      />

      <FlatList
        style={styles.members}
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider customStyle={styles.listDivider} />}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.footer}>
        <ButtonIcon title='Entrar na partida' />
      </View>

    </Background>
  )
}