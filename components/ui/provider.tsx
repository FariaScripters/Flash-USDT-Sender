"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider, type ThemeProviderProps } from "next-themes"
import { system } from "./system"

export function Provider(props: ThemeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider {...props} />
    </ChakraProvider>
  )
}
