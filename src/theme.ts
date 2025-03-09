import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
    },
    Tab: {
      baseStyle: {
        _selected: {
          color: 'blue.600',
          borderColor: 'blue.600',
        },
      },
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
}); 