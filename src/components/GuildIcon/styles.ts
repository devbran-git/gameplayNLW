import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: 66,
    height: 63,
    borderRadius: 8,
    backgroundColor: theme.colors.discord,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    left: 1
  },
  image: {
    width: 66,
    height: 62,
    marginRight: 20,
    left: 10
  }
})