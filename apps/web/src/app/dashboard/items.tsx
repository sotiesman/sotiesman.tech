'use client'

import { SiGithub, SiWakatime } from '@icons-pack/react-simple-icons'
import { Link } from '@sdnsdev/ui'
import { ArrowRightIcon, PencilIcon, StarIcon } from 'lucide-react'

import Counter from '@/components/counter'
import { api } from '@/trpc/react'

type Card = {
  icon: React.ReactNode
  title: string
  link: string
  value: number | undefined
  linkText: string
  gradient: {
    startColor: string
    endColor: string
  }
  suffix?: string
}

const Items = () => {
  const githubQuery = api.github.get.useQuery()

  const likesQuery = api.likes.getCount.useQuery()
  const viewsQuery = api.views.getCount.useQuery()
  const wakatimeQuery = api.wakatime.get.useQuery()

  const data: Card[] = [
    {
      title: 'Coding Hours',
      link: 'https://wakatime.com/@sdnsdev',
      value: wakatimeQuery.data?.seconds
        ? Math.round(wakatimeQuery.data.seconds / 60 / 60)
        : undefined,
      icon: <SiWakatime className='text-[#0061ff]' />,
      linkText: 'WakaTime',
      gradient: {
        startColor: '#0061ff',
        endColor: '#6f7bf7'
      },
      suffix: 'hrs'
    },
    {
      title: 'GitHub Followers',
      link: 'https://github.com/SadnessNetwork',
      value: githubQuery.data?.followers,
      icon: <SiGithub className='text-[#fee000]' />,
      linkText: 'GitHub',
      gradient: {
        startColor: '#fee000',
        endColor: '#ffce63'
      }
    },
    {
      title: 'GitHub Stars',
      link: 'https://github.com/SadnessNetwork',
      value: githubQuery.data?.stars,
      icon: <StarIcon className='size-6 text-[#fee000]' />,
      linkText: 'GitHub',
      gradient: {
        startColor: '#fee000',
        endColor: '#ffce63'
      }
    },
    {
      title: 'Blog Total Views',
      link: 'https://sotiesman.tech',
      value: viewsQuery.data?.views,
      icon: <PencilIcon className='size-6 text-[#ff0f7b]' />,
      linkText: 'Blog',
      gradient: {
        startColor: '#ff0f7b',
        endColor: '#f945ff'
      }
    },
    {
      title: 'Blog Total Likes',
      link: 'https://sotiesman.tech',
      value: likesQuery.data?.likes,
      icon: <PencilIcon className='size-6 text-[#ff0f7b]' />,
      linkText: 'Blog',
      gradient: {
        startColor: '#ff0f7b',
        endColor: '#f945ff'
      }
    }
  ]

  return (
    <div className='mb-4 mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {data.map((item) => {
        const {
          icon,
          link,
          title,
          value,
          linkText,
          gradient: { startColor, endColor },
          suffix
        } = item

        return (
          <Link
            key={item.title}
            href={link}
            className='group relative overflow-hidden rounded-lg border p-4 shadow-sm transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800'
          >
            <div className='flex flex-col items-center justify-center gap-2 transition-transform group-hover:-translate-y-24 group-focus:-translate-y-24'>
              <div className='flex items-center gap-2 text-3xl font-bold'>
                {value === 0 || value !== undefined ? (
                  <>
                    <span>{icon}</span>
                    <div
                      style={{
                        background: `linear-gradient(122.25deg, ${startColor} 12.16%, ${endColor} 70.98%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      <Counter value={Number(value)} />
                      {suffix ? (<span>{` ${suffix}`}</span>) : null}
                    </div>
                  </>
                ) : (
                  '--'
                )}
              </div>
              <div className='text-xl font-medium'>{title}</div>
            </div>
            <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-2xl font-bold opacity-0 transition group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
              {linkText}
              <ArrowRightIcon className='size-6' />
            </span>
          </Link>
        )
      })}
    </div>
  )
}

export default Items
