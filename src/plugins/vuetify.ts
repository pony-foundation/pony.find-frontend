import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

const telegramTheme = {
    dark: false,
    colors: {
      background: 'var(--tg-bg-color)',
      surface: 'var(--tg-theme-section-bg-color)',
      'surface-bright': 'var(--tg-theme-section-bg-color)',
      'surface-light': 'var(--tg-theme-section-bg-color)',
      'surface-variant': 'var(--tg-theme-secondary-bg-color)',
      'on-surface-variant': 'var(--tg-theme-section-bg-color)',
      primary: 'var(--tg-theme-accent-text-color)',
      'primary-darken-1': '#1F5592',
      secondary: '#48A9A6',
      'secondary-darken-1': '#018786',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
}

export default createVuetify()