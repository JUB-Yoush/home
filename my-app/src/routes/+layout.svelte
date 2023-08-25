<script>
	import '../css/tachyons.css';
	import '../css/global.css';
    import {flavorStore} from '../js/flavor'
    import {flavorRef} from '../js/flavor'
    import {onMount } from 'svelte'
    import {writable} from 'svelte/store';
	//FLAVOUR LOGIC


    $: current_flavor_id = $flavorStore
    $: update_flavor(current_flavor_id)
    console.log(flavorRef)

    function update_flavor(current_flavor_id){
        if (current_flavor_id > flavorRef.length){
            current_flavor_id == 0
            flavorStore.set(0)
        }
        console.log(current_flavor_id)
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
			<div class="mt2 mr3"><a class="link" href="index">home</a></div>
			<div class="mt2 mr3"><a class="link" href="about">about</a></div>
			<div class="mt2 mr3"><a class="link" href="resume">hire me 😳</a></div>
			<div class="mt2 mr3"><a class="link" href="projects">projects</a></div>
			<div class="mt2 mr3"><a class="link" href="posts">blog</a></div>
			<div class="site-flavor mt2 mr3">
				<a class="link" href="javascript:;" on:click={()=> update_flavor(current_flavor_id++)}>placehold</a>
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
		<a class="link" href="mailto:jayden.patrick.brooks@gmail.com" target="_blank">email</a>
		<a class="link" href="https://www.linkedin.com/in/jaydenpb/" target="_blank">linkedin</a>
		<a class="link" href="https://github.com/JUB-Yoush" target="_blank">github</a>
		<a class="link" href="https://yoush.itch.io/" target="_blank">itch.io</a>
	</div>
</body>
