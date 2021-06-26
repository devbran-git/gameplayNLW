import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 170,
    borderColor: theme.colors.secondary50,
    paddingHorizontal: 24
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 40
  },
  buttonNo: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginRight: 10,
    elevation: 3
  },
  borderButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
  },
  buttonYes: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    marginLeft: 10
  },
  buttonType: {
    fontFamily: theme.fonts.text500,
    fontSize: 16,
    color: theme.colors.heading
  },
  redText: {
    color: theme.colors.primary
  }
})