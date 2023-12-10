import { json } from '@sveltejs/kit'

const validateEmail = (email) => {
	return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	};

export async function POST(event){
	const body = await event.request.json()
	console.log(body.username, body.email)

	if (validateEmail(body.email).length == 0){
		return new Response(JSON.stringify({error: err}), {
                status: 400,
            });
	}

	return new Response(body)
}