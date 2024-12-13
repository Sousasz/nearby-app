import { IconProps } from "@tabler/icons-react-native"
import { IconQrcode, IconMapPin, IconTicket } from "@tabler/icons-react-native"

type Steps = {
  title: string,
  description: string,
  icon: React.ComponentType<IconProps>,
}


export const steps: Steps[] = [
  {
    title: "Encontre estabelecimentos",
    description: "Veja locais perto de você que são parceiros Nearby",
    icon: IconMapPin
  },
  {
    title: "Ative o cupom com QR Code",
    description: "Escaneie o código no estabelecimento para usar o benefício",
    icon: IconQrcode
  },
  {
    title: "Garanta vantagens perto de você",
    description: "Ative cupons onde estiver, em diferentes tipos de estabelecimento",
    icon: IconTicket
  },
]