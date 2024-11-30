import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const writing = await import(`../../../writings/${params.slug}.md`);

		return {
			content: writing.default,
			metadata: writing.metadata
		};
	} catch (e) {
		throw error(404, `Couldn't find ${params.slug}`);
	}
}
