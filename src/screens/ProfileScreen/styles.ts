import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 104,
    height: 104,
    borderWidth: 2,
    borderColor: theme.colors.secondary50,
    borderRadius: 24,
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 16
  },
  content: {
    paddingHorizontal: 24
  },
  input: {
    width: '100%',
    height: 36,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    marginBottom: 16
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    marginBottom: 4
  },
  horizontalDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  horizontalInput: {
    width: 144,
    height: 36,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
  },
  textArea: {
    width: '100%',
    height: 95,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    paddingHorizontal: 16,
    paddingTop: 16,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    textAlignVertical: 'top',
  },
  containerButton: {
    width: '100%',
    height: 36,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22
  },
  titleButton: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'center',
  },
  iconWrapper: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: theme.colors.line
  }
})