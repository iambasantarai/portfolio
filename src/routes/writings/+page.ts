import type { Writing } from '$lib/types';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
  const response = await fetch('api/writings');
  const writings: Writing[] = await response.json();
  return { writings };
};
