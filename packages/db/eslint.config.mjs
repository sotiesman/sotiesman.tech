import sdnsdev from '@sdnsdev/eslint-config'

export default sdnsdev(
  {
    project: './tsconfig.json',
    tsconfigRootDir: import.meta.dirname
  },
  {
    ignores: ['src/migrations/**']
  }
)
