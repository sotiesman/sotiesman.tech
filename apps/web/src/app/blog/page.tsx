import { allBlogPosts } from 'mdx/generated'
import type { Metadata, ResolvingMetadata } from 'next'

import FilteredPosts from '@/components/filtered-posts'
import PageTitle from '@/components/page-title'

const title = 'Blog'
const description =
  'My personal website and blog where I will share my thoughts on various topics including tutorials, notes and personal experiences. This is a new way to conquer your dreams!'

type PageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent).openGraph ?? {}
  const previousTwitter = (await parent).twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: '/blog'
    },
    openGraph: {
      ...previousOpenGraph,
      url: '/blog',
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

const Page = () => {
  const posts = allBlogPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

	/* Text variant when posts appear
	 I started writing articles in the "month" **** year, mostly about knowledge sharing. I have written a total of ${posts.length} articles on my blog. You can search for articles by title in the search box below.
	 */

  return (
    <>
      <PageTitle
        title='Blog'
        description={`Posts will be appearing here soon!`}
      />
      <FilteredPosts posts={posts} />
    </>
  )
}

export default Page
