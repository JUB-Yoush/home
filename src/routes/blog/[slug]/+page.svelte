<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	{#if (data.wip == 'false')}
    <p>Published: {data.date}</p>
		<svelte:component this={data.content} />
    {:else}
    <p>Still writing this one!</p>
	{/if}
</article>
