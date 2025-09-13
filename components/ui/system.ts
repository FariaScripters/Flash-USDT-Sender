import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6fffa" },
          100: { value: "#b3f5ec" },
          200: { value: "#81e6d9" },
          300: { value: "#4fd1c7" },
          400: { value: "#38b2ac" },
          500: { value: "#319795" },
          600: { value: "#2c7a7b" },
          700: { value: "#285e61" },
          800: { value: "#234e52" },
          900: { value: "#1d4044" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
