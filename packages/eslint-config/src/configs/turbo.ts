import type { Linter } from 'eslint'

import { turboPlugin } from '../plugins'

export const turbo: Linter.FlatConfig[] = [
	{
		name: 'sdnsdev:turbo',
		plugins: {
			turbo: turboPlugin
		},
		rules: {
			...turboPlugin.configs.recommended.rules
		}
	}
]
