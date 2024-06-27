import { SITE_URL } from '@/lib/constants'
import { type MetadataRoute } from 'next'


const robots = (): MetadataRoute.Robots => ({
	rules: [
		{
			userAgent: '*',
			allow: ['/'],
			disallow: ['/400', '/500', '/api/*']
		}
	],
	sitemap: `${SITE_URL}/sitemap.xml`,
	host: SITE_URL
})

export default robots;
