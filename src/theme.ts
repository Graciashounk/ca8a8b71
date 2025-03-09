import { extendTheme } from '@chakra-ui/react';

/**
 * Custom theme configuration for Chakra UI
 * Extends the default theme with:
 * - Global styles for body background and text color
 * - Default button color scheme
 * - Custom tab styling for selected state
 * - Color mode configuration (light/dark with system preference support)
 */
export const theme = extendTheme({
  // Global style overrides
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
    },
  },
  // Component-specific style overrides
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
  // Color mode configuration
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
}); 