import { type DocumentType, type MakeSourceOptions } from '@sdnsdev/mdx'

const Page = {
	name: 'Page',
	filePathPattern: 'pages/*.mdx'
} satisfies DocumentType

export default {
	contentDirPath: 'content',
	defs: [Page]
} satisfies MakeSourceOptions
