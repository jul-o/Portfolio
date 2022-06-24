import RemarkHTML from 'remark-html';

module.exports = {
	distDir: '../.next',
	webpack(config) {
		config.module.rules.push({
			test: /\.md$/,
			use: [
				{
					loader: 'html-loader',
				},
				{
					loader: 'remark-loader',
					options: {
						remarkOptions: {
							plugins: [RemarkHTML],
						},
					},
				},
			],
		});
	},
};
