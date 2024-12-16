import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	try {
		const writing = await import(`../../../writings/${params.slug}.md`);

		return {
			content: writing.default,
			metadata: writing.metadata
		};
	} catch (e) {
		throw error(404, `Couldn't find ${params.slug}`);
	}
};
