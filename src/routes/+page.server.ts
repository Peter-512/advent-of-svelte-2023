import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json');

	const data: Array<{name: string; tally: number}> = await res.json();

	return {data}
};