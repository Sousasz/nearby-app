import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from "react-native"  
import { styles } from "./styles"
import { colors } from "@/styles/theme"
import { IconProps as TablerIconProps } from "@tabler/icons-react-native"

type ButtonProps = TouchableOpacityProps & {
  isLoading: boolean
}

export function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.5} disabled={isLoading} {...rest}>
      {isLoading ? (
        <ActivityIndicator size={"small"} color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

function Title({ children }: TextProps) {
  return <Text style={styles.title}>{children}</Text>
}

Button.Title = Title


type IconProps = {
  icon: React.ComponentType<TablerIconProps>
}

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />
}

Button.Icon = Icon


