import React from 'react'
import { View, FlatList } from 'react-native'

import { Guild } from '../../components/Guild'
import { GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'

import { styles } from './styles'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export const Guilds = ({ handleGuildSelect }: Props) => {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Spartans',
      icon: 'image.png',
      owner: false
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.guilds}
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Guild
          data={item}
          onPress={() => handleGuildSelect(item)}
        />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider customStyle={styles.listDivider} />}
      />
    </View>
  )
}