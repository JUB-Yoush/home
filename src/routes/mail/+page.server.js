import myclientPromise from '$lib/server/mongodb-client';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
		// TODO log the user in
		const body = await request.formData()
		console.log(body.get('email'))
		console.log(body.get('favSong'))
		console.log(myclientPromise)
	}
};
