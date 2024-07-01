import {
	SiDiscord,
	SiGithub,
	SiGitlab,
	SiSteam,
	SiTelegram,
	SiX,
	type IconType
} from '@icons-pack/react-simple-icons'
import {
	BarChartIcon,
	FlameIcon,
	MessageCircleIcon,
	PencilIcon,
	UserCircleIcon
} from 'lucide-react'

type HeaderLinks = Array<{
  icon: React.ReactNode
  href: string
  text: string
}>

type FooterLinks = Array<{
  id: number
  links: Array<{
    href: string
    text: string
  }>
}>

type SocialLinks = Array<{
  href: string
  title: string
  icon: IconType
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <PencilIcon className='size-3.5' />,
    href: '/blog',
    text: 'Blog'
  },
  {
    icon: <MessageCircleIcon className='size-3.5' />,
    href: '/guestbook',
    text: 'Guestbook'
  },
  {
    icon: <BarChartIcon className='size-3.5' />,
    href: '/dashboard',
    text: 'Dashboard'
  },
  {
    icon: <FlameIcon className='size-3.5' />,
    href: '/projects',
    text: 'Projects'
  },
  {
    icon: <UserCircleIcon className='size-3.5' />,
    href: '/about',
    text: 'About'
  }
]

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      {
        href: '/',
        text: 'Home'
      },
      {
        href: '/blog',
        text: 'Blog'
      },
      {
        href: '/about',
        text: 'About'
      },
      {
        href: '/dashboard',
        text: 'Dashboard'
      }
    ]
  },
  {
    id: 2,
    links: [
      {
        href: '/guestbook',
        text: 'Guestbook'
      },
      {
        href: '/projects',
        text: 'Projects'
      }
    ]
  },
  {
    id: 3,
    links: [
      {
        href: 'https://github.com/SadnessNetwork',
        text: 'GitHub'
      },
			{
        href: 'https://gitlab.com/sdnsdev',
        text: 'GitLab'
      },
      {
        href: 'https://t.me/sdnsdev',
        text: 'Telegram'
      },
      {
        href: 'https://discord.com/users/536479598469316639',
        text: 'Discord'
      },
      {
        href: 'https://steamcommunity.com/id/sotiesman/',
        text: 'Steam'
      },
			{
        href: 'https://x.com/sdnsdev',
        text: 'X'
      }
    ]
  }
]

export const SOCIAL_LINKS: SocialLinks = [
	{
		href: 'https://github.com/SadnessNetwork',
		title: 'GitHub',
		icon: SiGithub
	},
	{
		href: 'https://gitlab.com/sdnsdev',
		title: 'GitLab',
		icon: SiGitlab
	},
	{
		href: 'https://t.me/sdnsdev',
		title: 'Telegram',
		icon: SiTelegram
	},
	{
		href: 'https://discord.com/users/536479598469316639',
		title: 'Discord',
		icon: SiDiscord
	},
	{
		href: 'https://steamcommunity.com/id/sotiesman/',
		title: 'Steam',
		icon: SiSteam
	},
	{
		href: 'https://x.com/sdnsdev',
		title: 'X',
		icon: SiX
	}
]
