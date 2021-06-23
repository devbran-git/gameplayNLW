import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 20
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading
  },
  members: {
    width: '100%',
    marginLeft: 24,
    marginTop: 20
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 35,
    marginBottom: getBottomSpace() - 35
  },
  listDivider: {
    margin: 65,
    top: 15
  }
})