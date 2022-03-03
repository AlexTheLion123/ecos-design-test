export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-953e4845.js","js":["start-953e4845.js","chunks/vendor-f9f71fde.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/explanation\/?$/,
				params: null,
				path: "/explanation",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/([^/]+?)\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: (m) => ({ method: m[1], chatid: m[2], author: m[3], message: m[4]}),
				load: () => import('./entries/endpoints/api/_method_/_chatid_/_author_/_message_.ts.js')
			}
		]
	}
};
