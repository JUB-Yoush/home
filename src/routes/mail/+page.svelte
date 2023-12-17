<script>
	import axios from 'axios'
	let favSong = ''
	let email = ''
	let resultTag
	let resultText = ''
	
	const displayResult = (msg) => {
		resultTag.classList.remove('hide')
		resultText = msg
	}

	const handleSubmit = async () =>{
		console.log(favSong,email)

		//validate email
		
		const request = axios({
			method:'post',	
			url:'/api/mail',
			headers:{
				'Content-Type':'application/json'
			},
			data:{
				favSong:favSong,
				email:email
			},
		}).then((response) => {
			console.log('Everything cool fr')
			console.log(response.status)
			displayResult('Thanks for joining! please un-mark me@jaydenpb.net as spam 😳)')
			
		}).catch(function (error) {
		// handle error
		console.log(`ERROR IN REQUEST: ${error}`);
		displayResult('ERROR: Invalid username or email')
		})
		
	}
</script>

# jaydenpb.net mailing list.

Enter your email and I'll send you an email whenever a new blog post is out.

Or whenever I feel like it.

(no spam or ads I promise)

<br>
<br>

### Join the list:

<!--
<form on:submit|preventDefault={handleSubmit} method="POST">
-->
<form method="POST">
<label for="email" >Email-></label>
<input name="email" type="text" id="email" bind:value={email}>
<br>
<label for="favSong">Favorite Album-></label>
<input name="favSong" type="text" id="favSong"  bind:value={favSong}>
<br>
<button type='submit'>[Join]</button>
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