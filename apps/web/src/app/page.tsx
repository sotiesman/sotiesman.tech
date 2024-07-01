// import { allBlogPosts } from 'mdx/generated'
import type { Metadata } from 'next'

import AboutMe from '@/components/home/about-me'
import Hero from '@/components/home/hero'
// import LatestArticles from '@/components/home/latest-articles'
// import SelectedProjects from '@/components/home/selected-projects'
import { DISCORD_ID, SITE_URL } from '@/lib/constants'
import { getDiscordAvatar } from '@/utils/get-discord-avatar'

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL
  }
}

const Page = async () => {
  // const posts = allBlogPosts
  // const latestPosts = posts
  //   .sort((a, b) => {
  //     return new Date(b.date).getTime() - new Date(a.date).getTime()
  //   })
  //   .slice(0, 2)

  // const projects = allProjects

	const avatar = await getDiscordAvatar(DISCORD_ID)

  return (
    <>
      <Hero basicAvatar={avatar} />
      {/* <SelectedProjects projects={projects} /> */}
      <AboutMe />
      {/* <LatestArticles posts={latestPosts} /> */}
    </>
  )
}

export default Page
