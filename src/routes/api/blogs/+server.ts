import type { Blog } from '$lib/types';
import { json } from '@sveltejs/kit';

async function getBlogs() {
	let blogs: Blog[] = [];

	const paths = import.meta.glob('/src/blogs/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Blog, 'slug'>;
			const blog = { ...metadata, slug } satisfies Blog;
			blogs.push(blog);
		}
	}

	blogs = blogs.sort((first, second) => {
		return new Date(second.date).getTime() - new Date(first.date).getTime();
	});

	return blogs;
}

export async function GET() {
	const blogs = await getBlogs();
	return json(blogs);
}
