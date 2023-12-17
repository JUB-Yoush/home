<script>
	export let form
	let resultTag
	let resultText = ''
	
	const displayResult = (msg) => {
		resultTag.classList.remove('hide')
		resultText = msg
	}
	console.log(form)

	
	
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
<label for="email" >Your Email:</label>
<input name="email" type="text" id="email">
<br>
<label for="favSong">Your Favorite Album:</label>
<input name="favSong" type="text" id="favSong">
<br>
<button type='submit'>[Join]</button>
</form>
{#if form != null}
	{#if form.success == true}
		<p>Email Recorded. Thank you for the new music to check out.</p>
	{/if}
	{#if form.success == false}
		<p>Error: Invalid email or Album input.</p>
	{/if}
{/if}

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