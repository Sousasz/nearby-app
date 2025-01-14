import { ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/theme"

export default function Loading() {
  return <ActivityIndicator color={colors.green.base} size={50} style={styles.loading} />
}