import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'

import { ListDivider } from '../../components/ListDivider'
import { Guild, GuildProps } from '../../components/Guild'
import { Load } from '../../components/Load'

import { api } from '../../services/api'

import { styles } from './styles'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export const Guilds = ({ handleGuildSelect }: Props) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

  const fetchGuilds = async () => {
    const response = await api.get('/users/@me/guilds')

    setGuilds(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchGuilds()
  }, [])

  return (
    <View style={styles.container}>
      {loading ?
        <Load />
        :
        <FlatList
          style={styles.guilds}
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />}
          contentContainerStyle={{ paddingBottom: 40, paddingTop: 103 }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider customStyle={styles.listDivider} />}
          ListHeaderComponent={() => <ListDivider customStyle={styles.listDivider} />}
        />
      }
    </View>
  )
}