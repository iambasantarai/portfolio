import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const blog = await import(`../../blogs/${params.slug}.md`);

		return {
			content: blog.default,
			metadata: blog.metadata
		};
	} catch (e) {
		throw error(404, `Couldn't find ${params.slug}`);
	}
}
