import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 320,
    bottom: 40
  },
  content: {
    marginTop: -80,
    paddingHorizontal: 50
  },
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