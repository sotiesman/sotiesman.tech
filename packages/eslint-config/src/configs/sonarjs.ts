import type { Linter } from 'eslint'

import { sonarjsPlugin } from '../plugins'

export const sonarjs: Linter.FlatConfig[] = [
	{
		name: 'sdnsdev:sonarjs',
		plugins: {
			sonarjs: sonarjsPlugin as unknown as Record<string, unknown>
		},
		rules: {
			...sonarjsPlugin.configs.recommended.rules,
			'sonarjs/no-duplicate-string': 'off'
		}
	}
]
