'use client'

import {
	SiActix,
	SiCloudflare,
	SiCsharp,
	SiDocker,
	SiFigma,
	SiFirebase,
	SiGit,
	SiJavascript,
	SiJetbrains,
	SiMarkdown,
	SiMysql,
	SiNodedotjs,
	SiPostgresql,
	SiPostman,
	SiPrisma,
	SiPython,
	SiRescript,
	SiRust,
	SiSublimetext,
	SiTypescript,
	SiVisualstudiocode,
	SiZedindustries
} from '@icons-pack/react-simple-icons'
import { Marquee } from '@sdnsdev/ui'
import { ZapIcon } from 'lucide-react'

const StacksCard = () => {
  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>Stacks</h2>
      </div>
      <Marquee gap='20px' className='py-4' fade pauseOnHover>
        <SiJavascript className='size-10' />
        <SiTypescript className='size-10' />
				<SiRust className='size-10' />
				<SiRescript className='size-10' />
        <SiFigma className='size-10' />
				<SiPostman className='size-10' />
				<SiDocker className='size-10' />
        <SiPython className='size-10' />
        <SiPostgresql className='size-10' />
				<SiCsharp className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
        <SiPrisma className='size-10' />
        <SiMysql className='size-10' />
				<SiActix className='size-10' />
        <SiFirebase className='size-10' />
        <SiGit className='size-10' />
				<SiSublimetext className='size-10' />
        <SiZedindustries className='size-10' />
				<SiJetbrains className='size-10' />
        <SiVisualstudiocode className='size-10' />
        <SiCloudflare className='size-10' />
        <SiMarkdown className='size-10' />
        <SiNodedotjs className='size-10' />
      </Marquee>
    </div>
  )
}

export default StacksCard
