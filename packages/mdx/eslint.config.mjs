import sdnsdev from '@sdnsdev/eslint-config'

export default sdnsdev(
	{
		project: './tsconfig.json',
		tsconfigRootDir: import.meta.dirname,
		react: true
	},
	{
		files: ['src/core/plugins/**/*.ts'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off'
		}
	}
)
