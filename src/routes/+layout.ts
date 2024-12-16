import type { Load } from '@sveltejs/kit';

export const load: Load<{ url: string }> = async ({ url }) => {
    return {
        url: url.pathname
    };
};
