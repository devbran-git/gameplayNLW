import { StyleSheet } from 'react-native'
import { theme } from '../../../global/styles/theme'

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 34,
    color: theme.colors.heading,
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: theme.fonts.title500,
    fontSize: 15,
    color: theme.colors.heading,
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 40,
  }
})