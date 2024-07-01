import sharedConfig from '@sdnsdev/tailwind-config'
import { type Config } from 'tailwindcss'

const config: Pick<Config, 'presets' | 'content' | 'darkMode' | 'theme'> = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,md,mdx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'],
  presets: [sharedConfig],
  theme: {
    extend: {
      backgroundImage: {
        pinned:
          'linear-gradient(119deg, rgb(143 152 242) 0%, rgb(95 167 225) 30%, rgb(105 240 116) 47%, rgb(171 171 171) 69%, rgb(190 188 251) 80%)',
        'pinned-dark':
          'linear-gradient(119deg, rgb(75 87 196) 0%, rgb(130 237 196) 30%, rgb(90 235 116) 42%, rgb(213 213 245) 63%, rgb(91 145 235) 73%)',
        'nav-link-indicator':
          'radial-gradient(75% 75% at 50% 50%, #9DFC4CFF 1%, #57FE98FF 99%)',
        'nav-link-indicator-dark':
          'radial-gradient(75% 75% at 50% 50%, #4CFCEAFF 0%, #576AFEFF 99%)',
        'email-button': 'linear-gradient(180deg, rgb(210 10 30) 5%, rgb(239 90 90) 100%)'
      },
      boxShadow: {
        'feature-card': '0 -1px 3px 0 rgb(0 0 0 / 0.05)',
        'feature-card-dark': '0 0 0 1px rgb(255 255 255 / 0.06), 0 -1px rgb(255 255 255 / 0.1)'
      }
    }
  }
}

export default config
