import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme"

export const styles = StyleSheet.create({ 
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    color: colors.gray[100]
  }
})