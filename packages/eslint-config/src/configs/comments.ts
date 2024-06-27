import type { Linter } from 'eslint'

import { eslintCommentsPlugin } from '../plugins'

export const comments: Linter.FlatConfig[] = [
	{
		name: 'sdnsdev:comments',
		plugins: {
			'eslint-comments': eslintCommentsPlugin
		},
		rules: {
			...eslintCommentsPlugin.configs.recommended.rules,

			'eslint-comments/require-description': 'error'
		}
	}
]
