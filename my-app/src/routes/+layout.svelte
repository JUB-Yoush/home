<script>
	import '../css/tachyons.css';
	import '../css/global.css';
    import {curr_flavor_index} from '../js/flavor'
    import {flavorRef} from '../js/flavor'
    import {onMount } from 'svelte'
    import {writable} from 'svelte/store';
	import {browser} from '$app/environment';
	//FLAVOUR LOGIC
	let local_flavor_index
	let anchor_array = []
	let read = false
	curr_flavor_index.subscribe((index)=>local_flavor_index = index)
	
	

	let savestore = false
  $: if (savestore && $curr_flavor_index) {
    window.sessionStorage.setItem("store", JSON.stringify($curr_flavor_index))
  }

    onMount(() => {
		let ses = window.sessionStorage.getItem("store")
		if (ses) {
			console.log("sob-- ~ loading ses", ses)
			$curr_flavor_index = JSON.parse(ses)
		}
		savestore = true
		render_flavor(local_flavor_index)
	})


	function change_flavour(){
		local_flavor_index += 1
		if (local_flavor_index > flavorRef.length -1){
            local_flavor_index = 0
		}
		//curr_flavor_index.set(local_flavor_index)
		window.sessionStorage.setItem("store",local_flavor_index)
		console.log(curr_flavor_index,local_flavor_index,typeof(local_flavor_index))
		render_flavor(local_flavor_index)
	}

	let bodyStyles = {};
	let linkStyles = {};
	
	function render_flavor(flavor_index){
		if (browser) {
			
			const current_flavor = flavorRef[flavor_index]
			const body = document.body

			let links = document.getElementsByTagName("a");
			for(var i=0;i<links.length;i++)
			{   links[i].style.color = current_flavor.text_color;  
				links[i].addEventListener('mouseover',function(){
					this.style.color = current_flavor.link_color
				});
				links[i].addEventListener('mouseout',function(){
					this.style.color = current_flavor.text_color
				});}   

			body.style.backgroundColor = current_flavor.bg_color
			body.style.color = current_flavor.text_color
		}
	}
    
        //setup storage for first time
</script>

<link href="https://fonts.googleapis.com/css?family=Spline Sans Mono" rel="stylesheet" />
<div class="border pt4-ns">
    <div>----------------------------</div>
</div>
<body class=" ma2  flex flex-column justify-center items-center">
	<div class="mr-auto ml-auto flex flex-column flex-row-ns">
		<div class="mt3 tr flex flex-row flex-wrap flex-column-ns">
			<div class="mt2 mr3"><a class="" href="index">home</a></div>
			<div class="mt2 mr3"><a class="" href="about">about</a></div>
			<div class="mt2 mr3"><a class="" href="resume">hire me 😳</a></div>
			<div class="mt2 mr3"><a class="" href="projects">projects</a></div>
			<div class="mt2 mr3"><a class="" href="posts">blog</a></div>
			<div class="site-flavor mt2 mr3">
				<a class="" href="javascript:;" on:click={change_flavour}>{flavorRef[local_flavor_index].name}</a>
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
