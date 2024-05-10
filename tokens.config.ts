import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    black: '#000000',
  },
  docus: {
    header: {
      height: '48px',
    },
  },
  elements: {
    backdrop: {
      background: {
        initial: '#fffc',
        dark: 'rgba(27, 27, 27, 0.98)',
      },
    },
    border: {
      primary: {
        static: {
          initial: '{color.gray.100}',
          dark: 'rgba(149, 149, 154, 0.7)',
        },
      },
    },
  },
  prose: {
    hr: {
      color: '{elements.border.primary.static}',
    },
  },
});
