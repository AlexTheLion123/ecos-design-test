declare module '../output/server/index.js' {
	export { Server } from '@sveltejs/kit';
}

declare module './manifest.js' {
	import { SSRManifest } from '@sveltejs/kit';
	export const manifest: SSRManifest;
}
