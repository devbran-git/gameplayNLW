import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: '100%',
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 18,
    marginBottom: 24
  },
  content: {
    flex: 1,
    marginTop: 27
  },
  matches: {
    marginTop: 24,
    marginLeft: 24
  },
  listDivider: {
    left: 85,
    bottom: 2.5
  }
})