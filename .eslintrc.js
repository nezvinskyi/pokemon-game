module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb', 'prettier', 'plugin:react/jsx-runtime'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error', { singleQuote: true }],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/prop-types': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'no-unused-expressions': 0,
		'import/no-named-as-default': 0,
		'react/jsx-props-no-spreading': 0,
	},
};
