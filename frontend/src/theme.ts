import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      '*:focus': { boxShadow: 'none !important' },
      '*[data-focus]': { boxShadow: 'none !important' },
      '::-webkit-scrollbar': { width: '8px' },
      '::-webkit-scrollbar-thumb': { background: 'rgba(0,0,0,.1)' },
      '::-webkit-scrollbar-track': { background: 'rgba(0,0,0,.1)' }
    }
  }
})
