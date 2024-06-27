import sdnsdev from '@sdnsdev/eslint-config'

export default sdnsdev({
  project: './tsconfig.json',
  tsconfigRootDir: import.meta.dirname,
  react: true,
  next: true,
  playwright: true,
  testingLibrary: true
})
