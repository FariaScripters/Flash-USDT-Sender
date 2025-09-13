import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#EBF8FF',
      100: '#C3DAFE',
      200: '#A3BFFA',
      300: '#7F9CF5',
      400: '#667EEA',
      500: '#5A67D8',
      600: '#4C51BF',
      700: '#434190',
      800: '#3C366B',
      900: '#1A365D', // Primary Blue
    },
    accent: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169', // Accent Green
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
    }
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
})

export default theme
