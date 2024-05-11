import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    black: '#000000',
  },
  docus: {
    header: {
      height: '48px',
    },
    loadingBar: {
      gradientColorStop1: 'rgb(255, 91, 102)',
      gradientColorStop2: 'rgb(117, 147, 175)',
      gradientColorStop3: 'rgb(27, 154, 204)',
    }
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
