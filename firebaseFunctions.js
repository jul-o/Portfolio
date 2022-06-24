const { join } = require('path');
const { https } = require('firebase-functions');
const { default: next } = require('next');
const functions = require('firebase-functions');

const nextjsDistDir = join('src', require('./src/next.config.js').distDir);

const nextjsServer = next({
	dev: false,
	conf: {
		distDir: nextjsDistDir,
	},
});
const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextjsFunc = functions
	.runWith({
		allowInvalidAppCheckToken: true,
	})
	.https.onRequest((req, res) => {
		return nextjsServer.prepare().then(() => nextjsHandle(req, res));
	});
