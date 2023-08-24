<script>
	import '../css/tachyons.css';
	import '../css/global.css';
    import {onMount } from 'svelte'
    import {writable} from 'svelte/store';
	//FLAVOUR LOGIC

	const flavors = [
		{ name: 'plain', bg_color: '#e5d6cc', text_color: '#171717', link_color: '#878f8f' },

		{ name: 'mint', bg_color: '#e6f7ff', text_color: '#3b3350', link_color: '#66b7b0' },

		{ name: 'strawberry', bg_color: '#ffcde6', text_color: '#422549', link_color: '#f179a0' },

		{ name: 'banana', bg_color: '#fffeb8', text_color: '#493351', link_color: '#e9c46a' },

		{ name: 'peanut', bg_color: '#fddebc', text_color: '#411e2c', link_color: '#a97766' },

		{ name: 'grape', bg_color: '#e7d4f6', text_color: '#2c0d2c', link_color: '#878f8f' },

		{ name: 'melon', bg_color: '#dff5de', text_color: '#0d142c', link_color: '#878f8f' }
	];

    const current_flavor = writable({});

    onMount(()=> {
        if (typeof window !== "undefined"){
            if (!sessionStorage.getItem('flavor_index')){
                populate_storage();
                change_flavor(0);
            }else{
                change_flavor(parseInt(sessionStorage.getItem("flavor_index")));
            }
        }
    })
    function populate_storage(){
        sessionStorage.setItem("flavor_index",0)
    }

    function change_flavor(flavor_index){
        flavor_index++
        if (flavor_index == flavors.length)
        {flavor_index = 0}
        const selected_flavor = flavors[flavor_index]
        let current_flavor = flavors[flavor_index]
        sessionStorage.setItem("flavor_index",flavor_index)
        render_flavor(current_flavor)
        current_flavor.setItem(selected_flavor)
    }

    function render_flavor(current_flavor){
        const body = document.body
        const siteflavor = document.querySelector('.site-flavor > a')

        let links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++)
        {   links[i].style.color = current_flavor.text_color;  
            links[i].addEventListener('mouseover',function(){
                this.style.color = current_flavor.link_color
            });
            links[i].addEventListener('mouseout',function(){
                this.style.color = current_flavor.text_color
            });}   
        siteflavor.textContent = current_flavor.name

        body.style.backgroundColor = current_flavor.bg_color
        body.style.color = current_flavor.text_color
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
				<a class="link" href="javascript:;" on:click={change_flavor(2)}>{current_flavor.name}</a>
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
