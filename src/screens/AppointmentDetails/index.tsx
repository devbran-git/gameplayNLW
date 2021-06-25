import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Share,
  FlatList,
  Platform,
  ImageBackground
} from 'react-native'

import * as Linking from 'expo-linking'

import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import { Member, MemberProps } from '../../components/Member'
import { Header } from '../../components/Header/index'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { ListDivider } from '../../components/ListDivider'

import { api } from '../../services/api'

import BannerImg from '../../assets/banner.png'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { useRoute } from '@react-navigation/core'
import { AppointmentProps } from '../../components/Appointment'
import { GenericAlert } from '../../components/GenericAlert'
import { Load } from '../../components/Load'

type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string
  name: string
  instant_invite: string
  members: MemberProps[]
}

export function AppointmentDetails() {
  const route = useRoute()
  const { guildSelected } = route.params as Params

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(true)

  const widgetUri = 'https://discord.gg/SJ8pAY65GH'

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
      setWidget(response.data)
    } catch (error) {
      <GenericAlert
        title={'Erro'}
        message={'Verifique as configurações do servidor. Será que ele está habilitado?'}
      />
    } finally {
      setLoading(false)
    }
  }

  const handleShareInvitation = () => {

    const message = Platform.OS === 'ios'
      ? `Junte-se a ${guildSelected.guild.name}`
      : widget.instant_invite || widgetUri

    Share.share({
      message,
      url: widget.instant_invite || widgetUri
    })
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite || widgetUri)
  }

  useEffect(() => {
    fetchGuildWidget()
  }, [])

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner &&
          <BorderlessButton onPress={handleShareInvitation}>
            <Fontisto
              name="share"
              size={24}
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


      {loading ?
        <Load />
        :
        <>
          <ListHeader
            title='Jogadores'
            subtitle={`Total ${widget?.members?.length || '0'}`}
          />
          <FlatList
            style={styles.members}
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider customStyle={styles.listDivider} />}
            showsVerticalScrollIndicator={false}
          />
        </>
      }
      {guildSelected.guild.owner &&
        <View style={styles.footer}>
          <ButtonIcon
            title='Entrar na partida'
            onPress={handleOpenGuild}
          />
        </View>
      }

    </Background>
  )
}