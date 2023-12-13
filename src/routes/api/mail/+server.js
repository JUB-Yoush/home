import { json } from '@sveltejs/kit'
import clientPromise from '../../../lib/mongodb-client.js';


const validateEmail = (email) => {
	return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	};

// validate input
//return appropriate status and message
export async function POST(event){
	const body = await event.request.json()
	console.log(body.favSong, body.email)
	if (validateEmail(body.email) == null || body.favSong.length < 1){
		return new Response(JSON.stringify({msg:'invalid input'}),{status:400})
	}
	//addToDB(body.favSong, body.email)
	//add to database:
	const dbConnection = await clientPromise
	const db = dbConnection.db('mailDB');
	//const db = clientPromise.db('mailDB')
	const collection = db.collection('emails')
	const emailObj = {
		joined:new Date(),
		email: body.email,
		favAlbum: body.favSong
	}
	const newMail = await collection.insertOne(emailObj)
	return new Response(JSON.stringify({content:emailObj}),{status:200})
}

