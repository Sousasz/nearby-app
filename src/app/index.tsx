import { ScrollView } from "react-native";
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
import { Button } from "@/components/button";
import { router } from "expo-router";

export default function Index() {
  return (
    <ScrollView style={{ flex: 1, padding: 40, gap: 45 }}>
      <Welcome />
      <Steps />
      <Button 
        style={{ marginBottom: 60, flexDirection: "row", gap: 10 }} 
        isLoading={false}
        onPress={() => router.navigate('/home')}
      >
        <Button.Title>Começar</Button.Title>
      </Button>
    </ScrollView>
  )
}