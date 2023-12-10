<script>
	import axios from 'axios'
	let username = ''
	let email = ''
	const validateEmail = (email) => {
		return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		};
	const handleSubmit = async () =>{
		console.log(username,email)
		//validate email
		if (validateEmail(email).length == 0 && username.length > 0){
			//invalid email
		}
		const request = axios({
			method:'post',	
			url:'/api/mail',
			headers:{
				'Content-Type':'application/json'
			},
			data:{
				username:username,
				email:email
			},
		}).then(response => console.log(response))	
		
	}
</script>

# jaydenpb.net mailing list.

Enter your email and I'll send you an email whenever a new blog post is out.

Or whenever I feel like it

(no spam or ads I promise)


<form on:submit|preventDefault={handleSubmit} method="POST">
<label for="name">name</label><br>
<input type="text" id="name" bind:value={username}>
<br>
<label for="email" >email</label><br>
<input type="text" id="email" bind:value={email}>
<br>
<button >subscribe</button>
</form>