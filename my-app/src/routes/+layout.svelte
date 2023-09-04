<script>
	import '../css/tachyons.css';
	import '../css/global.css';
   
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
