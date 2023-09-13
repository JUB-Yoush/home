<script>
import { compile } from 'mdsvex';

const PROJECTS =[
	{name:'pdp-rpg',
	tags:['godot','raw skill'],
	favorite:true,
	date:'2023-05-12',
	link:'https://github.com/JUB-Yoush/pdp-rpg',
	description:
	`
- My submission for Yudum dare 3, our clubs third game jam (we hosted the global game jam).

- A fusion between the puzzle game Panel de Pon (Tetris attack) and a turn based rpg.

- One of the most challenging things I've ever coded. I will revisit this project.
	`
	},
] 

</script>

<h1>Projects</h1>
<a href="https://github.com/JUB-Yoush/" target="_blank" >github</a>
<a href="https://yoush.itch.io/" target="_blank" >itch.io</a>

<p> This page just has a selection of my favorite/recent projects. If you'd like to see EVERYTHING I've ever done, [jaydenpb dot net slash EVERYTHING](/everything)</p>

{#each PROJECTS as project}
	if
	<h3>{project.name}</h3>
	<h4>{project.tags}</h4>
{/each}


### <a href="https://github.com/JUB-Yoush/home" target="_blank" >This website</a>
#### Sveltekit TacheyonsCSS
- Simple blog and portfolio site. I used Sveltekit to be able to make a simple api for gathering posts in a directory as well as writing pages in markdown (with some js functions)

- certified Jaydenpb-heads will know this site used to be in flask, and if I'm ever working on a bespoke backend, it'll be my go-to, but sveltekit makes building stuff really fast and enjoyable, so I'll definitely keep using it, even though using it for a could-be-static markdown site is a little overkill.

- also tacheyons is like tailwind but with no setup 🦧

###  <a href="https://github.com/JUB-Yoush/gdyu-site" target="_blank" >GDYU's Website</a>
#### SvelteKit TailwindCSS Typescript SkeletonUI
- my first SvelteKit project and I am NEVER GOING BACK. I've done my reps with raw web development languages, and I'm ready to be *cybernetically enhanced.*

- This was a little frontend site I made for the game development club I founded at york University. Not only because we are on the precipice of a merchandise release and would like to have a store to display our wares, but also because Hack the North asked for a link to our projects and I thought having a site to show them would be cool. (It totally worked and they let me into HTN 2023!!)

### <a href="https://yoush.itch.io/pdp-rpg" target="_blank" >pdp-rpg</a>
#### Godot Engine 4
- My submission for Yudum dare 3, our clubs third game jam (we hosted the global game jam).

- A fusion between the puzzle game Panel de Pon (Tetris attack) and a turn based rpg.

- One of the most challenging things I've ever coded. I will revisit this project.

### <a href="https://github.com/JUB-Yoush/methacks23" target="_blank" >Pomoduino</a>
#### HTML CSS JS C++ SQL Flask
- My teams submission for Methacks 2023.

- It's a pomodoro timer that sends stats about how you study to a database and displays it to a webpage. I was in charge of the software front-end, back-end and Database. 



### <a href="https://yoush.itch.io/mts" target="_blank" >Mail Toss Scallywag (DATT:3300) </a>
#### Godot Engine 3
- A project for a 3d Game mechanics course. Yes that is the Rei Plushie. I really did intend on changing it for something else but the model just... grew on me ya know? (that and I didn't know what to replace it with).

- My first 3d Project and I did a very good job. Still one of my most impressive looking projects.


