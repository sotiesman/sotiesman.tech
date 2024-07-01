'use client'

import { BlurImage } from '@sdnsdev/ui'
import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

const TEXTS = [
  {
    text: 'amazing',
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#96D7DB] to-[#6D84BF]'
  },
  {
    text: 'stunning',
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]'
  },
  {
    text: 'fantastic',
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#04D7CA] to-[#B7E7AB]'
  },
  {
    text: 'amazing',
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#96D7DB] to-[#6D84BF]'
  }
]

type HeroProps = {
	basicAvatar: string
}

const Hero = ({basicAvatar}:HeroProps) => {
  const [scope, animate] = useAnimate()


  useEffect(() => {
    void animate(
      [
        [scope.current, { y: '0%' }, { duration: 0 }],
        [scope.current, { y: '-25%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-50%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-75%' }, { duration: 0.3, at: '+1.3' }]
      ],
      {
        repeat: Number.POSITIVE_INFINITY
      }
    )
  }, [animate, scope])

  return (
    <div className='space-y-6 md:my-16'>
      <div className='flex flex-col-reverse gap-8 md:flex-row md:justify-between'>
        <motion.div
          className='flex flex-col gap-4 will-change-[transform,opacity] md:max-w-xl'
          initial={{
            y: 40,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5
          }}
        >
          <h1 className='font-title bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-2xl font-bold leading-9 text-transparent sm:text-4xl sm:leading-[3.5rem] dark:from-white dark:via-white/90 dark:to-white/70'>
            I'm Nazar, a Backend Developer creating{' '}
            <div className='inline-grid h-9 overflow-hidden sm:h-14'>
              <div ref={scope}>
                {TEXTS.map(({ text, className }, i) => (
                  // eslint-disable-next-line @eslint-react/no-array-index-key
                  <div className={className} key={i}>
                    {text}
                  </div>
                ))}
              </div>
            </div>{' '}
            webapp's using Actix.
          </h1>
          <div className='text-muted-foreground text-sm'>Ukraine • UTC/GMT +3</div>
        </motion.div>
        <motion.div
          className='relative size-20 md:size-28'
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 0.3
          }}
        >
          <BlurImage
            src={basicAvatar}
            className='rounded-full'
            width={112}
            height={112}
            alt='Nazar'
            lazy={false}
          />
          <div className='absolute inset-0 -z-10 bg-gradient-to-tl from-blue-700 to-green-800 opacity-0 blur-2xl md:opacity-50' />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
