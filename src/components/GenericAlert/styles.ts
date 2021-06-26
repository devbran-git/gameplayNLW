import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 180,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: theme.colors.secondary50,
    overflow: 'hidden'
  },
  title: {
    top: 25,
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading
  },
  message: {
    fontFamily: theme.fonts.text500,
    fontSize: 16,
    color: theme.colors.highlight,
    textAlign: 'center'
  },
  button: {
    bottom: 0,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary
  },
  buttonType: {
    fontFamily: theme.fonts.text500,
    fontSize: 16,
    color: theme.colors.heading
  }
})