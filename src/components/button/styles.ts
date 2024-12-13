import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green.base,
    borderRadius: 12,
    width: "100%",
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: colors.gray[100],
  }
})