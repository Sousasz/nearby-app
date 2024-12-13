import { View, Text, Image, ViewProps } from "react-native"
import { styles } from "./styles"
import { steps } from "@/constants/steps"
import { colors, fontFamily } from "@/styles/theme"
import React from "react"

export function Step({ style }: ViewProps) {
  return (
    <View style={[styles.container, style]}>
      {steps.map((step, index) => {
        return (
          <View style={styles.step} key={index}>
            <step.icon size={32} color={colors.red.base} />
            <View style={styles.details}>
              <Text style={styles.title}>{step.title}</Text>
              <Text style={styles.description}>{step.description}</Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}