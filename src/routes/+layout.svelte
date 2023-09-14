<script>
	import '../css/tachyons.css';
	import '../css/global.css';
	import {theme_index_store} from '../js/theme'
	import {onMount} from 'svelte'

	const themes = ["plain","mint","s.berry","banana","peanut","grape","melon"]
	let theme_index = 0
	let theme = "plain"

	theme_index_store.subscribe((index)=>theme_index = index)

	onMount(() => {
		
        let ses = window.sessionStorage.getItem("store")
        if (ses) {
            //console.log("sob-- ~ loading ses", ses)
            $theme_index_store = JSON.parse(ses)
			document.documentElement.setAttribute('data-theme',themes[theme_index])
        }
        savestore = true
		
    })


	let savestore = false
  $: if (savestore && $theme_index_store) {
    window.sessionStorage.setItem("store", JSON.stringify($theme_index_store))
  }
	
	function change_flavour(){
		theme_index = theme_index+1
		theme_index = theme_index % themes.length

		window.sessionStorage.setItem("store",theme_index)
		console.log(theme_index)
		document.documentElement.setAttribute('data-theme',themes[theme_index])
	}

</script>

<style>
*{
    background-color: var(--background-color);
    color: var(--color);

}
a:hover{
    color: var(--hover-color);
}
</style>

<link href="https://fonts.googleapis.com/css?family=Spline Sans Mono" rel="stylesheet" />
<div class="border pt4-ns">
    <div>----------------------------</div>
</div>
<body class=" ma2  flex flex-column justify-center items-center">
	<div class="mr-auto ml-auto flex flex-column flex-row-ns">
		<div class="mt3 tr flex flex-row flex-wrap flex-column-ns">
			<div class="mt2 mr3"><a class="" href="/">home</a></div>
			<div class="mt2 mr3"><a class="" href="/about">about</a></div>
			<div class="mt2 mr3"><a class="" href="/resume">hire me 😳</a></div>
			<div class="mt2 mr3"><a class="" href="/projects">projects</a></div>
			<div class="mt2 mr3"><a class="" href="/blog">blog</a></div>
			<div class="site-flavor mt2 mr3">
				<a class="pointer underline"  on:click={change_flavour}>{themes[theme_index]}</a>
			</div>
		</div>
		<div class="mw6"style="max-width:40rem">
			<slot />
		</div>
	</div>
	<div class="border">
		<div>----------------------------</div>
	</div>
	<div class="links">
		<a class="" href="mailto:jayden.patrick.brooks@gmail.com" target="_blank">email</a>
		<a class="" href="https://www.linkedin.com/in/jaydenpb/" target="_blank">linkedin</a>
		<a class="" href="https://github.com/JUB-Yoush" target="_blank">github</a>
		<a class="" href="https://yoush.itch.io/" target="_blank">itch.io</a>
	</div>
</body>
