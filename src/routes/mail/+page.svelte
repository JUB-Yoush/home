<script>
	import axios from 'axios'
	let username = ''
	let email = ''
	let resultTag
	let resultText = ''
	
	const displayResult = (msg) => {
		resultTag.classList.remove('hide')
		resultText = msg
	}

	const handleSubmit = async () =>{
		console.log(username,email)

		//validate email
		
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

Or whenever I feel like it.

(no spam or ads I promise)

<br>
<br>
<form on:submit|preventDefault={handleSubmit} method="POST">
<label for="name">name|</label>
<input type="text" id="name"  bind:value={username}>
<br>
<label for="email" >email|</label>
<input type="text" id="email" bind:value={email}>
<br>
<button>&lt;subscribe&gt;</button>
</form>
<p bind:this={resultTag} class='hide'>{resultText}</p>


<style>
	.hide{
		visibility: hidden;
	}
	input[type=text]{
		border: 2px none var(--color);
		color: var(--color);
	}
	button{
		background: none;
		border: none;
	}
	button:hover{
		cursor: pointer;
	}
</style>