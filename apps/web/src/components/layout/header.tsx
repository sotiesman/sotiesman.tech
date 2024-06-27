'use client'

import { cn } from '@sdnsdev/utils'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener('scroll', changeBackground)

    return () => {
      document.removeEventListener('scroll', changeBackground)
    }
  }, [])

	return (
		<motion.header className={cn('bg-background/30 fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 shadow-sm saturate-100 backdrop-blur-[10px] transition-colors', isScrolled && 'bg-background/80')} initial={{y:-100}} animate={{y:0}} transition={{duration:0.3}}>
			<a href="#skip-nav" className='bg-background focus-visible:ring-ring fixed left-4 top-4 -translate-y-20'>
				<span>Skip to main content</span>
			</a>
		</motion.header>
	)
}

export default Header
