import sdnsdev from './dist/index.js'

export default sdnsdev({
	project: './tsconfig.json',
	tsconfigRootDir: import.meta.dirname,
	react: true,
	next: true,
	playwright: true,
	testingLibrary: true,
	turbo: true,
	typescript: true
})
