// import { allBlogPosts, allProjects } from 'mdx/generated'
import type { Metadata } from 'next'

import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL
  }
}

const Page = () => {
  // const posts = allBlogPosts
  // const latestPosts = posts
  //   .sort((a, b) => {
  //     return new Date(b.date).getTime() - new Date(a.date).getTime()
  //   })
  //   .slice(0, 2)

  // const projects = allProjects

  return (
    <>
     Kogda nado byde, dopishy a tak Chill guys <br />Made with ❤️ by sdnsdev AKA Sadness
    </>
  )
}

export default Page
