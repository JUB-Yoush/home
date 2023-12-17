import myclientPromise from '$lib/server/mongodb-client';

const validateEmail = (email) => {
	return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	};

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
		// TODO log the user in
		const body = await request.formData()
		console.log(body.get('email'))
		console.log(body.get('favSong'))
	if (validateEmail(body.get('email')) == null || body.get('favSong').length < 1){
		return{success:false}
	}
	const dbConnection = await myclientPromise
	const db = dbConnection.db('mailDB');
	//const db = clientPromise.db('mailDB')
	const collection = db.collection('emails')
	const emailObj = {
		joined:new Date(),
		email: body.get('email'),
		favAlbum: body.get('favSong')
	}
	const newMail = await collection.insertOne(emailObj)
	return{success:true}
	}
};
