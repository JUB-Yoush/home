import { json } from '@sveltejs/kit'


const validateEmail = (email) => {
	return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	};

// validate input
//return appropriate status and message
export async function POST(event){
	const body = await event.request.json()
	console.log(body.username, body.email)
	if (validateEmail(body.email) == null || body.username.length < 1){
		return new Response(JSON.stringify({msg:'invalid email or username'}),{status:400})
	}
	console.log('past the if')
	return new Response(JSON.stringify({among:'us'}),{status:201})
}