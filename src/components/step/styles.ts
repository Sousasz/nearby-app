import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'column',
    gap: 16,
    marginBottom: 230,
  },

  step: {
    flexDirection: "row",
    gap: 16,
    marginTop: 10,
    marginBottom: 10,
  },

  details: {
    flex: 1,
    gap: 8
  },
  
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.gray[600],
  },

  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 4,
  }
})