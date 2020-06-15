const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
		require('tailwindcss'),
		require('postcss-nested'),
        require('autoprefixer'),
        purgecss({
		content: [
		'/home/eshnil/learn/app/**/*.html.erb',
		'/home/eshnil/learn/app/**/*.html+tailwind.erb',
		'/home/eshnil/learn/app/**/*.html.slim',
		'/home/eshnil/learn/app/helpers/**/*.rb',
		'/home/eshnil/learn/app/javascript/**/*.js'
		],
		defaultExtractor: content => content.match(/[A-Za-z0-9-_.:/]+/g) || []
	}),
        require('cssnano')
    ]
}
